# YSC API

API ASP.NET Core 9 avec Entity Framework Core et SQL Server.

## Démarrage

1. Modifier `appsettings.json` ou utiliser les variables `ConnectionStrings__DefaultConnection`,
   `Jwt__Key`, `Admin__Email` et `Admin__Password`.
2. Vérifier que SQL Server est accessible.
3. Depuis ce dossier :

```powershell
dotnet restore
dotnet run
```

La base `YouthSportsClub` est créée au premier démarrage. Le compte administrateur est créé
à partir de `Admin:Email` et `Admin:Password` uniquement si aucun compte n'existe.

Routes principales : `POST /api/auth/login`, `GET /api/events`, `POST/PUT/DELETE /api/events`
(rôle Admin), et `GET/PUT /api/content`.
