FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY ["Ysc.Api.csproj", "./"]
RUN dotnet restore "Ysc.Api.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "Ysc.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Ysc.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Créer le dossier wwwroot/uploads pour stocker les images
RUN mkdir -p /app/wwwroot/uploads

ENTRYPOINT ["dotnet", "Ysc.Api.dll"]
