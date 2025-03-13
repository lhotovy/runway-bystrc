export const registrations = [
    {
        name: "Přihláška na Runway jede na hory",
        slug: "hory",
        description: "Přihlas se na blablabla.....",
        elements: [
           {
            type: "input",
            name: "firstLastName",
            text: "Jméno a příjmení *",
            width: "187",
            required: true,
           },
           {
            type: "input",
            name: "age",
            text: "Věk *",
            width: "187",
            required: true,
           },
           {
            type: "input",
            name: "address",
            text: "Adresa *",
            width: "400",
            required: true,
           },
           {
            type: "input",
            name: "email",
            text: "Email *",
            width: "187",
            required: true,
           },
           {
            type: "input",
            name: "phone",
            text: "Telefon *",
            width: "187",
            required: true,
           },
           {
            type: "input",
            name: "representativeName",
            text: "Jméno a příjmení zákonného zástupce",
            width: "400",
            required: false,
           },
        ]
    }
]