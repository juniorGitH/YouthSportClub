using Microsoft.EntityFrameworkCore;
using Ysc.Api.Models;

namespace Ysc.Api.Data;

public sealed class YscDbContext(DbContextOptions<YscDbContext> options) : DbContext(options)
{
    public DbSet<AdminUser> AdminUsers => Set<AdminUser>();
    public DbSet<ClubEvent> Events => Set<ClubEvent>();
    public DbSet<SiteContent> SiteContents => Set<SiteContent>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AdminUser>().HasIndex(x => x.Email).IsUnique();
        modelBuilder.Entity<SiteContent>().HasIndex(x => new { x.Page, x.Key }).IsUnique();
    }
}
