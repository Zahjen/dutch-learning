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
        title: "Les couleurs - Kleuren",
        id: "color",
        data: [
            {
                fr: "Rose",
                nl: "Roze"
            },
            {
                fr: "Rouge",
                nl: "Rood"
            }
        ]
    },
    {
        title: "Les jours de la semaine - Dagen van de week",
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
];