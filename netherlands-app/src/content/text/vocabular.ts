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
        title: "Salutation - Begroeting",
        id: "greeting",
        data: [
            {
                fr: "Salut (informel)",
                nl: "Hoi"
            },
            {
                fr: "Bonjour",
                nl: "Hallo"
            },
            {
                fr: "Bonjour (avant midi)",
                nl: "Goedemorgen"
            },
            {
                fr: "Bonjour (après midi)",
                nl: "Goedemiddag"
            },
            {
                fr: "Bonsoir (après 18h)",
                nl: "Goedeavond"
            },
            {
                fr: "Bonne nuit",
                nl: "Goedenacht"
            },
            {
                fr: "Bonjour / Bonne journée",
                nl: "Goedendag"
            },
            {
                fr: "Au revoir",
                nl: "Doei / Dag"
            },
            {
                fr: "À plus",
                nl: "Tot ziens"
            },
            {
                fr: "À plus tard (dans le même jour)",
                nl: "Tot straks"
            },
            {
                fr: "À bientôt",
                nl: "Tot snel / zo"
            },
            {
                fr: "Bonne journée (sens de au revoir)",
                nl: "Fijne dag"
            },
            {
                fr: "Bon weekend (sens de au revoir)",
                nl: "Fijn weekend"
            }
        ]
    },
    {
        title: "Ça va ? - Hoe gaat het ?",
        id: "how-are-you",
        data: [
            {
                fr: "Comment vas - tu ?",
                nl: "Hoe gaat het ?"
            },
            {
                fr: "Comment allez - vous ?",
                nl: "Hoe gaat het met u ?"
            },
            {
                fr: "Parfaitement bien",
                nl: "Uitstekend"
            },
            {
                fr: "(Très) Bien, merci",
                nl: "(Heel) Goed / Fijn, dank je"
            },
            {
                fr: "Bof",
                nl: "So so"
            },
            {
                fr: "Pas bien",
                nl: "Slecht"
            },
            {
                fr: "Ça peut aller (à utiliser entre amis)",
                nl: "Het gaat wel"
            }, 
            {
                fr: "Pas très bien",
                nl: "Niet zo goed"
            }, 
            {
                fr: "Je suis fatigué(e)",
                nl: "Ik ben moe"
            },
            {
                fr: "Je suis malade",
                nl: "Ik ben ziek"
            },
            {
                fr: "J'ai faim",
                nl: "Ik heb honger"
            },
            {
                fr: "J'ai soif",
                nl: "Ik heb dorst"
            }
        ]
    },
    {
        title: "Se présenter - Jezelf voorstellen",
        id: "introduce-oneself",
        data: [
            {
                fr: "Je m'appelle ...",
                nl: "Ik heet ..."
            },
            {
                fr: "Mon nom est ...",
                nl: "Mijn naam is ..."
            },
            {
                fr: "Je suis ...",
                nl: "Ik ben ..."
            },
            {
                fr: "J'ai ... ans",
                nl: "Ik bin ... jaar"
            },
            {
                fr: "Je suis né(e) le 23 mars 1998 à ...",
                nl: "Ik ben op 23 maart 1998 in ... geboren"
            },
            {
                fr: "Mon anniversaire est le ...",
                nl: "Mijn verjaardag is op ..."
            },
            {
                fr: "J'étudie ...",
                nl: "Ik studeer ..."
            },
            {
                fr: "Je suis étudiante en ...",
                nl: "Ik ben een ... + student"
            },
            {
                fr: "J'habite à ... en France.",
                nl: "Ik woon in ... in Frankrijk / Ik woon in ..., Frankrijk"
            }, 
            {
                fr: "J'ai ... frères et ... sœurs",
                nl: "Ik heb ... broers en ... zussen"
            }
        ]
    },
    {
        title: "Remerciement - Dankbetuiging",
        id: "thank",
        data: [
            {
                fr: "Merci / Remerciement",
                nl: "Bedankt"
            },
            {
                fr: "Merci beaucoup",
                nl: "Hartlijk bedankt"
            },
            {
                fr: "Je (te / vous) remercie",
                nl: "Dank (je / u)"
            },
            {
                fr: "Je (te / vous) remercie beaucoup",
                nl: "Dank (Je / u) wel"
            },
            {
                fr: "De rien",
                nl: "Graag gedaan"
            }
        ]
    },
    {
        title: "S'excuser - Zich verontschuldingen",
        id: "excuse",
        data: [
            {
                fr: "Désolé(e)",
                nl: "Sorry"
            },
            {
                fr: "Je suis désolé(e)",
                nl: "Het spijt me"
            },
            {
                fr: "Excusez - moi (sens d'attirer l'attention)",
                nl: "Excuseert me / Pardon"
            },
            {
                fr: "Pas de soucis",
                nl: "Geen probleem"
            },
            {
                fr: "Geeft niks",
                nl: "Ce n'est pas grave"
            },
            {
                fr: "Maak je geen zorgen",
                nl: "Ce n'est rien"
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
];
