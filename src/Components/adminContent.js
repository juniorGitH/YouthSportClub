import { resolveMediaUrl } from "../api";

// Configuration du back office : pages modifiables, blocs de chaque page
// et contenus par défaut (ceux actuellement affichés sur le site).
//
// Un bloc = { title, text, image, image2 } enregistré sous la clé `block:<clé>`.
// Tant qu'un bloc n'a pas été enregistré en base, l'éditeur affiche le contenu par défaut ci-dessous.

const lines = (...items) => items.join("\n");
const groups = (...items) => items.join("\n\n");

// [clé, libellé, description]
export const contentPages = [
  ["accueil", "Accueil", "Hero, disciplines, palmarès, infos pratiques, engagement social et appel à l'action"],
  ["rejoindre", "Rejoindre", "Inscription, cours privés, témoignage et programme social"],
  ["evenements", "Événements", "Introduction, événements passés, palmarès et appel à l'action"],
  ["entrainements", "Entraînements", "Disciplines, planning hebdomadaire et appel à l'action"],
  ["a-propos", "À propos", "Présentation, histoire, équipe, engagement social et contact"],
  ["athletes", "Athlètes & histoires", "Introduction de la page (les fiches se gèrent dans « Athlètes & histoires »)"],
];

// [clé, libellé, aide (optionnelle)]
export const contentBlocks = {
  accueil: [
    ["hero", "Hero (titre, sous-titre, chiffres clés)", "Chiffres clés : une ligne par chiffre, au format « valeur | libellé »."],
    ["disc-intro", "Disciplines : introduction"],
    ["disc-gym", "Discipline : Gymnastique"],
    ["disc-boxe", "Discipline : Boxe"],
    ["disc-fitness", "Discipline : Fitness & Cross Training"],
    ["palmares-intro", "Palmarès : introduction"],
    ["palmares-1", "Palmarès : Résultat 1"],
    ["palmares-2", "Palmarès : Résultat 2"],
    ["palmares-3", "Palmarès : Résultat 3"],
    ["palmares-4", "Palmarès : Résultat 4"],
    ["infos", "Informations pratiques : introduction"],
    ["horaires", "Horaires d'entraînement", "Une ligne par créneau, au format « Groupe | Horaire »."],
    ["tarifs", "Tarifs", "Une ligne par tarif, au format « Libellé | Montant »."],
    ["social", "Engagement social"],
    ["cta", "Appel à l'action"],
  ],
  rejoindre: [
    ["hero", "Présentation (titre, accroche, atouts)"],
    ["steps", "Inscription en 3 étapes", "Une ligne par étape : « Titre | Description »."],
    ["private", "Cours privés"],
    ["benefits", "Bénéfices des cours privés", "Une ligne par bénéfice."],
    ["practice", "En pratique (lieu, encadrement, horaires, contact)", "Une ligne par information, au format « Libellé | Valeur »."],
    ["gallery", "Galerie photos"],
    ["testimonial", "Témoignage"],
    ["social", "Programme social"],
    ["cta", "Appel à l'action"],
  ],
  evenements: [
    ["intro", "Introduction (Agenda & Palmarès)"],
    ["upcoming", "Prochains rendez-vous : titre de section", "Les événements à venir eux-mêmes se gèrent dans la section « Événements » du menu."],
    ["history", "Événements passés : titre de section"],
    ["past-1", "Événement passé 1", "Ligne 1 : type · année · lieu — Ligne 2 : distinction — Lignes suivantes : description."],
    ["past-2", "Événement passé 2", "Ligne 1 : type · année · lieu — Ligne 2 : distinction — Lignes suivantes : description."],
    ["past-3", "Événement passé 3", "Ligne 1 : type · année · lieu — Ligne 2 : distinction — Lignes suivantes : description."],
    ["palmares-intro", "Palmarès : titre et introduction"],
    ["palmares-results", "Palmarès : lauréats", "Séparez chaque résultat par une ligne vide (discipline, compétition, puis un podium par ligne)."],
    ["cta", "Appel à l'action"],
  ],
  entrainements: [
    ["intro", "Introduction"],
    ["schedule", "Planning hebdomadaire", "Une ligne par créneau, au format « Groupe | Horaire »."],
    ["gymnastique", "Gymnastique", "Après la description, une ligne par point pratique (horaires, lieu, encadrant…)."],
    ["boxe", "Boxe éducative", "Après la description, une ligne par point pratique (horaires, lieu, encadrant…)."],
    ["fitness", "Fitness & Cross-training", "Après la description, une ligne par point pratique (horaires, lieu, encadrant…)."],
    ["cta", "Appel à l'action"],
  ],
  "a-propos": [
    ["intro", "Présentation et équipe"],
    ["performance", "Club performant"],
    ["history", "Notre histoire", "Une ligne par année, au format « Année | Fait marquant ». Répétez l'année pour plusieurs faits."],
    ["axes", "Axes de développement"],
    ["coaches-intro", "Encadrement qualifié : introduction"],
    ["coaches-fig", "Coachs certifiés FIG"],
    ["coaches-staps-1", "Coachs STAPS (photo 1)"],
    ["coaches-staps-2", "Coachs STAPS (photo 2)"],
    ["coaches-combat-1", "Coachs sports de combat (photo 1)"],
    ["coaches-combat-2", "Coachs sports de combat (photo 2)"],
    ["coaches-combat-3", "Coachs sports de combat (photo 3)"],
    ["coaches-prep", "Coachs préparation physique"],
    ["social", "Engagement social"],
    ["contact", "Nous contacter"],
    ["cta", "Appel à l'inscription"],
  ],
  athletes: [
    ["intro", "Introduction"],
  ],
};

