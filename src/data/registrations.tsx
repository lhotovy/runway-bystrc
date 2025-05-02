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
          { type: "input", name: "dateOfBirth", text: "Datum narození *", width: "300", required: true },
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
          { type: "input", name: "dateOfBirth", text: "Date of Birth *", width: "300", required: true },
          { type: "input", name: "address", text: "Address *", width: "600", required: true },    
          { type: "input", name: "representativeName", text: "Full Name of Legal Guardian (if under 18) *", width: "600", required: true },
          { type: "input", name: "representativeEmail", text: "Legal Guardian's Email *", width: "300", required: true },
          { type: "input", name: "representativePhone", text: "Legal Guardian's Phone *", width: "300", required: true },
          { type: "select", name: "preferedActivity", text: "Preferred Activity *", width: "300", required: true },
          { type: "select", name: "englishLevel", text: "English Level *", width: "300", required: true },
          { type: "input", name: "shirtSize", text: "T-shirt Size *", width: "600", required: true },
          { type: "input", name: "recommendation", text: `Name of the friend you recommended the camp to (if they come, you are entitled to a discount)`, width: "600", required: false },
          { type: "input", name: "limitations", text: `Health or Other Limitations`, width: "600", required: false },
          { type: "select", name:"referal", text:"How did you find out about the camp?", width:"600", required:false},
          { type:"input", name:"note", text:"Note", width:"600", required:false},

        ]
        
      },
    },
  },
  {
    slug: "dovolena",
    translations: {
      cs: {
        name: "Přihláška na Dovolenou s Runwayií 2025",
        description: [
          "Dovolená s Runwayí 6. - 10. 8. 2025",
          "Pojeďte s námi do Beskyd! Čeká nás společná dovolená na chatě v Ostré na Ostravici kousek od Lysé hory (www.chata-ostra.cz). Akce je určena jednotlivcům i celým rodinám. Program bude volný - dle situace a nálady budeme na místě chodit na výlety apod. Budeme si také společně vařit.",
          "Předběžné informace: Vařit budeme společně. Cena za ubytování: 350 Kč / noc / osoba (+ nad 18 let 20 Kč rekreační poplatek), platí dospělí a děti od 2 let. Cenu za jídlo rozpočítáme až zpětně po pobytu, předpokládaná cena je: děti 0-2 roky zdarma, předškoláci 80 Kč/den, 6-15 let 130 Kč/den, 15 let a výše 160 Kč/den.",
"Bližší informace ohledně pobytu a platby zašleme mailem."
        ],
        slug: "dovolena",
        elements: [
          { type: "input", name: "userName", text: "Jméno a příjmení *", width: "300", required: true },
          { type: "input", name: "dateOfBirth", text: "Datum narození *", width: "300", required: true },
          { type: "input", name: "address", text: "Adresa *", width: "600", required: true },     
          { type: "input", name: "email", text: "Email *", width: "300", required: true },
          { type: "input", name: "phone", text: "Telefon", width: "300", required: false },
          { type: "input", name: "lift", text: "Potřebuji odvoz / míst v autě", width: "600", required: false },
          { type: "input", name: "limitations", text: "Zdravotní nebo jiná omezení", width: "600", required: false },
          { type: "input", name: "note", text: "Poznámka", width: "600", required: false },
        ],
      },
      en: {
        name: "Registration for Vacation with Runway 2025",
        description: [
          "Vacation with Runway 6. - 10. 8. 2025",
          "Join us on a trip to the Beskyds! We're looking forward to a joint vacation at a cottage in Ostrava on the outskirts of Lysá Hora (www.chata-ostra.cz). The event is intended for individuals and entire families. The program will be free - depending on the situation and mood, we will go on excursions and other activities. We will also cook together.",
          "Preliminary information: We will cook together. The cost for accommodation: 350 CZK / night / person (+ over 18 years 20 CZK recreational fee), applies to adults and children from 2 years. The cost for food will be calculated later after the stay, the estimated price is: children 0-2 years free, preschoolers 80 CZK/day, 6-15 years 130 CZK/day, 15 years and older 160 CZK/day.",
          "Further information about the stay and payment will be sent by email."
        ],
        slug: "dovolena",
        elements: [
          { type: "input", name: "userName", text: "Full Name *", width: "300", required: true },
          { type: "input", name: "dateOfBirth", text: "Date of Birth *", width: "300", required: true },
          { type: "input", name: "address", text: "Address *", width: "600", required: true },    
          { type: "input", name: "email", text: "Email *", width: "300", required: true },
          { type: "input", name: "phone", text: "Phone", width: "300", required: false },
          { type: "input", name: "lift", text: "Need a Ride / Offering Seats in a Car", width: "600", required: false },
          { type: "input", name: "limitations", text: "Health or Other Limitations", width: "600", required: false },
          { type: "input", name: "note", text: "Note", width: "600", required: false },
        ]
        
      },
    },
  },
];