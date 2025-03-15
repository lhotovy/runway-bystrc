import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import { Mail, Phone } from "lucide-react";

export const activities = [
    {
        name: "Neděle na Runwayi",
        slug: "nedele",
        cardDescription: "Každou 1. a 3. neděli v měsíci",
        cardIcon: "/icons/book.png",
        description: ["Chceš se dozvědět více o tom, čemu věříme, máš otázky nebo v Bystrci hledáš společenství? Pak Tě zveme na naše Neděle na Runwayi.", "Těšit se můžeš na duchovní písně, zamyšlení a v neposlední řadě na společenství s lidmi, kteří znají Boha nebo jej hledají."],
        time: "každou 1. a 3. neděli v měsíci v 17:00",
        place: "centrum runway bystrc",
        image: "nedele.png",
        contactTitle: "Kontakt a více informací",
        contactIcon: <SiInstagram className="h-10 w-10 text-gray-3" />,
        contactPerson: "Instagram",
        contactLinkText: "runway.bystrc",
        contactLink: "",
        template: "template2"
    },
    {
        name: "Sport Challenge",
        slug: "sport-challenge",
        cardDescription: "Klub pro děti 9 - 13 let",
        cardIcon: "/icons/ball.png",
        description: ["Přijď si vyzkoušet sporty pro radost ze hry a posuň své hranice s novými kamarády. Nová výzva, pohyb, kamarádi. Pro všechny děti ve věku od 8 do 12 let."],       
        time: "každé úterý od 17:00",
        place: "centrum runway bystrc + přilehlé sportoviště kamechy",
        image: "challenge.png",
        contactTitle: "Kontakt",
        contactIcon: <Phone className="h-10 w-10 text-gray-3" />,
        contactPerson: "Ivo Drábek",
        contactLinkText: "i.drabek@seznam.cz",
        contactLink: "",
        template: "template1"
    },
    {
        name: "Runway Youth",
        slug: "runway_youth",
        cardDescription: "Klub pro mládež 13 - 18 let",
        cardIcon: "/icons/person.png",
        description: ["Jsme klub pro všechny ve věku 13-20 let. Potkáváme se každou středu v 18-20 hodin. Hrajeme společně hry, jíme občerstvení a užíváme si zábavy. Těšíme se na Tebe!"],
        time: "každou středu od 18:00",
        place: "centrum runway bystrc",
        image: "youth.jpg",
        contactTitle: "Kontakt a více informací",
        contactIcon: <SiInstagram className="h-10 w-10 text-gray-3" />,
        contactPerson: "Instagram",
        contactLinkText: "runway_youth",
        contactLink: "https://www.instagram.com/runway_youth/",
        template: "template1"
    },
    {
        name: "Klub pro maminky s dětmi",
        slug: "klub-pro-maminky-s-detmi",
        cardDescription: "Možnost navázat přátelství",
        cardIcon: "/icons/stroller.png",
        description: ["Jsi maminka s dítětem a chceš si na chvíli oddechnout a strávit příjemné dopoledne s dalšími maminkami? Tak se připoj k nám na anglický klub pro maminky! Čeká Tě posezení u čaje nebo kávy, rozhovory či tvoření.", "V případě většího počtu starších dětí lze program orientovat na jejich procvičování angličtiny."],          
        time: "každý čtvrtek od 9:30",
        place: "centrum runway bystrc",
        image: "maminky.png",
        contactTitle: "Kontakt a více informací",
        contactIcon: <SiFacebook className="h-10 w-10 text-gray-3" />,
        contactPerson: "Facebook",
        contactLinkText: "Maminky Runway Bystrc",
        contactLink: "",
        template: "template1"
    },
    {
        name: "English Evenings",
        slug: "english",
        cardDescription: "Večery s rodilým mluvčím",
        cardIcon: "/icons/flag.png",
        description: ["Přijďte si popovídat s rodilým mluvčím a v příjemné atmosféře zlepšete své konverzační schopnosti. Konverzace probíhají v malé skupině."],
        time: "každý čtvrtek 18:00-19:30",
        place: "centrum runway bystrc",
        image: "flag.png",
        contactTitle: "Kontakt",
        contactIcon: <Mail className="h-10 w-10 text-gray-3" />,
        contactPerson: "Tereza Parks",
        contactLinkText: "info@runway-bystrc.cz",
        contactLink: "mailto:info@runway-bystrc.cz",
        template: "template1"
    },
    {
        name: "Manželské večery",
        slug: "manzelske-vecery",
        cardDescription: "Čas pro váš vztah",
        cardIcon: "/icons/heart.png",
        description: ["Čas pro váš vztah"],
        time: "",
        place: "",
        image: "",
        contactTitle: "",
        contactIcon: null,
        contactPerson: "",
        contactLinkText: "",
        contactLink: "",
        template: ""
    },    
    {
        name: "Tábory",
        slug: "tabory",
        cardDescription: "Letní tábory pro dětí",
        cardIcon: "/icons/sun.png",
        description: ["Letní tábory pro dětí"],
        time: "",
        place: "",
        image: "",
        contactTitle: "",
        contactIcon: null,
        contactPerson: "",
        contactLinkText: "",
        contactLink: "",
        template: "template1"
    },
];