export const emptyBlock = { title: "", text: "", image: "", image2: "" };

const intro = "Le Youth Sports Club (YSC) est une association sportive basée à Lomé, fondée en 2022. Depuis sa création, le club s'est imposé comme une référence nationale, notamment en gymnastique, en se classant régulièrement parmi les meilleurs clubs lors des compétitions et en remportant de nombreux trophées.";
const introSocial = "Au-delà de la performance sportive, le Youth Sports Club s'inscrit dans une démarche sociale visant à favoriser l'accès au sport pour tous, notamment à travers des dispositifs de bourses et d'accompagnement des jeunes issus de milieux modestes. Le club considère le sport comme un puissant outil d'éducation, d'inclusion et de transformation sociale.";
const gymDesc = "Le programme de gymnastique forme les enfants et les adultes à travers des exercices au sol, aux agrès et en acrobaties.";
const boxeDesc = "La boxe éducative du YSC est une approche pédagogique et non violente qui développe la concentration, la gestion du stress et l'esprit sportif.";
const fitDesc = "Le programme fitness du YSC est conçu pour tous les âges souhaitant améliorer leur condition physique globale. Renforcement musculaire, travail cardiovasculaire, mobilité et coordination sont au programme — adapté à chaque niveau, du débutant au sportif régulier.";
const slots = ["11 ans et moins : 10h – 12h", "12 ans et plus : 08h – 10h", "Adultes : 10h30 – 11h30", "Samedi uniquement", "Stade de Kégué, Lomé"];
const schedule = lines("12 ans et plus | Samedi 08h – 10h", "11 ans et moins | Samedi 10h – 12h", "Adultes | Samedi 10h30 – 11h30");

