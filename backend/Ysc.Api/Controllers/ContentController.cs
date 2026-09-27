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
    public async Task<ActionResult<SiteContent>> Upsert(SiteContent item)
    {
        var existing = await db.SiteContents.SingleOrDefaultAsync(x => x.Page == item.Page && x.Key == item.Key);
        if (existing is null) db.SiteContents.Add(item);
        else { existing.Value = item.Value; existing.UpdatedAt = DateTime.UtcNow; }
        await db.SaveChangesAsync();
        return Ok(existing ?? item);
    }

    [HttpDelete("{page}/{key}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> Delete(string page, string key)
    {
        var item = await db.SiteContents.SingleOrDefaultAsync(x => x.Page == page && x.Key == key);
        if (item is null) return NotFound();
        db.SiteContents.Remove(item);
        await db.SaveChangesAsync();
        return NoContent();
    }
}
