# Déploiement Azure : API + SQL Database (standalone, PAS elastic pool)
# Usage (après az login) :
#   pwsh ./scripts/deploy-azure.ps1

param(
  [string]$ResourceGroup = "rg-youthsportsclub",
  [string]$Location = "francecentral",
  [string]$AppLocation = "westeurope",
  [string]$SqlServerName = "sql-ysc-togo",
  [string]$SqlDbName = "YouthSportsClub",
  [string]$SqlAdminUser = "yscadmin",
  [string]$AppPlanName = "plan-youthsportsclub",
  [string]$WebAppName = "youthsportsclub-api",
  [string]$FrontendOrigin = "https://youthsportsclubtogo.com"
)

$ErrorActionPreference = "Stop"

function New-RandomSecret([int]$Length = 48) {
  $chars = (48..57) + (65..90) + (97..122)
  -join ((1..$Length) | ForEach-Object { [char]($chars | Get-Random) })
}

Write-Host "==> Vérification de la session Azure..."
az account show -o none
if ($LASTEXITCODE -ne 0) { throw "Connectez-vous d'abord : az login" }

$subscriptionId = az account show --query id -o tsv
Write-Host "Subscription: $subscriptionId"

# Mot de passe SQL fort (stocké uniquement pour cette session + app settings)
$sqlPassword = "Ysc!" + (New-RandomSecret 20) + "9"
$jwtKey = New-RandomSecret 64

Write-Host "==> Resource group: $ResourceGroup ($Location)"
az group create --name $ResourceGroup --location $Location -o none

Write-Host "==> SQL Server: $SqlServerName (standalone, non elastic)"
az sql server create `
  --name $SqlServerName `
  --resource-group $ResourceGroup `
  --location $Location `
  --admin-user $SqlAdminUser `
  --admin-password $sqlPassword `
  -o none

Write-Host "==> Firewall SQL : Azure services + IP publique actuelle"
az sql server firewall-rule create `
  --resource-group $ResourceGroup `
  --server $SqlServerName `
  --name AllowAzureServices `
  --start-ip-address 0.0.0.0 `
  --end-ip-address 0.0.0.0 `
  -o none

try {
  $myIp = (Invoke-RestMethod -Uri "https://api.ipify.org").Trim()
  if ($myIp) {
    az sql server firewall-rule create `
      --resource-group $ResourceGroup `
      --server $SqlServerName `
      --name AllowCurrentIp `
      --start-ip-address $myIp `
      --end-ip-address $myIp `
      -o none
  }
} catch {
  Write-Warning "Impossible de détecter l'IP publique ; la règle AllowAzureServices reste active."
}

Write-Host "==> Base SQL: $SqlDbName (Basic DTU, sans elastic pool)"
az sql db create `
  --resource-group $ResourceGroup `
  --server $SqlServerName `
  --name $SqlDbName `
  --edition Basic `
  --capacity 5 `
  --backup-storage-redundancy Local `
  -o none

$sqlFqdn = "$SqlServerName.database.windows.net"
$connectionString = "Server=tcp:$sqlFqdn,1433;Initial Catalog=$SqlDbName;Persist Security Info=False;User ID=$SqlAdminUser;Password=$sqlPassword;MultipleActiveResultSets=True;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"

Write-Host "==> App Service Plan: $AppPlanName (Linux B1) in $AppLocation"
az appservice plan create `
  --name $AppPlanName `
  --resource-group $ResourceGroup `
  --location $AppLocation `
  --sku B1 `
  --is-linux `
  -o none

Write-Host "==> Web App: $WebAppName (.NET 9)"
az webapp create `
  --resource-group $ResourceGroup `
  --plan $AppPlanName `
  --name $WebAppName `
  --runtime "DOTNETCORE:9.0" `
  -o none

Write-Host "==> Configuration applicative"
az webapp config appsettings set `
  --resource-group $ResourceGroup `
  --name $WebAppName `
  --settings `
    ASPNETCORE_ENVIRONMENT=Production `
    ConnectionStrings__DefaultConnection="$connectionString" `
    Jwt__Key="$jwtKey" `
    Admin__Email="admin@youthsportsclubtogo.com" `
    Admin__Password="Junior@99800497" `
    Frontend__Origins__0="$FrontendOrigin" `
    Frontend__Origins__1="https://www.youthsportsclubtogo.com" `
    Frontend__Origins__2="http://localhost:1234" `
    Frontend__Origins__3="http://127.0.0.1:1234" `
  -o none

# RUN_FROM_PACKAGE peut rester actif : les uploads vont sous $HOME/site/ysc-data
az webapp config appsettings delete `
  --resource-group $ResourceGroup `
  --name $WebAppName `
  --setting-names WEBSITE_RUN_FROM_PACKAGE `
  -o none 2>$null

az webapp config set `
  --resource-group $ResourceGroup `
  --name $WebAppName `
  --always-on true `
  -o none

Write-Host "==> Publication de l'API (.NET)"
$project = Join-Path $PSScriptRoot "..\backend\Ysc.Api\Ysc.Api.csproj" | Resolve-Path
$publishDir = Join-Path $env:TEMP "ysc-api-publish"
if (Test-Path $publishDir) { Remove-Item $publishDir -Recurse -Force }
dotnet publish $project -c Release -o $publishDir
if ($LASTEXITCODE -ne 0) { throw "dotnet publish a échoué" }

$zipPath = Join-Path $env:TEMP "ysc-api.zip"
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
Compress-Archive -Path (Join-Path $publishDir "*") -DestinationPath $zipPath -Force

az webapp deploy `
  --resource-group $ResourceGroup `
  --name $WebAppName `
  --src-path $zipPath `
  --type zip `
  --async false `
  -o none

$apiUrl = "https://$WebAppName.azurewebsites.net"
Write-Host ""
Write-Host "============================================"
Write-Host " Déploiement terminé"
Write-Host " API URL       : $apiUrl"
Write-Host " SQL Server    : $sqlFqdn"
Write-Host " SQL Database  : $SqlDbName (Basic, non elastic)"
Write-Host " SQL Admin     : $SqlAdminUser"
Write-Host "============================================"
Write-Host " IMPORTANT : notez le mot de passe SQL maintenant (non rejoué) :"
Write-Host " $sqlPassword"
Write-Host " Configurez REACT_APP_API_URL=$apiUrl/api pour le frontend."
Write-Host "============================================"

# Sauvegarde locale non versionnée des infos de déploiement
$outFile = Join-Path $PSScriptRoot "..\.azure-deploy-info.json" | Resolve-Path -ErrorAction SilentlyContinue
$infoPath = Join-Path (Split-Path $PSScriptRoot -Parent) ".azure-deploy-info.json"
@{
  apiUrl = $apiUrl
  sqlServer = $sqlFqdn
  sqlDatabase = $SqlDbName
  sqlAdmin = $SqlAdminUser
  sqlPassword = $sqlPassword
  resourceGroup = $ResourceGroup
  webApp = $WebAppName
  deployedAt = (Get-Date).ToString("o")
} | ConvertTo-Json | Set-Content -Path $infoPath -Encoding UTF8

Write-Host "Infos sauvegardées dans .azure-deploy-info.json (ne pas committer)."
