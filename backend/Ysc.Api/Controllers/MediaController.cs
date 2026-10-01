using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Ysc.Api.Controllers;

[ApiController]
[Route("api/media")]
public sealed class MediaController(IWebHostEnvironment environment) : ControllerBase
{
    private static readonly HashSet<string> AllowedExtensions = [".jpg", ".jpeg", ".png", ".webp"];
    private static readonly Dictionary<string, string> ContentTypeExtensions = new(StringComparer.OrdinalIgnoreCase)
    {
        ["image/jpeg"] = ".jpg",
        ["image/jpg"] = ".jpg",
        ["image/pjpeg"] = ".jpg",
        ["image/png"] = ".png",
        ["image/webp"] = ".webp",
    };

    [HttpPost("photos")]
    [Authorize(Roles = "Admin")]
    [RequestSizeLimit(15 * 1024 * 1024)]
    [RequestFormLimits(MultipartBodyLengthLimit = 15 * 1024 * 1024)]
    public async Task<IActionResult> UploadPhoto([FromForm] IFormFile? file)
    {
        if (file is null || file.Length == 0)
            return BadRequest(new { message = "Aucun fichier reçu. Choisissez une image JPG, PNG ou WebP." });

        if (file.Length > 15 * 1024 * 1024)
            return BadRequest(new { message = "La photo dépasse 15 Mo. Compressez-la puis réessayez." });

        var extension = Path.GetExtension(file.FileName).ToLowerInvariant();
        if (string.IsNullOrWhiteSpace(extension)
            && !string.IsNullOrWhiteSpace(file.ContentType)
            && ContentTypeExtensions.TryGetValue(file.ContentType, out var fromContentType))
        {
            extension = fromContentType;
        }

        if (string.IsNullOrWhiteSpace(extension) || !AllowedExtensions.Contains(extension))
            return BadRequest(new { message = "Format accepté : JPG, PNG ou WebP (pas HEIC)." });

        var webRoot = environment.WebRootPath
            ?? Path.Combine(environment.ContentRootPath, "wwwroot");
        var folder = Path.Combine(webRoot, "uploads");
        Directory.CreateDirectory(folder);

        var fileName = $"{Guid.NewGuid():N}{extension}";
        var path = Path.Combine(folder, fileName);
        await using (var stream = System.IO.File.Create(path))
            await file.CopyToAsync(stream);

        var relativePath = $"/uploads/{fileName}";
        return Ok(new { url = relativePath, path = relativePath });
    }
}
