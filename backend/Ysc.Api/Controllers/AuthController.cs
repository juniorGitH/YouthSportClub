using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ysc.Api.Data;
using Ysc.Api.Models;
using Ysc.Api.Services;

namespace Ysc.Api.Controllers;

[ApiController]
[Route("api/auth")]
public sealed class AuthController(YscDbContext db, IPasswordHasher<AdminUser> passwordHasher, JwtTokenService tokens)
    : ControllerBase
{
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        var user = await db.AdminUsers.SingleOrDefaultAsync(x => x.Email == request.Email.Trim().ToLower());
        if (user is null || passwordHasher.VerifyHashedPassword(user, user.PasswordHash, request.Password) ==
            PasswordVerificationResult.Failed)
            return Unauthorized(new { message = "Identifiants invalides." });

        return Ok(new { token = tokens.Create(user), user = new { user.Email, user.Role } });
    }

    [HttpGet("me")]
    [Microsoft.AspNetCore.Authorization.Authorize]
    public IActionResult Me() => Ok(new
    {
        email = User.FindFirst(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Email)?.Value
            ?? User.FindFirst(System.Security.Claims.ClaimTypes.Email)?.Value,
        role = User.FindFirst("role")?.Value
            ?? User.FindFirst(System.Security.Claims.ClaimTypes.Role)?.Value
    });
}

public sealed record LoginRequest(string Email, string Password);
