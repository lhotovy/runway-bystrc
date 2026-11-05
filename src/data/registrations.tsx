export const registrations = [
  {
    slug: "vence",
    translations: {
      cs: {
        name: "Přihláška na Vyrábění adventních věnců",
        description: [
          "Přijďte si vyrobit adventní věnec nebo vánoční ozdoby. Termín a místo konání doplníme.",
        ],
        slug: "vence",
        elements: [
          { type: "input", name: "userName", text: "Jméno a příjmení *", shareLine: true, required: true },
          { type: "input", name: "email", text: "Email *", shareLine: true, required: true },
          {
            type: "checkbox",
            name: "personalDataConsent",
            text: "Se zpracováním osobních údajů souhlasím *",
            shareLine: false,
            required: true,
            description: "Akci pořádá Runway Bystrc z.s. S vašimi osobními údaji z přihlášky nakládáme podle nařízení EU 2016/679 (GDPR). V případě dotazů nás kontaktujte na info@runway-bystrc.cz.\nBěhem akce mohou být organizátorem pořizovány ilustrační fotografie a videa."
          }
        ]
      },
      en: {
        name: "Registration for the Advent Wreath Workshop",
        description: [
          "Join us to make an Advent wreath or Christmas decorations. The event date and venue will be added.",
        ],
        slug: "vence",
        elements: [
          { type: "input", name: "userName", text: "Full name *", shareLine: true, required: true },
          { type: "input", name: "email", text: "Email *", shareLine: true, required: true },
          {
            type: "checkbox",
            name: "personalDataConsent",
            text: "I agree to the processing of my personal data *",
            shareLine: false,
            required: true,
            description: "The event is organised by Runway Bystrc z.s. We handle the personal data from your registration in line with EU Regulation 2016/679 (GDPR). If you have questions, contact us at info@runway-bystrc.cz.\nThe organizer may take illustrative photos and videos during the event."
          }
        ]
      }
    }
  },
  {
    slug: "hory",
    translations: {
      cs: {
        name: "Přihláška na Runway jede na hory 2027",
        description: [
          "Přihlas se na Runway jede na hory 15.–17. ledna 2027. Společný čas, zábava, lyžování, procházky, termální lázně, koupání…",
          "Ubytování: Penzion Švihák Lázeňský ve Velkých Losinách. V ceně je ubytování na 2 noci a polopenze.",
          "Do poznámky v přihlášce uveďte, zda nabízíte místo v autě a jste ochotni někoho svést (včetně počtu míst), nebo zda potřebujete odvoz."
        ],
        accommodationLink: "https://www.ubytovani-losiny.cz/",
        accommodationName: "Penzion Švihák Lázeňský",
        slug: "hory",
        elements: [
          { type: "input", name: "userName", text: "Jméno a příjmení *", shareLine: true, required: true },
          { type: "input", name: "email", text: "Email *", shareLine: true, required: true },
          { type: "input", name: "phone", text: "Telefon *", shareLine: true, required: true },
          { type: "input", name: "peopleCount", text: "Počet dospělých osob *", shareLine: true, required: true },
          { type: "input", name: "age", text: "Počet dětí a jejich věk (pokud nemáte děti, uveďte 0) *", shareLine: false, required: true },
          { type: "input", name: "note", text: "Poznámka – nabízím místa v autě (počet) / potřebuji odvoz", shareLine: false, required: false },
          {
            type: "checkbox",
            name: "personalDataConsent",
            text: "Se zpracováním osobních údajů souhlasím *",
            shareLine: false,
            required: true,
            description: "Akci pořádá Runway Bystrc z.s. S vašimi osobními údaji z přihlášky nakládáme podle nařízení EU 2016/679 (GDPR). V případě dotazů nás kontaktujte na info@runway-bystrc.cz."
          }
        ]
      },
      en: {
        name: "Registration for Runway Goes to the Mountains 2027",
        description: [
          "Register for Runway Goes to the Mountains on 15–17 January 2027. Time together, fun, skiing, walks, thermal baths and swimming…",
          "Accommodation: Penzion Švihák Lázeňský in Velké Losiny. The price includes 2 nights and half board.",
          "In the registration note, tell us whether you can offer a ride (including the number of seats), or need a ride."
        ],
        accommodationLink: "https://www.ubytovani-losiny.cz/",
        accommodationName: "Penzion Švihák Lázeňský",
        slug: "hory",
        elements: [
          { type: "input", name: "userName", text: "Full name *", shareLine: true, required: true },
          { type: "input", name: "email", text: "Email *", shareLine: true, required: true },
          { type: "input", name: "phone", text: "Phone *", shareLine: true, required: true },
          { type: "input", name: "peopleCount", text: "Number of adults *", shareLine: true, required: true },
          { type: "input", name: "age", text: "Number of children and their ages (enter 0 if none) *", shareLine: false, required: true },
          { type: "input", name: "note", text: "Note – offering seats in a car (number) / need a ride", shareLine: false, required: false },
          {
            type: "checkbox",
            name: "personalDataConsent",
            text: "I agree to the processing of my personal data *",
            shareLine: false,
            required: true,
            description: "The event is organised by Runway Bystrc z.s. We handle the personal data from your registration in line with EU Regulation 2016/679 (GDPR). If you have questions, contact us at info@runway-bystrc.cz."
          }
        ]
      }
    }
  },
  {
    slug: "challenge-camp",
    translations: {
      cs: {
        name: "Přihláška na Challenge Camp 2026",
        description: `Děkujeme za Váš zájem o náš příměstský tábor. Vezměte, prosíme, na vědomí, že přihláška je platná teprve po zaplacení zálohy ve výši 1.000,- Kč na účet uvedený v potvrzovacím e-mailu. 
                      Odesláním přihlášky souhlasíte se zpracováním osobních údajů. Údaje v nezbytném rozsahu uchováváme i po skončení tábora mj. za účelem zasílání informací o našich budoucích akcích. Ze zasílání informací je možné se kdykoli odhlásit.`,
        slug: "challenge-camp",
        elements: [
          { type: "input", name: "userName", text: "Jméno a příjmení dítěte *", shareLine: true, required: true },
          { type: "input", name: "dateOfBirth", text: "Datum narození *", shareLine: true, required: true },
          { type: "input", name: "address", text: "Adresa *", shareLine: false, required: true },    
          { type: "input", name: "representativeName", text: "Jméno a příjmení zákonného zástupce (pokud je ti míň než 18 let) *", shareLine: false, required: true },
          { type: "input", name: "representativeEmail", text: "Email zákonného zástupce *", shareLine: true, required: true },
          { type: "input", name: "representativePhone", text: "Telefon zákonného zástupce *", shareLine: true, required: true },
          //{ type: "select", name: "preferedActivity", text: "Preferovaná aktivita *", shareLine: true, required: true },
          { type: "select", name: "englishLevel", text: "Úroveň angličtiny *", shareLine: true, required: true },
          { type: "input", name: "shirtSize", text: "Velikost trička *", shareLine: false, required: true },
          { type: "input", name: "recommendation", text: "Jméno a příjmení kamaráda, kterému jsi tábor doporučil a který u nás ještě nebyl (pokud přijede, máš nárok na slevu)", shareLine: false, required: false },
          { type: "input", name: "limitations", text: "Zdravotní nebo jiná omezení", shareLine: false, required: false },
          { type: "select", name: "referal", text: "Jak ses o táboře dozvěděl", shareLine: false, required: false },
          { type: "input", name: "note", text: "Poznámka", shareLine: false, required: false },
        ],
      },
      en: {
        name: "Registration for Challenge Camp 2026",
        description: `Thank you for your interest in our summer camp. Please note that the application is valid only after paying a deposit of 1,000 CZK to the account specified in the confirmation email.
                      By submitting the application, you agree to the processing of personal data. We keep the data in the necessary scope even after the end of the camp, among other things for the purpose of sending information about our future events. You can unsubscribe from receiving information at any time.`,
        slug: "challenge-camp",
        elements: [
          { type: "input", name: "userName", text: "Child's Full Name *", shareLine: true, required: true },
          { type: "input", name: "dateOfBirth", text: "Date of Birth *", shareLine: true, required: true },
          { type: "input", name: "address", text: "Address *", shareLine: false, required: true },    
          { type: "input", name: "representativeName", text: "Full Name of Legal Guardian (if under 18) *", shareLine: false, required: true },
          { type: "input", name: "representativeEmail", text: "Legal Guardian's Email *", shareLine: true, required: true },
          { type: "input", name: "representativePhone", text: "Legal Guardian's Phone *", shareLine: true, required: true },
          //{ type: "select", name: "preferedActivity", text: "Preferred Activity *", shareLine: true, required: true },
          { type: "select", name: "englishLevel", text: "English Level *", shareLine: true, required: true },
          { type: "input", name: "shirtSize", text: "T-shirt Size *", shareLine: false, required: true },
          { type: "input", name: "recommendation", text: `Name of the friend you recommended the camp to (if they come, you are entitled to a discount)`, shareLine: false, required: false },
          { type: "input", name: "limitations", text: `Health or Other Limitations`, shareLine: false, required: false },
          { type: "select", name:"referal", text:"How did you find out about the camp?", shareLine: false, required: false },
          { type:"input", name:"note", text:"Note", shareLine: false, required: false },
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
          { type: "input", name: "userName", text: "Jméno a příjmení *", shareLine: true, required: true },
          { type: "input", name: "dateOfBirth", text: "Datum narození *", shareLine: true, required: true },
          { type: "input", name: "address", text: "Adresa *", shareLine: true, required: true },     
          { type: "input", name: "email", text: "Email *", shareLine: true, required: true },
          { type: "input", name: "phone", text: "Telefon", shareLine: true, required: false },
          { type: "input", name: "lift", text: "Potřebuji odvoz / míst v autě", shareLine: true, required: false },
          { type: "input", name: "limitations", text: "Zdravotní nebo jiná omezení", shareLine: false, required: false },
          { type: "input", name: "note", text: "Poznámka", shareLine: false, required: false },
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
          { type: "input", name: "userName", text: "Full Name *", shareLine: true, required: true },
          { type: "input", name: "dateOfBirth", text: "Date of Birth *", shareLine: true, required: true },
          { type: "input", name: "address", text: "Address *", shareLine: false, required: true },    
          { type: "input", name: "email", text: "Email *", shareLine: true, required: true },
          { type: "input", name: "phone", text: "Phone", shareLine: true, required: false },
          { type: "input", name: "lift", text: "Need a Ride / Offering Seats in a Car", shareLine: false, required: false },
          { type: "input", name: "limitations", text: "Health or Other Limitations", shareLine: false, required: false },
          { type: "input", name: "note", text: "Note", shareLine: false, required: false },
        ]
        
      },
    },
  },
  {
    slug: "vikendovka-runway-youth",
    translations: {
      cs: {
        name: "Přihláška na Víkendovku Runway Youth",
        description: ["Přihlas se na jarní víkendovku Runway Youth v termínu 13. - 15. 3. 2026 v Prosetíně. Cena 950 Kč. Po odeslání přihlášky obdržíte platební údaje e-mailem."],
        slug: "vikendovka-runway-youth",
        elements: [
          { type: "input", name: "userName", text: "Jméno a příjmení *", shareLine: true, required: true },
          { type: "input", name: "dateOfBirth", text: "Datum narození *", shareLine: true, required: true },
          { type: "input", name: "representativeName", text: "Jméno a příjmení zákonného zástupce *", shareLine: false, required: true },
          { type: "input", name: "representativeEmail", text: "Email zákonného zástupce *", shareLine: true, required: true },
          { type: "input", name: "representativePhone", text: "Telefon zákonného zástupce *", shareLine: true, required: true },
        ],
      },
      en: {
        name: "Registration for Runway Youth Weekend",
        description: ["Sign up for the Runway Youth spring weekend on 13 – 15 March 2026 in Prosetín. Price 950 CZK. You will receive payment details by email after submitting the registration."],
        slug: "vikendovka-runway-youth",
        elements: [
          { type: "input", name: "userName", text: "Full Name *", shareLine: true, required: true },
          { type: "input", name: "dateOfBirth", text: "Date of Birth *", shareLine: true, required: true },
          { type: "input", name: "representativeName", text: "Legal Guardian's Full Name *", shareLine: false, required: true },
          { type: "input", name: "representativeEmail", text: "Legal Guardian's Email *", shareLine: true, required: true },
          { type: "input", name: "representativePhone", text: "Legal Guardian's Phone *", shareLine: true, required: true },
        ],
      },
    },
  },
  {
    slug: "dovolena-2026",
    translations: {
      cs: {
        name: "Přihláška na Dovolenou s Runwayí 2026",
        description: [
          "Pojeď s námi na dovolenou s Runwayí! Letos vyrážíme znovu do Beskyd.",
          "Termín: 8.–12. 7.",
          "Místo: Chata Ostra (www.chata-ostra.cz)",
          "Nákup jídla budeme řešit společně na místě, stejně tak vyúčtování případného nedoplatku nebo přeplatku za ubytování. Bližší informace pošleme mailem v průběhu léta.",
        ],
        slug: "dovolena-2026",
        elements: [
          { type: "input", name: "userName", text: "Jméno a příjmení *", shareLine: true, required: true },
          { type: "input", name: "email", text: "Email *", shareLine: true, required: true },
          { type: "input", name: "peopleCount", text: "Počet dospělých a dětí", shareLine: true, required: false },
          { type: "input", name: "age", text: "Věk dětí", shareLine: true, required: false },
          { type: "input", name: "lift", text: "Potřebuji odvoz / nabízím místo v autě", shareLine: false, required: false },
          { type: "input", name: "diet", text: "Dieta", shareLine: false, required: false },
          { type: "input", name: "note", text: "Poznámka (včetně délky vašeho pobytu, pokud se nezúčastníte po celou dobu)", shareLine: false, required: false },
        ],
      },
      en: {
        name: "Registration for Vacation with Runway 2026",
        description: [
          "Join us for a vacation with Runway! This year we are heading to the Beskydy mountains again.",
          "Date: July 8th–12th.",
          "Place: Chata Ostra (www.chata-ostra.cz)",
          "We will arrange grocery shopping together on site, including settlement of any accommodation overpayment or underpayment. We will send more detailed information by email during the summer.",
        ],
        slug: "dovolena-2026",
        elements: [
          { type: "input", name: "userName", text: "Full Name *", shareLine: true, required: true },
          { type: "input", name: "email", text: "Email *", shareLine: true, required: true },
          { type: "input", name: "peopleCount", text: "Number of Adults and Children", shareLine: true, required: false },
          { type: "input", name: "age", text: "Children's Ages", shareLine: true, required: false },
          { type: "input", name: "lift", text: "Need a Ride / Offering a Seat in a Car", shareLine: false, required: false },
          { type: "input", name: "diet", text: "Dietary Requirements", shareLine: false, required: false },
        ],
      },
    },
  },
  {
    slug: "manzelske-vecery",
    translations: {
      cs: {
        name: "Přihláška na Kurz Manželské večery",
        description: [
          "Kurz Manželské večery se koná v prostorech kavárny Runway Hub v Bystrci. Kavárna bude v průběhu akce otevřená, takže si můžete objednat kávu nebo něco dobrého k zakousnutí."
        ],
        slug: "manzelske-vecery",
        elements: [
          { type: "input", name: "userName", text: "Jména a příjmení manželů *", shareLine: true, required: true },
          { type: "input", name: "address", text: "Adresa *", shareLine: true, required: true },
          { type: "input", name: "email", text: "Email *", shareLine: true, required: true },
          { type: "input", name: "phone", text: "Telefon *", shareLine: true, required: true },
          { type: "input", name: "note", text: "Poznámka", shareLine: false, required: false },
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
          { type: "input", name: "userName", text: "Full Name *", shareLine: true, required: true },
          { type: "input", name: "dateOfBirth", text: "Date of Birth *", shareLine: true, required: true },
          { type: "input", name: "address", text: "Address *", shareLine: false, required: true },    
          { type: "input", name: "email", text: "Email *", shareLine: true, required: true },
          { type: "input", name: "phone", text: "Phone", shareLine: true, required: false },
          { type: "input", name: "lift", text: "Need a Ride / Offering Seats in a Car", shareLine: false, required: false },
          { type: "input", name: "limitations", text: "Health or Other Limitations", shareLine: false, required: false },
          { type: "input", name: "note", text: "Note", shareLine: false, required: false },
        ]        
      },
    },
  },
  {
    slug: "vychova-teenageru",
    translations: {
      cs: {
        name: "Přihláška na Kurz výchovy teenagerů",
        description: [
          "Pět úterků od 3. 11. 2026, vždy v 18:30, v Runway Hub Café (Nad Přehradou 9a).",
          "Bližší informace: tel. 777 878 940, www.manzelskevecery.cz.",
          "Během akce mohou být organizátorem pořizovány ilustrační fotografie a videa."
        ],
        slug: "vychova-teenageru",
        elements: [
          { type: "input", name: "userName", text: "Jméno a příjmení *", shareLine: true, required: true },
          { type: "input", name: "email", text: "Email *", shareLine: true, required: true },
          { type: "input", name: "phone", text: "Telefon (nepovinné)", shareLine: false, required: false },
          {
            type: "checkbox",
            name: "personalDataConsent",
            text: "Se zpracováním osobních údajů souhlasím *",
            shareLine: false,
            required: true,
            description: "Akci pořádá Runway Bystrc z.s. S vašimi osobními údaji z přihlášky nakládáme podle nařízení EU 2016/679 (GDPR). V případě dotazů nás kontaktujte na info@runway-bystrc.cz.",
          },
        ],
      },
      en: {
        name: "Registration for the Parenting Teenagers Course",
        description: [
          "Five Tuesdays from 3 November 2026, always at 6:30 PM, at Runway Hub Café (Nad Přehradou 9a).",
          "More information: tel. 777 878 940, www.manzelskevecery.cz.",
          "The organizer may take illustrative photos and videos during the event."
        ],
        slug: "vychova-teenageru",
        elements: [
          { type: "input", name: "userName", text: "Full name *", shareLine: true, required: true },
          { type: "input", name: "email", text: "Email *", shareLine: true, required: true },
          { type: "input", name: "phone", text: "Phone (optional)", shareLine: false, required: false },
          {
            type: "checkbox",
            name: "personalDataConsent",
            text: "I agree to the processing of my personal data *",
            shareLine: false,
            required: true,
            description: "The event is organised by Runway Bystrc z.s. We handle the personal data from your registration in line with EU Regulation 2016/679 (GDPR). If you have questions, contact us at info@runway-bystrc.cz.",
          },
        ],
      },
    },
  },
  {
    slug: "dramaticky-klub",
    translations: {
      cs: {
        name: "Přihláška do Dramatického klubu",
        description: [
          "Přihlas se do Dramatického klubu pro děti 7–15 let. Potkáváme se každou středu od 18:00 v Runway Hub.",
          "V případě dotazů napište na info@runway-bystrc.cz nebo volejte 736 618 727."
        ],
        slug: "dramaticky-klub",
        elements: [
          { type: "input", name: "userName", text: "Jméno a příjmení *", shareLine: true, required: true },
          { type: "input", name: "age", text: "Věk *", shareLine: true, required: true },
          { type: "input", name: "email", text: "Email *", shareLine: false, required: true },
        ],
      },
      en: {
        name: "Registration for Drama Club",
        description: [
          "Sign up for the Drama Club for kids aged 7–15. We meet every Wednesday at 6:00 PM at Runway Hub.",
          "If you have any questions, write to info@runway-bystrc.cz or call 736 618 727."
        ],
        slug: "dramaticky-klub",
        elements: [
          { type: "input", name: "userName", text: "Full Name *", shareLine: true, required: true },
          { type: "input", name: "age", text: "Age *", shareLine: true, required: true },
          { type: "input", name: "email", text: "Email *", shareLine: false, required: true },
        ],
      },
    },
  },
  // {
  //   slug: "vikend-s-anglictinou",
  //   translations: {
  //     cs: {
  //       name: "Přihláška na Víkend s angličtinou",
  //       description: "Přihlas se na náš víkend s angličtinou v termínu 17. - 19. 4. 2026",
  //       slug: "vikend-s-anglictinou",
  //       elements: [
  //         { type: "input", name: "userName", text: "Jméno a příjmení *", shareLine: true, required: true },
  //         { type: "input", name: "dateOfBirth", text: "Datum narození *", shareLine: true, required: true },
  //         { type: "input", name: "address", text: "Adresa *", shareLine: false, required: true },
  //         { type: "input", name: "email", text: "Email *", shareLine: true, required: true },
  //         { type: "input", name: "phone", text: "Telefon *", shareLine: true, required: true },
  //         { type: "input", name: "representativeName", text: "Jméno a příjmení zákonného zástupce (pokud je ti míň než 18 let)", shareLine: false, required: false },
  //         { type: "input", name: "representativeEmail", text: "Email zákonného zástupce", shareLine: true, required: false },
  //         { type: "input", name: "representativePhone", text: "Telefon zákonného zástupce", shareLine: true, required: false },
  //         { type: "select", name: "englishLevel", text: "Úroveň angličtiny *", shareLine: true, required: true },
  //         { type: "input", name: "lift", text: "Potřebuji odvoz / nabízím místa v autě (počet)", shareLine: true, required: false },
  //         { type: "input", name: "limitations", text: "Zdravotní nebo jiná omezení", shareLine: false, required: false },
  //         { type: "input", name: "note", text: "Poznámka", shareLine: false, required: false },
  //       ],
  //     },
  //     en: {
  //       name: "Registration for Weekend with English",
  //       description: "Sign up for our weekend with English on the specified date 17. - 19. 4. 2026",
  //       slug: "vikend-s-anglictinou",
  //       elements: [
  //         { type: "input", name: "userName", text: "Full Name *", shareLine: true, required: true },
  //         { type: "input", name: "dateOfBirth", text: "Date of Birth *", shareLine: true, required: true },
  //         { type: "input", name: "address", text: "Address *", shareLine: false, required: true },
  //         { type: "input", name: "email", text: "Email *", shareLine: true, required: true },
  //         { type: "input", name: "phone", text: "Phone *", shareLine: true, required: true },
  //         { type: "input", name: "representativeName", text: "Full Name of Legal Guardian (if under 18)", shareLine: false, required: false },
  //         { type: "input", name: "representativeEmail", text: "Legal Guardian's Email", shareLine: true, required: false },
  //         { type: "input", name: "representativePhone", text: "Legal Guardian's Phone", shareLine: true, required: false },
  //         { type: "select", name: "englishLevel", text: "English Level *", shareLine: true, required: true },
  //         { type: "input", name: "lift", text: "Need a Ride / Offering Seats in a Car (number)", shareLine: true, required: false },
  //         { type: "input", name: "limitations", text: "Health or Other Limitations", shareLine: false, required: false },
  //         { type: "input", name: "note", text: "Note", shareLine: false, required: false },
  //       ],
  //     },
  //   },
  // },
];