export const defaultBlocks = {
  accueil: {
    hero: {
      title: "YOUTH SPORTS CLUB",
      text: lines(
        "Lomé, Togo · Fondé en 2022",
        "Association sportive de référence nationale, spécialisée dans la formation et l'encadrement des jeunes à travers la gymnastique, la boxe et le fitness.",
        "3+ | Années d'expérience",
        "3 | Disciplines",
        "🥇 | Champions nationaux",
        "100% | Inclusif",
      ),
    },
    "disc-intro": { title: "Disciplines du club", text: "Trois activités complémentaires pour tous les profils et tous les niveaux, encadrées par des professionnels qualifiés." },
    "disc-gym": { title: "Gymnastique", text: "Notre discipline phare. Souplesse, coordination et maîtrise corporelle. Coachs certifiés FIG." },
    "disc-boxe": { title: "Boxe", text: "Condition physique, discipline et maîtrise de soi. Encadrée par des spécialistes en sports de combat." },
    "disc-fitness": { title: "Fitness & Cross Training", text: "Remise en forme et renforcement musculaire. Accessible à tous les niveaux, adultes et jeunes." },
    "palmares-intro": {
      title: "Notre palmarès",
      text: lines("Le Youth Sports Club forme des champions à l'échelle zonale, nationale et africaine.", "Résultats et distinctions", "Champion de zone · Vice-champion national · Médailles en gymnastique aérobic, fitness et boxe éducative."),
    },
    "palmares-1": { title: "Champion de zone", text: lines("Gymnastique", "Moins de 12 ans · 2025") },
    "palmares-2": { title: "Vice-champion national", text: lines("Fitness", "Moins de 12 ans · 2024") },
    "palmares-3": { title: "2 médailles d'or", text: lines("Boxe éducative", "Championnat de zone · 2024") },
    "palmares-4": { title: "3e place nationale", text: lines("Fitness", "Moins de 12 ans · 2024") },
    infos: { title: "Informations pratiques", text: "Retrouvez-nous au Stade de Kégué, Lomé. Entraînements le samedi. Tous niveaux acceptés." },
    horaires: { title: "Horaires d'entraînement", text: lines(schedule, "Lieu | Stade de Kégué") },
    tarifs: { title: "Tarifs", text: lines("Inscription | 5 000 FCFA", "Mensualité enfant | 20 000 FCFA", "Mensualité adulte | 15 000 FCFA", "Réduction fratrie | 3 enfants et +") },
    social: {
      title: "L'accès au sport pour tous",
      text: lines(
        "Le YSC s'engage activement pour l'inclusion et l'accessibilité du sport. Des dispositifs concrets accompagnent les jeunes issus de milieux modestes dans leur parcours sportif et de vie : bourses, réductions familiales et suivi personnalisé.",
        "Bourses partielles",
        "Bourses totales",
        "Détection des talents",
        "Accompagnement personnalisé",
        "Réduction fratrie (3 enfants+)",
      ),
    },
    cta: { title: "Prêt à rejoindre le club ?", text: "Tous niveaux acceptés · Encadrement professionnel · Stade de Kégué, Lomé" },
  },

  rejoindre: {
    hero: {
      title: "Rejoignez le Youth Sports Club",
      text: lines(
        "+100 jeunes suivis cette saison à Lomé",
        "Un encadrement sportif d'excellence, avec un suivi pédagogique adapté à tous les niveaux.",
        "Encadrement assuré par une équipe titulaire d'une licence STAPS et du diplôme FIG niveau 1, avec des certifications en boxe éducative, fitness et cross-training.",
        "Programme sur mesure",
        "Progression mesurable",
        "Communauté bienveillante",
      ),
    },
    steps: {
      title: "Comment inscrire votre enfant",
      text: lines(
        "Écrivez-nous sur WhatsApp | Un message est déjà prêt : il vous suffit d'appuyer sur le bouton ci-dessous.",
        "Donnez-nous quelques infos | Nom, âge et discipline souhaitée (gymnastique, boxe ou fitness) suffisent pour démarrer.",
        "On confirme votre séance | Un membre de l'équipe revient vers vous sous 24h pour fixer le premier cours.",
        "Vos informations restent entre vous et l'équipe du club.",
      ),
    },
    private: {
      title: "Progressez à votre rythme, avec un coach",
      text: lines("Séances individuelles pensées pour l'objectif, le niveau et l'emploi du temps de chaque athlète.", "Un accompagnement individuel, à domicile ou en extérieur, quel que soit le niveau."),
    },
    benefits: {
      title: "Ce que ça change",
      text: lines("Progression technique accélérée", "Programme adapté à l'âge et au niveau", "Préparation physique et mentale ciblée", "Confiance en soi renforcée séance après séance"),
    },
    practice: {
      title: "En pratique",
      text: lines("Lieu | À domicile ou en extérieur, selon vos préférences", "Encadrement | Coachs certifiés, toutes disciplines", "Horaires | Flexibles, week-end inclus", "Contact | +228 99 67 01 86 · +228 91 53 48 85"),
    },
    gallery: { title: "", text: "" },
    testimonial: {
      title: "",
      text: "Merci pour tout ce que vous avez fait pour notre famille. On est tellement contents d'avoir commencé cette aventure avec YSC depuis les premiers jours. Vous avez une passion, une vision et une expertise uniques — nous n'allons jamais vous oublier.",
      author: "Cora-CW, Piper-Beckett & Mosa",
    },
    social: {
      title: "Programme social YSC\nLe sport pour tous",
      text: lines(
        "Parce que le sport doit rester accessible à tous, YSC met en place un programme social pour soutenir les familles et accompagner les jeunes motivés par la gymnastique.",
        "Bourse de 50 % sur la mensualité",
        "Entraînement gratuit possible pour les enfants issus de familles en difficulté",
        "Aides spécifiques selon les besoins : transport, accompagnement",
        "Objectif : permettre à chaque enfant motivé de pratiquer la gymnastique, quelles que soient les conditions sociales.",
      ),
    },
    cta: { title: "Une place vous attend au prochain cours d'essai.", text: "Réserver une séance privée" },
  },

  evenements: {
    intro: {
      title: "Événements",
      text: "Compétitions, stages et tournois — retrouvez toute l'actualité sportive du Youth Sports Club, passée et à venir.",
    },
    upcoming: { title: "Calendrier à venir", text: "Compétitions, stages et événements organisés par le club et ses partenaires." },
    history: { title: "Événements passés", text: "Retour sur les compétitions et moments forts vécus par le club." },
    "past-1": {
      title: "Championnat de zone – Gymnastique",
      text: lines("Compétition · 2023 · Togo", "🥇 Plusieurs podiums", "Nos gymnastes ont brillé lors du championnat de zone 2023, avec notamment CISSE Maya (1re) et Cheuvreuil Ayana (2e) en tête des classements."),
    },
    "past-2": {
      title: "Championnat national – Gymnastique",
      text: lines("Compétition · 2023 · Togo", "🥇 Multiples médailles", "Le YSC a dominé le championnat national 2023 dans plusieurs catégories : podiums en fitness, boxe éducative et gymnastique aérobic."),
    },
    "past-3": {
      title: "Championnat d'Afrique – Gymnastique Aérobic",
      text: lines("Compétition · 2024 · Égypte", "🥉 Médaille de bronze", "PANASSI Emmanuel a décroché la médaille de bronze au championnat d'Afrique de gymnastique aérobic 2024 en Égypte, portant haut les couleurs du Togo et du YSC."),
    },
    "palmares-intro": { title: "Nos lauréats", text: "Les athlètes du Youth Sports Club qui ont brillé en compétition régionale, nationale et africaine." },
    "palmares-results": {
      title: "Palmarès",
      text: groups(
        lines("Gymnastique Aérobic", "Championnat d'Afrique 2024 – Égypte", "🥉 Bronze : PANASSI Emmanuel", "Médaillé de bronze au championnat d'Afrique de gymnastique aérobic 2024 en Égypte."),
        lines("Gymnastique / Fitness", "Championnat National 2023", "🥇 1er : PANASSI Emmanuel", "🥈 2e : ATOKLO Guillaume", "🥉 3e : ADADO Lucrèce"),
        lines("Fitness", "Championnat de Zone 2023", "🥇 1re : CISSE Maya", "🥈 2e : Cheuvreuil Ayana"),
        lines("Fitness – Catégorie A", "Championnat National 2023", "🥇 1re : Cheuvreuil Ayana", "🥈 2e : CISSE Maya"),
        lines("Fitness – Catégorie B", "Championnat National 2023", "🥇 1er : ABBI Mabel", "🥈 2e : DAGBO Félicité", "🥉 3e : ESSODEBOU Zakiya"),
        lines("Boxe éducative", "Compétition – Catégorie Junior", "🥇 1re : RAHIMI Kiana"),
        lines("Gymnastique", "Compétition – Catégorie Cadet", "🥇 1re : BOUKPETI Lena"),
        lines("Fitness", "Compétition – Podium Collectif", "🥇 1re : BARNABO Félicité", "🥈 2e : RAHIMI Leyli", "🥉 3e : BROQUET Emilie"),
      ),
    },
    cta: { title: "Rejoignez un club de champions", text: "Inscription ouverte toute l'année · Encadrement professionnel · Stade de Kégué, Lomé" },
  },

  entrainements: {
    intro: { title: "Nos entraînements", text: "Découvrez nos disciplines, nos horaires et nos programmes adaptés à tous les niveaux." },
    schedule: {
      title: "Planning hebdomadaire",
      text: lines(
        "Les entraînements ont lieu le samedi au Stade de Kégué, avec des créneaux adaptés aux enfants, aux jeunes et aux adultes.",
        "Toutes les disciplines — Samedi au Stade de Kégué · Séances privées disponibles sur rendez-vous",
        "12 ans et plus | 08h00 – 10h00 | Gymnastique, Boxe éducative, Fitness",
        "11 ans et moins | 10h00 – 12h00 | Gymnastique, Boxe éducative, Fitness",
        "Adultes | 10h30 – 11h30 | Gymnastique, Boxe éducative, Fitness",
      ),
    },
    gymnastique: {
      title: "Gymnastique",
      text: lines("Souplesse, coordination et dépassement de soi", gymDesc, ...slots, "Encadrant certifié FIG", "Préparation aux compétitions nationales"),
    },
    boxe: {
      title: "Boxe éducative",
      text: lines("Discipline, respect et maîtrise de soi", boxeDesc, ...slots, "Encadrant certifié boxe éducative", "Approche non-violente et éducative"),
    },
    fitness: {
      title: "Fitness & Cross-training",
      text: lines("Force, mobilité et forme complète", fitDesc, ...slots, "Encadrant certifié fitness & cross-training", "Cardio, renforcement et mobilité"),
    },
    cta: {
      title: "Prêt à rejoindre une discipline ?",
      text: "Nos coachs vous accueillent chaque samedi et vous orientent vers le programme adapté à votre profil.",
    },
  },

  "a-propos": {
    intro: { title: "Présentation et équipe", text: groups(intro, introSocial) },
    performance: {
      title: "Un club performant",
      text: lines(
        "Depuis sa création, le YSC se classe régulièrement parmi les meilleurs clubs lors des compétitions nationales.",
        "Trophées de meilleur club | Classé 1er club de gymnastique au Togo depuis sa création",
        "Médailles individuelles | Nombreuses distinctions décernées à nos athlètes en compétition",
        "Culture d'excellence | Encadrement rigoureux axé sur la performance et la régularité",
      ),
    },
    history: {
      title: "Notre histoire",
      text: lines(
        "Les grandes étapes du Youth Sports Club depuis sa fondation.",
        "2022 | Création du Youth Sports Club à Lomé",
        "2022 | Lancement du programme de bourses sportives",
        "2022 | Premières séances d'entraînement de gymnastique à l'école",
        "2022 | Premier titre de meilleur club aux compétitions nationales",
        "2023 | Poursuite des séances au stade de Kégué à la mi-année",
        "2024 | Ouverture des disciplines Boxe et Fitness",
        "2024 | Mise en place de l'axe Excellence et détection de talents",
        "2024 | Première médaille au championnat d'Afrique junior de gymnastique aérobic",
        "2025 | Meilleur club de gymnastique",
      ),
    },
    axes: {
      title: "Nos axes de développement",
      text: lines(
        "Le club s'organise autour de deux axes complémentaires pour couvrir tous les profils.",
        "Axe Sport & Bien-être | Accueillir des jeunes de tous niveaux et leur faire découvrir les bienfaits du sport sur leur corps et leur mental. | Gymnastique, Boxe, Fitness & Cross Training",
        "Axe Excellence | Détecter les talents et les préparer aux compétitions régionales, nationales et internationales. | Préparation compétitive, Suivi individualisé, Stages et regroupements",
      ),
    },
    "coaches-intro": { title: "Un encadrement qualifié", text: "Chaque séance est animée par des professionnels certifiés et adaptée à l'âge et au niveau des participants." },
    "coaches-fig": { title: "Certifiés FIG", text: "Fédération Internationale de Gymnastique" },
    "coaches-staps-1": { title: "Diplômés STAPS", text: "Sciences et Techniques des Activités Physiques et Sportives" },
    "coaches-staps-2": { title: "Diplômés STAPS – photo 2", text: "" },
    "coaches-combat-1": { title: "Sports de combat", text: "Spécialistes en boxe et préparation physique" },
    "coaches-combat-2": { title: "Sports de combat – photo 2", text: "" },
    "coaches-combat-3": { title: "Sports de combat – photo 3", text: "" },
    "coaches-prep": { title: "Préparation physique", text: "Coaches en renforcement musculaire et fitness" },
    social: {
      title: "Engagement social",
      text: lines(
        "Le YSC s'engage activement pour l'inclusion et l'accessibilité du sport. Des dispositifs concrets accompagnent les jeunes issus de milieux modestes.",
        "Bourses partielles | Réduction significative des frais d'adhésion pour les familles à revenus modestes.",
        "Bourses totales | Prise en charge complète pour les jeunes talents identifiés sans ressources suffisantes.",
        "Détection des talents | Programme actif de repérage des jeunes prometteurs dans les quartiers de Lomé.",
        "Accompagnement personnalisé | Suivi humain et pédagogique au-delà du cadre sportif pour chaque enfant accompagné.",
        "Réduction fratrie | Tarifs préférentiels à partir de 3 enfants d'une même famille inscrits au club.",
      ),
    },
    contact: {
      title: "Nous contacter",
      text: lines(
        "Une question, un renseignement ? Notre équipe vous répond rapidement.",
        "Adresse | Stade de Kégué, Lomé, Togo",
        "Téléphone | +228 99 67 01 86 / +228 91 53 48 85",
        "Email | youthsportsclub.togo@gmail.com",
      ),
    },
    cta: { title: "Rejoignez le Youth Sports Club", text: "Tous niveaux acceptés · Encadrement professionnel · Stade de Kégué, Lomé" },
  },

  athletes: {
    intro: {
      title: "Nos athlètes & leurs histoires",
      text: "Portraits des athlètes du Youth Sports Club et petites histoires qui font vivre le club.",
    },
  },
};

// ---------------------------------------------------------------------------
// Athlètes & histoires : chaque fiche est stockée sous la clé `entry:<id>`
// de la page de contenu « athletes » (aucune modification du backend requise).
// ---------------------------------------------------------------------------
export const entriesPage = "athletes";

export const emptyEntry = {
  kind: "athlete", // "athlete" | "story"
  title: "",       // nom de l'athlète ou titre de l'histoire
  subtitle: "",    // discipline · catégorie (athlète) ou accroche (histoire)
  highlight: "",   // distinction principale (athlète uniquement)
  text: "",
  image: "",
  published: true,
};

export const newEntryId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

export const parseEntries = (items = []) =>
  items
    .filter((item) => item.key.startsWith("entry:"))
    .map((item) => {
      try { return { id: item.key.slice(6), ...JSON.parse(item.value) }; } catch { return null; }
    })
    .filter(Boolean)
    .map((entry) => ({
      ...entry,
      image: entry.image ? resolveMediaUrl(entry.image) : entry.image,
    }))
    .sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));