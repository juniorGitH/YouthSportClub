using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ysc.Api.Data;
using Ysc.Api.Models;

namespace Ysc.Api.Controllers;

[ApiController]
[Route("api/content")]
public sealed class ContentController(YscDbContext db) : ControllerBase
{
    [HttpGet("{page}")]
    public async Task<IEnumerable<SiteContent>> Get(string page) =>
        await db.SiteContents.Where(x => x.Page == page).ToListAsync();

    [HttpPut]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult<SiteContent>> Upsert([FromBody] ContentUpsertRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Page) || string.IsNullOrWhiteSpace(request.Key))
            return BadRequest(new { message = "La page et la clé du contenu sont obligatoires." });

        var page = request.Page.Trim();
        var key = request.Key.Trim();
        var value = request.Value ?? "";

        var existing = await db.SiteContents.SingleOrDefaultAsync(x => x.Page == page && x.Key == key);
        if (existing is null)
        {
            existing = new SiteContent { Page = page, Key = key, Value = value };
            db.SiteContents.Add(existing);
        }
        else
        {
            existing.Value = value;
            existing.UpdatedAt = DateTime.UtcNow;
        }

        await db.SaveChangesAsync();
        return Ok(existing);
    }

    // Query string évite les problèmes de routing avec les clés du type "entry:..." ou "block:..."
    [HttpDelete("{page}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> Delete(string page, [FromQuery] string key)
    {
        if (string.IsNullOrWhiteSpace(key))
            return BadRequest(new { message = "La clé du contenu est obligatoire." });

        var item = await db.SiteContents.SingleOrDefaultAsync(x => x.Page == page && x.Key == key);
        if (item is null) return NotFound(new { message = "Contenu introuvable." });
        db.SiteContents.Remove(item);
        await db.SaveChangesAsync();
        return NoContent();
    }
}

public sealed record ContentUpsertRequest(string Page, string Key, string? Value);
