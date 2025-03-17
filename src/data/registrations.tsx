export const registrations = [
    {
        name: "Přihláška na Runway jede na hory",
        slug: "hory",
        description: "Přihlas se na náš pobyt na horách v termínu...",
        elements: [
           {
            type: "input",
            name: "userName",
            text: "Jméno a příjmení *",
            width: "300",
            required: true,
           },
           {
            type: "input",
            name: "age",
            text: "Věk *",
            width: "300",
            required: true,
           },
           {
            type: "input",
            name: "address",
            text: "Adresa *",
            width: "600",
            required: true,
           },
           {
            type: "input",
            name: "email",
            text: "Email *",
            width: "300",
            required: true,
           },
           {
            type: "input",
            name: "phone",
            text: "Telefon *",
            width: "300",
            required: true,
           },
           {
            type: "input",
            name: "representativeName",
            text: "Jméno a příjmení zákonného zástupce (pokud je ti míň než 18 let)",
            width: "600",
            required: false,
           },
           {
            type: "input",
            name: "representativeEmail",
            text: "Email zákonného zástupce",
            width: "300",
            required: false,
           },
           {
            type: "input",
            name: "representativePhone",
            text: "Telefon zákonného zástupce",
            width: "300",
            required: false,
           },
           {
            type: "input",
            name: "preferedActivitySaturday",
            text: "Preferovaná aktivita na sobotu",
            width: "300",
            required: false,
           },
           {
            type: "input",
            name: "preferedActivitySunday",
            text: "Preferovaná aktivita na neděli",
            width: "300",
            required: false,
           },
           {
            type: "input",
            name: "lift",
            text: "Potřebuji odvoz / nabízím místa v autě",
            width: "600",
            required: false,
           },
           {
            type: "input",
            name: "limitations",
            text: "Zdravotní nebo jiná omezení",
            width: "600",
            required: false,
           },
           {
            type: "input",
            name: "note",
            text: "Poznámka",
            width: "600",
            required: false,
           },

        ]
    }
]