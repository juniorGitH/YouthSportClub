using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ysc.Api.Data;
using Ysc.Api.Models;

namespace Ysc.Api.Controllers;

[ApiController]
[Route("api/events")]
public sealed class EventsController(YscDbContext db) : ControllerBase
{
    [HttpGet]
    public async Task<IEnumerable<ClubEvent>> GetPublished() =>
        await db.Events.Where(x => x.Published)
            .OrderByDescending(x => x.Date).ToListAsync();

    [HttpPost]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult<ClubEvent>> Create(ClubEvent item)
    {
        item.Id = 0;
        db.Events.Add(item);
        await db.SaveChangesAsync();
        return Ok(item);
    }

    [HttpPut("{id:int}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> Update(int id, ClubEvent item)
    {
        var existing = await db.Events.FindAsync(id);
        if (existing is null) return NotFound();
        item.Id = id;
        db.Entry(existing).CurrentValues.SetValues(item);
        await db.SaveChangesAsync();
        return Ok(item);
    }

    [HttpDelete("{id:int}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> Delete(int id)
    {
        var item = await db.Events.FindAsync(id);
        if (item is null) return NotFound();
        db.Events.Remove(item);
        await db.SaveChangesAsync();
        return NoContent();
    }
}
