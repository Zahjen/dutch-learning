export interface TranslationProps {
    fr: string,
    nl: string
}

export interface vocabularSectionProps {
    title: string,
    id: string,
    data: TranslationProps[]
}

export const vocabularSections: vocabularSectionProps[] = [
    {
        title: "Couleurs - Kleuren",
        id: "color",
        data: [
            {
                fr: "Blanc",
                nl: "Wit"
            },
            {
                fr: "Jeune",
                nl: "Geel"
            },
            {
                fr: "Orange",
                nl: "Oranje"
            },
            {
                fr: "Marron",
                nl: "Bruin"
            },
            {
                fr: "Vert",
                nl: "Groen"
            },
            {
                fr: "Bleu",
                nl: "Blauw"
            },
            {
                fr: "Violet",
                nl: "Paars"
            },
            {
                fr: "Gris",
                nl: "Grijs"
            },
            {
                fr: "Noir",
                nl: "Zwart"
            },
            {
                fr: "Rose",
                nl: "Roze"
            },
            {
                fr: "Rouge",
                nl: "Rood"
            },
            {
                fr: "Couleur + clair",
                nl: "Licht + Kleur (collé)"
            },
            {
                fr: "Couleur + foncé",
                nl: "Donker + Kleur (collé)"
            },
            {
                fr: "Couleur + vif",
                nl: "Helder + Kleur (collé)"
            },
        ]
    },
    {
        title: "Jours de la semaine - Dagen van de week",
        id: "week-day-name",
        data: [
            {
                fr: "Lundi",
                nl: "Maandag"
            },
            {
                fr: "Mardi",
                nl: "Dinsdag"
            },
            {
                fr: "Mercredi",
                nl: "Woensdag"
            },
            {
                fr: "Jeudi",
                nl: "Donderdag"
            }
            ,
            {
                fr: "Vendredi",
                nl: "Vrijdag"
            }
            ,
            {
                fr: "Samedi",
                nl: "Zaterdag"
            }
            ,
            {
                fr: "Dimanche",
                nl: "Zondag"
            }
        ]
    },
    {
        title: "Mois et saisons - Maanden en seizoenen",
        id: "month-season",
        data: [
            {
                fr: "Janvier",
                nl: "Januari"
            },
            {
                fr: "Février",
                nl: "Februari"
            },
            {
                fr: "Mars",
                nl: "Maart"
            },
            {
                fr: "Avril",
                nl: "April"
            }
            ,
            {
                fr: "Mai",
                nl: "Mei"
            }
            ,
            {
                fr: "Juin",
                nl: "Juni"
            }
            ,
            {
                fr: "Juillet",
                nl: "Juli"
            },
            {
                fr: "Août",
                nl: "Augustus"
            },
            {
                fr: "Septembre",
                nl: "September"
            }
            ,
            {
                fr: "Octobre",
                nl: "Oktober"
            }
            ,
            {
                fr: "Novembre",
                nl: "November"
            }
            ,
            {
                fr: "Décembre",
                nl: "December"
            }
        ]
    },
    {
        title: "Les nombres - Nummers",
        id: "numbers",
        data: [
            {
                fr: "Zéro",
                nl: "Nul"
            },
            {
                fr: "Un",
                nl: "Één"
            },
            {
                fr: "Deux",
                nl: "Twee"
            },
            {
                fr: "Trois",
                nl: "Drie"
            },
            {
                fr: "Quatre",
                nl: "Vier"
            },
            {
                fr: "Cinq",
                nl: "Vijf"
            },
            {
                fr: "Six",
                nl: "Zes"
            },
            {
                fr: "Sept",
                nl: "Zeven"
            },
            {
                fr: "Huit",
                nl: "Acht"
            },
            {
                fr: "Neuf",
                nl: "Negen"
            },
            {
                fr: "Dix",
                nl: "Tien"
            },
            {
                fr: "Onze",
                nl: "Elf"
            },
            {
                fr: "Douze",
                nl: "Twaalf"
            },
            {
                fr: "Treize",
                nl: "Dertien"
            },
            {
                fr: "Quatorze",
                nl: "Veertien"
            },
            {
                fr: "Quinze",
                nl: "Vijftien"
            },
            {
                fr: "Seize",
                nl: "Zestien"
            },
            {
                fr: "Dix-sept",
                nl: "Zeventien"
            },
            {
                fr: "Dix-huit",
                nl: "Achttien"
            },
            {
                fr: "Dix-neuf",
                nl: "Negentien"
            },
            {
                fr: "Vingt",
                nl: "Twintig"
            },
            {
                fr: "Vingt-et-un",
                nl: "Éénentwintig"
            },
            {
                fr: "Vingt-deux",
                nl: "Tweeëntwintig"
            },
            {
                fr: "Vingt-trois",
                nl: "Drieëntwintig"
            },
            {
                fr: "Vingt-quatre",
                nl: "Vierentwintig"
            },
            {
                fr: "Trente",
                nl: "Dertig"
            },
            {
                fr: "Quarante",
                nl: "Veertig"
            },
            {
                fr: "Cinquante",
                nl: "Vijftig"
            },
            {
                fr: "Soixante",
                nl: "Zestig"
            },
            {
                fr: "Soixante-dix",
                nl: "Zeventig"
            },
            {
                fr: "Quatre-vingts",
                nl: "Tachtig"
            },
            {
                fr: "Quatre-vingts-dix",
                nl: "Negentig"
            },
            {
                fr: "Cent",
                nl: "Honderd"
            },
            {
                fr: "Cent-un",
                nl: "Honderd en één"
            },
            {
                fr: "Deux-cents",
                nl: "Tweehonderd"
            },
            {
                fr: "Mille",
                nl: "Duizend"
            },
            {
                fr: "Million",
                nl: "Miljoen"
            },
            {
                fr: "Millard",
                nl: "Miljard"
            }
        ]
    },
    {
        title: "Pronoms personnels - Persoonlijke voornaamwoorden",
        id: "personal-pronouns-subject",
        data: [
            {
                fr: "Je",
                nl: "Ik"
            },
            {
                fr: "Tu (quelqu'un qu'on connait)",
                nl: "Je / Jij"
            },
            {
                fr: "Il",
                nl: "Hij"
            },
            {

                fr: "Elle",
                nl: "Ze / Zij"
            },
            {
                fr: "Cela, ça, il, elle (objet)",
                nl: "Het"
            },
            {
                fr: "Nous",
                nl: "We / Wij"
            },
            {
                fr: "Vous (Plusieurs personnes qu'on connait)",
                nl: "Julie"
            },
            {
                fr: "Vous (Plusieurs personnes qu'on ne connait pas)",
                nl: "U"
            },
            {
                fr: "Ils, Elles",
                nl: "Ze / Zij"
            }
        ]
    },
];