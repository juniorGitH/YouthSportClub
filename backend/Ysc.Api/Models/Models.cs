namespace Ysc.Api.Models;

public sealed class AdminUser
{
    public int Id { get; set; }
    public required string Email { get; set; }
    public required string PasswordHash { get; set; }
    public string Role { get; set; } = "Admin";
}

public sealed class ClubEvent
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public required string Description { get; set; }
    public DateTime Date { get; set; }
    public required string Location { get; set; }
    public string Category { get; set; } = "Événement club";
    public string? PhotoUrl { get; set; }
    public bool Featured { get; set; }
    public bool Published { get; set; } = true;
}

public sealed class SiteContent
{
    public int Id { get; set; }
    public required string Page { get; set; }
    public required string Key { get; set; }
    public required string Value { get; set; }
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
