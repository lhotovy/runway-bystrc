export const registrations = [
  {
    slug: "hory",
    translations: {
      cs: {
        name: "Přihláška na Runway jede na hory",
        description: "Přihlas se na náš pobyt na horách v termínu...",
        slug: "hory",
        elements: [
          { type: "input", name: "userName", text: "Jméno a příjmení *", width: "300", required: true },
          { type: "input", name: "age", text: "Věk *", width: "300", required: true },
          { type: "input", name: "address", text: "Adresa *", width: "600", required: true },
          { type: "input", name: "email", text: "Email *", width: "300", required: true },
          { type: "input", name: "phone", text: "Telefon *", width: "300", required: true },
          { type: "input", name: "representativeName", text: "Jméno a příjmení zákonného zástupce (pokud je ti míň než 18 let)", width: "600", required: false },
          { type: "input", name: "representativeEmail", text: "Email zákonného zástupce", width: "300", required: false },
          { type: "input", name: "representativePhone", text: "Telefon zákonného zástupce", width: "300", required: false },
          { type: "input", name: "preferedActivitySaturday", text: "Preferovaná aktivita na sobotu", width: "300", required: false },
          { type: "input", name: "preferedActivitySunday", text: "Preferovaná aktivita na neděli", width: "300", required: false },
          { type: "input", name: "lift", text: "Potřebuji odvoz / nabízím místa v autě", width: "600", required: false },
          { type: "input", name: "limitations", text: "Zdravotní nebo jiná omezení", width: "600", required: false },
          { type: "input", name: "note", text: "Poznámka", width: "600", required: false },
        ],
      },
      en: {
        name: "Registration for Runway Goes to the Mountains",
        description: "Sign up for our mountain trip on the specified date...",
        slug: "hory",
        elements: [
          { type: "input", name: "userName", text: "Full Name *", width: "300", required: true },
          { type: "input", name: "age", text: "Age *", width: "300", required: true },
          { type: "input", name: "address", text: "Address *", width: "600", required: true },
          { type: "input", name: "email", text: "Email *", width: "300", required: true },
          { type: "input", name: "phone", text: "Phone *", width: "300", required: true },
          { type: "input", name: "representativeName", text: "Full Name of Legal Guardian (if under 18)", width: "600", required: false },
          { type: "input", name: "representativeEmail", text: "Legal Guardian's Email", width: "300", required: false },
          { type: "input", name: "representativePhone", text: "Legal Guardian's Phone", width: "300", required: false },
          { type: "input", name: "preferedActivitySaturday", text: "Preferred Activity for Saturday", width: "300", required: false },
          { type: "input", name: "preferedActivitySunday", text: "Preferred Activity for Sunday", width: "300", required: false },
          { type: "input", name: "lift", text: "Need a Ride / Offering Seats in a Car", width: "600", required: false },
          { type: "input", name: "limitations", text: "Health or Other Limitations", width: "600", required: false },
          { type: "input", name: "note", text: "Note", width: "600", required: false },
        ],
      },
    },
  },
  {
    slug: "challenge-camp",
    translations: {
      cs: {
        name: "Přihláška na Challenge Camp 2025",
        description: `Děkujeme za Váš zájem o náš příměstský tábor. Vezměte, prosíme, na vědomí, že přihláška je platná teprve po zaplacení zálohy ve výši 1.000,- Kč na účet uvedený v potvrzovacím e-mailu. 
                      Odesláním přihlášky souhlasíte se zpracováním osobních údajů. Údaje v nezbytném rozsahu uchováváme i po skončení tábora mj. za účelem zasílání informací o našich budoucích akcích. Ze zasílání informací je možné se kdykoli odhlásit.`,
        slug: "challenge-camp",
        elements: [
          { type: "input", name: "userName", text: "Jméno a příjmení dítěte *", width: "300", required: true },
          { type: "input", name: "age", text: "Věk *", width: "300", required: true },
          { type: "input", name: "address", text: "Adresa *", width: "600", required: true },    
          { type: "input", name: "representativeName", text: "Jméno a příjmení zákonného zástupce (pokud je ti míň než 18 let) *", width: "600", required: true },
          { type: "input", name: "representativeEmail", text: "Email zákonného zástupce *", width: "300", required: true },
          { type: "input", name: "representativePhone", text: "Telefon zákonného zástupce *", width: "300", required: true },
          { type: "select", name: "preferedActivity", text: "Preferovaná aktivita *", width: "300", required: true },
          { type: "select", name: "englishLevel", text: "Úroveň angličtiny *", width: "300", required: true },
          { type: "input", name: "shirtSize", text: "Velikost trička *", width: "600", required: true },
          { type: "input", name: "recommendation", text: "Jméno a příjmení kamaráda, kterému jsi tábor doporučil a který u nás ještě nebyl (pokud přijede, máš nárok na slevu)", width: "600", required: false },
          { type: "input", name: "limitations", text: "Zdravotní nebo jiná omezení", width: "600", required: false },
          { type: "select", name: "referal", text: "Jak ses o táboře dozvěděl", width: "600", required: false },
          { type: "input", name: "note", text: "Poznámka", width: "600", required: false },
        ],
      },
      en: {
        name: "Registration for Challenge Camp 2025",
        description: `Thank you for your interest in our summer camp. Please note that the application is valid only after paying a deposit of 1,000 CZK to the account specified in the confirmation email.
                      By submitting the application, you agree to the processing of personal data. We keep the data in the necessary scope even after the end of the camp, among other things for the purpose of sending information about our future events. You can unsubscribe from receiving information at any time.`,
        slug: "challenge-camp",
        elements: [
          { type: "input", name: "userName", text: "Child's Full Name *", width: "300", required: true },
          { type: "input", name: "age", text: "Age *", width: "300", required: true },
          { type: "input", name: "address", text: "Address *", width: "600", required: true },    
          { type: "input", name: "representativeName", text: "Full Name of Legal Guardian (if under 18) *", width: "600", required: true },
          { type: "input", name: "representativeEmail", text: "Legal Guardian's Email *", width: "300", required: true },
          { type: "input", name: "representativePhone", text: "Legal Guardian's Phone *", width: "300", required: true },
          { type: "select", name: "preferedActivity", text: "Preferred Activity *", width: "300", required: true },
          { type: "select", name: "englishLevel", text: "English Level *", width: "300", required: true },
          { type: "input", name: "shirtSize", text: "T-shirt Size *", width: "600", required: true },
          { type: "input", name: "recommendation", text: `Name of the friend you recommended the camp to (if they come, you are entitled to a discount)`, width: "600", required: false },
          { type: "input", name: "limitations", text: `Health or Other Limitations`, width: "600", required: false },
          { type: "select", name:"referal" ,text:"How did you find out about the camp?", width:"600", required:false},
          { type:"input" ,name:"note" ,text:"Note" ,width:"600" ,required:false},

        ]
        
      },
    },
  },
];