export const specialActivitiesCard = {
    name: "Speciální akce",
    slug: "speciální-akce",
    cardDescription: "Náš kalendář událostí",
    cardIcon: "/icons/calendar.png",
    description: ["Letní tábory pro dětí"],
    time: "",
    place: "",
    image: "",
    contactTitle: "",
    contactIcon: null,
    contactPerson: "",
    contactLinkText: "",
    contactLink: "",    
    template: ""
};

export const events = [
    {
        name: "Runway jede na hory",
        slug: "hory",
        cardDescription: "",
        cardIcon: "",
        description: [
            "Pojeď s námi na zimní pobyt v Jeseníkách v termínu 21. - 23. 2 2025. Společný čas, zábava, lyžování, procházky…", 
            "Letos již potřetí vyrazíme s Runway na hory, tentokrát do Hotelu na Trojce v Jeseníkách. Na místo se dopravíme auty, kdo bude mít zájem o spolujízdu s někým, prosím napište to do přihlášky a budete k někomu do auta přiděleni. Program začne v pátek večeří v 19:00. O víkendu bude možné lyžovat nebo jít na organizovaný výlet (permanentka na lyžování není v ceně pobytu). Co se týče jídla, v ceně je zahrnuta páteční večeře, sobotní snídaně a večeře a dále nedělní snídaně. Bližší informace k dopravě i programu budou zaslány na mail v průběhu února. Informace k platbě Vám budou zaslány v mailu do 24 hodin po vyplnění registračního formuláře. Přihláška se stává závaznou ve chvíli jejího zaplacení.",
            `Ubytování: Hotel na Trojce, Jindřichov, Jeseníky
            Cena za víkend (ubytování + polopenze):
            osoby od 10 let: 1540,- Kč
            děti do 10 let: 1240,- Kč
            děti do 3 let bez nároku na lůžko a stravu: zdarma
            členové Challenge a Runway Youth: 1240,- Kč`
        ],
        time: ["21. - 23. 2. 2025", "začínáme v 19:00"],
        place: "hotel na trojce",
        image: "",
        registrationText: "Přihlašování do 12. 2.", 
        registrationLink: "prihlaska/hory",      
        template: "template3"
    },
    {
        name: "Jarní swap oblečení",
        slug: "swap",
        cardDescription: "",
        cardIcon: "",
        description: [
            "Pojeď s námi na zimní pobyt v Jeseníkách v termínu 21. - 23. 2 2025. Společný čas, zábava, lyžování, procházky…", 
            "Letos již potřetí vyrazíme s Runway na hory, tentokrát do Hotelu na Trojce v Jeseníkách. Na místo se dopravíme auty, kdo bude mít zájem o spolujízdu s někým, prosím napište to do přihlášky a budete k někomu do auta přiděleni. Program začne v pátek večeří v 19:00. O víkendu bude možné lyžovat nebo jít na organizovaný výlet (permanentka na lyžování není v ceně pobytu). Co se týče jídla, v ceně je zahrnuta páteční večeře, sobotní snídaně a večeře a dále nedělní snídaně. Bližší informace k dopravě i programu budou zaslány na mail v průběhu února. Informace k platbě Vám budou zaslány v mailu do 24 hodin po vyplnění registračního formuláře. Přihláška se stává závaznou ve chvíli jejího zaplacení.",
            `Ubytování: Hotel na Trojce, Jindřichov, Jeseníky
            Cena za víkend (ubytování + polopenze):
            osoby od 10 let: 1540,- Kč
            děti do 10 let: 1240,- Kč
            děti do 3 let bez nároku na lůžko a stravu: zdarma
            členové Challenge a Runway Youth: 1240,- Kč`
        ],
        time: ["12. 4. 2025", "13:00 - 17:00"],
        place: "centrum runway bystrc",
        image: "",
        registrationText: "Přihlašování do 12. 2.", 
        registrationLink: "prihlaska/hory",      
        template: "template3"
    }
];