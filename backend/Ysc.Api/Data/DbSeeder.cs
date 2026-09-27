using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using Ysc.Api.Models;

namespace Ysc.Api.Data;

public static class DbSeeder
{
    public static async Task SeedAsync(IServiceProvider services, YscDbContext db)
    {
        if (!await db.AdminUsers.AnyAsync())
        {
            var email = services.GetRequiredService<IConfiguration>()["Admin:Email"] ?? "admin@youthsportsclubtogo.com";
            var password = services.GetRequiredService<IConfiguration>()["Admin:Password"];
            if (string.IsNullOrWhiteSpace(password))
                throw new InvalidOperationException("Admin:Password must be configured before starting the API.");

            var user = new AdminUser { Email = email.Trim().ToLowerInvariant(), PasswordHash = "" };
            user.PasswordHash = new PasswordHasher<AdminUser>().HashPassword(user, password);
            db.AdminUsers.Add(user);
            await db.SaveChangesAsync();
        }

        var initialContent = new Dictionary<string, Dictionary<string, string>>
        {
            ["a-propos"] = new()
            {
                ["title"] = "Qui sommes-nous ?",
                ["description"] = "Découvrez l'histoire, les valeurs et la mission du Youth Sports Club.",
                ["block:intro"] = JsonSerializer.Serialize(new { title = "Présentation et équipe", text = "Le Youth Sports Club (YSC) est une association sportive basée à Lomé, fondée en 2022. Depuis sa création, le club s'est imposé comme une référence nationale, notamment en gymnastique, en se classant régulièrement parmi les meilleurs clubs lors des compétitions et en remportant de nombreux trophées.\n\nAu-delà de la performance sportive, le Youth Sports Club s'inscrit dans une démarche sociale visant à favoriser l'accès au sport pour tous, notamment à travers des dispositifs de bourses et d'accompagnement des jeunes issus de milieux modestes. Le club considère le sport comme un puissant outil d'éducation, d'inclusion et de transformation sociale.", image = "http://localhost:5030/uploads/about-team.jpeg" }),
                ["block:performance"] = JsonSerializer.Serialize(new { title = "Un club performant", text = "Depuis sa création, le YSC se classe régulièrement parmi les meilleurs clubs lors des compétitions nationales.\n\nTrophées de meilleur club\nClassé 1er club de gymnastique au Togo depuis sa création\n\nMédailles individuelles\nNombreuses distinctions décernées à nos athlètes en compétition\n\nCulture d'excellence\nEncadrement rigoureux axé sur la performance et la régularité", image = "" }),
                ["block:history"] = JsonSerializer.Serialize(new { title = "Notre histoire", text = "Les grandes étapes du Youth Sports Club depuis sa fondation.\n\n2022\nCréation du Youth Sports Club à Lomé\nLancement du programme de bourses sportives\nPremières séances d'entraînement de gymnastique à l'école\nPremier titre de meilleur club aux compétitions nationales\n\n2023\nPoursuite des séances au stade de Kégué à la mi-année\n\n2024\nOuverture des disciplines Boxe et Fitness\nMise en place de l'axe Excellence et détection de talents\nPremière médaille au championnat d'Afrique junior de gymnastique aérobic\n\n2025\nMeilleur club de gymnastique", image = "" }),
                ["block:axes"] = JsonSerializer.Serialize(new { title = "Nos axes de développement", text = "Le club s'organise autour de deux axes complémentaires pour couvrir tous les profils.\n\nAxe Sport & Bien-être\nAccueillir des jeunes de tous niveaux et leur faire découvrir les bienfaits du sport sur leur corps et leur mental.\nGymnastique\nBoxe\nFitness & Cross Training\n\nAxe Excellence\nDétecter les talents et les préparer aux compétitions régionales, nationales et internationales.\nPréparation compétitive\nSuivi individualisé\nStages et regroupements", image = "" }),
                ["block:coaches-fig"] = JsonSerializer.Serialize(new { title = "Certifiés FIG", text = "Fédération Internationale de Gymnastique", image = "http://localhost:5030/uploads/about-coaches-fig.jpeg" }),
                ["block:coaches-staps-1"] = JsonSerializer.Serialize(new { title = "Diplômés STAPS", text = "Sciences et Techniques des Activités Physiques et Sportives", image = "http://localhost:5030/uploads/about-coaches-staps-1.jpeg" }),
                ["block:coaches-staps-2"] = JsonSerializer.Serialize(new { title = "Diplômés STAPS (2)", text = "", image = "http://localhost:5030/uploads/about-coaches-staps-2.jpeg" }),
                ["block:coaches-combat-1"] = JsonSerializer.Serialize(new { title = "Sports de combat", text = "Spécialistes en boxe et préparation physique", image = "http://localhost:5030/uploads/about-coaches-combat-1.jpeg" }),
                ["block:coaches-combat-2"] = JsonSerializer.Serialize(new { title = "Sports de combat (2)", text = "", image = "http://localhost:5030/uploads/about-coaches-combat-2.jpeg" }),
                ["block:coaches-combat-3"] = JsonSerializer.Serialize(new { title = "Sports de combat (3)", text = "", image = "http://localhost:5030/uploads/about-coaches-combat-3.jpeg" }),
                ["block:coaches-prep"] = JsonSerializer.Serialize(new { title = "Préparation physique", text = "Coaches en renforcement musculaire et fitness", image = "http://localhost:5030/uploads/about-coaches-prep.jpeg" }),
                ["block:social"] = JsonSerializer.Serialize(new { title = "Engagement social", text = "Le YSC s'engage activement pour l'inclusion et l'accessibilité du sport. Des dispositifs concrets accompagnent les jeunes issus de milieux modestes.\n\nBourses partielles\nRéduction significative des frais d'adhésion pour les familles à revenus modestes.\n\nBourses totales\nPrise en charge complète pour les jeunes talents identifiés sans ressources suffisantes.\n\nDétection des talents\nProgramme actif de repérage des jeunes prometteurs dans les quartiers de Lomé.\n\nAccompagnement personnalisé\nSuivi humain et pédagogique au-delà du cadre sportif pour chaque enfant accompagné.\n\nRéduction fratrie\nTarifs préférentiels à partir de 3 enfants d'une même famille inscrits au club.", image = "" }),
                ["block:contact"] = JsonSerializer.Serialize(new { title = "Nous contacter", text = "Une question, un renseignement ? Notre équipe vous répond rapidement.\n\nAdresse\nStade de Kégué\nLomé, Togo\n\nTéléphone\n+228 99 67 01 86 / +228 91 53 48 85\n\nEmail\nyouthsportsclub.togo@gmail.com", image = "" }),
                ["block:cta"] = JsonSerializer.Serialize(new { title = "Rejoignez le Youth Sports Club", text = "Tous niveaux acceptés · Encadrement professionnel · Stade de Kégué, Lomé", image = "" })
            },
            ["disciplines"] = new()
            {
                ["title"] = "Nos disciplines",
                ["description"] = "Trois activités complémentaires pour tous les profils et tous les niveaux, encadrées par des professionnels qualifiés.",
                ["block:gymnastique"] = JsonSerializer.Serialize(new { title = "Gymnastique", text = "Souplesse, coordination et dépassement de soi. Une formation progressive pour développer la motricité, l'équilibre et la confiance.", image = "" }),
                ["block:boxe"] = JsonSerializer.Serialize(new { title = "Boxe éducative", text = "Discipline, respect et maîtrise de soi dans une approche pédagogique et non violente.", image = "" }),
                ["block:fitness"] = JsonSerializer.Serialize(new { title = "Fitness & Cross-training", text = "Renforcement musculaire, cardio et mobilité adaptés à chaque niveau.", image = "" })
            },
            ["palmares"] = new()
            {
                ["title"] = "Notre palmarès",
                ["description"] = "Le Youth Sports Club forme des champions à l'échelle zonale, nationale et africaine.",
                ["block:results"] = JsonSerializer.Serialize(new { title = "Résultats et distinctions", text = "Champion de zone · Vice-champion national · Médailles en gymnastique aérobic, fitness et boxe éducative.", image = "" })
            },
            ["informations-pratiques"] = new()
            {
                ["title"] = "Informations pratiques",
                ["description"] = "Retrouvez-nous au Stade de Kégué, Lomé. Entraînements le samedi. Tous niveaux acceptés.",
                ["block:schedule"] = JsonSerializer.Serialize(new { title = "Horaires", text = "12 ans et plus : samedi 08h – 10h\n11 ans et moins : samedi 10h – 12h\nAdultes : samedi 10h30 – 11h30\nLieu : Stade de Kégué", image = "" }),
                ["block:prices"] = JsonSerializer.Serialize(new { title = "Tarifs", text = "Inscription : 5 000 FCFA\nMensualité enfant : 20 000 FCFA\nMensualité adulte : 15 000 FCFA\nRéduction fratrie : à partir de 3 enfants", image = "" })
            },
            ["engagement-social"] = new()
            {
                ["title"] = "Engagement social",
                ["description"] = "Le YSC s'engage activement pour l'inclusion et l'accessibilité du sport.",
                ["block:programs"] = JsonSerializer.Serialize(new { title = "Le sport pour tous", text = "Bourses partielles et totales, détection des talents, accompagnement personnalisé et réduction fratrie.", image = "" })
            },
            ["rejoindre"] = new()
            {
                ["title"] = "Rejoignez le Youth Sports Club",
                ["description"] = "Un encadrement sportif d'excellence, avec un suivi pédagogique adapté à tous les niveaux.",
                ["block:hero"] = JsonSerializer.Serialize(new { title = "Rejoignez le Youth Sports Club", text = "Un encadrement sportif d'excellence, avec un suivi pédagogique adapté à tous les niveaux.", image = "" }),
                ["block:steps"] = JsonSerializer.Serialize(new { title = "Comment s'inscrire", text = "Écrivez-nous sur WhatsApp, indiquez le nom, l'âge et la discipline souhaitée, puis l'équipe confirme votre première séance.", image = "" }),
                ["block:private"] = JsonSerializer.Serialize(new { title = "Progressez à votre rythme, avec un coach", text = "Séances individuelles pensées pour l'objectif, le niveau et l'emploi du temps de chaque athlète.\n\nUn accompagnement individuel, à domicile ou en extérieur, quel que soit le niveau.", image = "" }),
                ["block:benefits"] = JsonSerializer.Serialize(new { title = "Ce que ça change", text = "Progression technique accélérée\nProgramme adapté à l'âge et au niveau\nPréparation physique et mentale ciblée\nConfiance en soi renforcée séance après séance", image = "" }),
                ["block:practice"] = JsonSerializer.Serialize(new { title = "En pratique", text = "Lieu\nÀ domicile ou en extérieur, selon vos préférences\n\nEncadrement\nCoachs certifiés, toutes disciplines\n\nHoraires\nFlexibles, week-end inclus\n\nContact\n+228 99 67 01 86 · +228 91 53 48 85", image = "" }),
                ["block:gallery"] = JsonSerializer.Serialize(new { title = "Séance privée en action", text = "Coach et athlète en séance", image = "", image2 = "" }),
                ["block:testimonial"] = JsonSerializer.Serialize(new { title = "Cora-CW, Piper-Beckett et Mosa", text = "\"Merci pour tout ce que vous avez fait pour notre famille. On est tellement contents d'avoir commencé cette aventure avec YSC depuis les premiers jours. Vous avez une passion, une vision et une expertise uniques — nous n'allons jamais vous oublier.\"", author = "Cora-CW, Piper-Beckett & Mosa", image = "" }),
                ["block:social"] = JsonSerializer.Serialize(new { title = "Programme social YSC\nLe sport pour tous", text = "Parce que le sport doit rester accessible à tous, YSC met en place un programme social pour soutenir les familles et accompagner les jeunes motivés par la gymnastique.\n\nBourse de 50 % sur la mensualité\nEntraînement gratuit possible pour les enfants issus de familles en difficulté\nAides spécifiques selon les besoins : transport, accompagnement\n\nObjectif : permettre à chaque enfant motivé de pratiquer la gymnastique, quelles que soient les conditions sociales.", image = "" })
            },
            ["entrainements"] = new()
            {
                ["title"] = "Nos entraînements",
                ["description"] = "Découvrez nos disciplines, nos horaires et nos programmes adaptés à tous les niveaux.",
                ["block:schedule"] = JsonSerializer.Serialize(new { title = "Planning hebdomadaire", text = "Les entraînements ont lieu le samedi au Stade de Kégué, avec des créneaux adaptés aux enfants, aux jeunes et aux adultes.", image = "" }),
                ["block:gymnastique"] = JsonSerializer.Serialize(new { title = "Gymnastique", text = "Souplesse, coordination et dépassement de soi\n\nLe programme de gymnastique forme les enfants et les adultes à travers des exercices au sol, aux agrès et en acrobaties.\n\n11 ans et moins : 10h – 12h\n12 ans et plus : 08h – 10h\nAdultes : 10h30 – 11h30\nSamedi uniquement\nStade de Kégué, Lomé\nEncadrant certifié FIG\nPréparation aux compétitions nationales", image = "" }),
                ["block:boxe"] = JsonSerializer.Serialize(new { title = "Boxe éducative", text = "Discipline, respect et maîtrise de soi\n\nLa boxe éducative du YSC est une approche pédagogique et non violente qui développe la concentration, la gestion du stress et l'esprit sportif.\n\n11 ans et moins : 10h – 12h\n12 ans et plus : 08h – 10h\nAdultes : 10h30 – 11h30\nSamedi uniquement\nStade de Kégué, Lomé\nEncadrant certifié boxe éducative\nApproche non-violente et éducative", image = "" }),
                ["block:fitness"] = JsonSerializer.Serialize(new { title = "Fitness & Cross-training", text = "Force, mobility et forme complète\n\nLe programme fitness du YSC est conçu pour tous les âges souhaitant améliorer leur condition physique globale. Renforcement musculaire, travail cardiovasculaire, mobilité et coordination sont au programme — adapté à chaque niveau, du débutant au sportif régulier.\n\n11 ans et moins : 10h – 12h\n12 ans et plus : 08h – 10h\nAdultes : 10h30 – 11h30\nSamedi uniquement\nStade de Kégué, Lomé\nEncadrant certifié fitness & cross-training\nCardio, renforcement et mobilité", image = "" })
            },
            ["evenements"] = new()
            {
                ["title"] = "Calendrier à venir",
                ["description"] = "Compétitions, stages et événements organisés par le club et ses partenaires."
            },
            ["accueil"] = new()
            {
                ["title"] = "YOUTH SPORTS CLUB",
                ["description"] = "Association sportive de référence nationale, spécialisée dans la formation et l'encadrement des jeunes à travers la gymnastique, la boxe et le fitness.",
                ["block:hero"] = JsonSerializer.Serialize(new { title = "YOUTH SPORTS CLUB", text = "Association sportive de référence nationale, spécialisée dans la formation et l'encadrement des jeunes à travers la gymnastique, la boxe et le fitness.", eyebrow = "Lomé, Togo · Fondé en 2022", stat1 = "3+", stat1Label = "Années d'expérience", stat2 = "3", stat2Label = "Disciplines", stat3 = "🥇", stat3Label = "Champions nationaux", stat4 = "100%", stat4Label = "Inclusif", image = "" }),
                ["block:disc-gym"] = JsonSerializer.Serialize(new { title = "Gymnastique", text = "Notre discipline phare. Souplesse, coordination et maîtrise corporelle. Coachs certifiés FIG.", image = "" }),
                ["block:disc-boxe"] = JsonSerializer.Serialize(new { title = "Boxe", text = "Condition physique, discipline et maîtrise de soi. Encadrée par des spécialistes en sports de combat.", image = "" }),
                ["block:disc-fitness"] = JsonSerializer.Serialize(new { title = "Fitness & Cross Training", text = "Remise en forme et renforcement musculaire. Accessible à tous les niveaux, adultes et jeunes.", image = "" }),
                ["block:palmares-1"] = JsonSerializer.Serialize(new { title = "Champion de zone", text = "Moins de 12 ans · 2025", discipline = "Gymnastique", emoji = "🥇", image = "" }),
                ["block:palmares-2"] = JsonSerializer.Serialize(new { title = "Vice-champion national", text = "Moins de 12 ans · 2024", discipline = "Fitness", emoji = "🥈", image = "" }),
                ["block:palmares-3"] = JsonSerializer.Serialize(new { title = "2 médailles d'or", text = "Championnat de zone · 2024", discipline = "Boxe éducative", emoji = "🥇", image = "" }),
                ["block:palmares-4"] = JsonSerializer.Serialize(new { title = "3e place nationale", text = "Moins de 12 ans · 2024", discipline = "Fitness", emoji = "🥉", image = "" }),
                ["block:horaires"] = JsonSerializer.Serialize(new { title = "Horaires d'entraînement", text = "12 ans et plus|Samedi 08h – 10h\n11 ans et moins|Samedi 10h – 12h\nAdultes|Samedi 10h30 – 11h30\nLieu|Stade de Kégué", image = "" }),
                ["block:tarifs"] = JsonSerializer.Serialize(new { title = "Tarifs", text = "Inscription|5 000 FCFA\nMensualité enfant|20 000 FCFA\nMensualité adulte|15 000 FCFA\nRéduction fratrie|3 enfants et +", image = "" }),
                ["block:social"] = JsonSerializer.Serialize(new { title = "L'accès au sport pour tous", text = "Le YSC s'engage activement pour l'inclusion et l'accessibilité du sport. Des dispositifs concrets accompagnent les jeunes issus de milieux modestes dans leur parcours sportif et de vie : bourses, réductions familiales et suivi personnalisé.", tags = "Bourses partielles,Bourses totales,Détection des talents,Accompagnement personnalisé,Réduction fratrie (3 enfants+)", image = "" }),
                ["block:cta"] = JsonSerializer.Serialize(new { title = "Prêt à rejoindre le club ?", text = "Tous niveaux acceptés · Encadrement professionnel · Stade de Kégué, Lomé", image = "" })
            }
        };

        foreach (var page in initialContent)
        {
            foreach (var entry in page.Value)
            {
                var exists = await db.SiteContents.AnyAsync(x => x.Page == page.Key && x.Key == entry.Key);
                if (!exists)
                    db.SiteContents.Add(new SiteContent { Page = page.Key, Key = entry.Key, Value = entry.Value });
            }
        }

        await db.SaveChangesAsync();
    }
}
