import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import { Mail, Phone } from "lucide-react";

export const activities = [
    {
        template: "template2",
        type: "regular",
        translations: {
            cs: {
                name: "Neděle na Runwayi",
                slug: "nedele",
                cardDescription: "Každou 1. a 3. neděli v měsíci",
                cardIcon: "/icons/book.png",
                description: ["Chceš se dozvědět více o tom, čemu věříme, máš otázky nebo v Bystrci hledáš křesťanské společenství? Pak Tě zveme na naše Neděle na Runwayi.", "Těšit se můžeš na písně, zamyšlení a v neposlední řadě na společenství s lidmi, kteří znají Boha nebo jej hledají. Neděle na Runwayi se konají každou první a třetí neděli v měsíci. Začínáme kavárničkou v 16:16, po které následuje v 17:00 bohoslužba."],
                time: ["každou 1. a 3. neděli v měsíci v 17:00"],
                cardTime: null,
                place: "centrum runway bystrc",
                image: "nedele.webp",
                contactTitle: "Kontakt a více informací",
                contactIcon: <SiInstagram className="h-10 w-10 text-gray-3" />,
                contactPerson: "Instagram",
                contactLinkText: "runway.bystrc",
                contactLink: "https://www.instagram.com/runway.bystrc/"
            },
            en: {
                name: "Sunday Services",
                slug: "nedele",
                cardDescription: "Every 1st and 3rd Sunday of the month",
                cardIcon: "/icons/book.png",
                description: ["Do you want to learn more about what we believe, have questions, or are you looking for a Christian community in Bystrc? Then we invite you to our Sunday Services.", "You can look forward to songs, reflections, and last but not least, fellowship with people who know God or are seeking Him. Sunday Services take place every first and third Sunday of the month. We start with a coffee shop at 4:16 PM, followed by a service at 5:00 PM."],
                time: ["every 1st and 3rd Sunday of the month at 5:00 PM"],
                cardTime: null,
                place: "Runway Bystrc Center",
                image: "nedele.webp",
                contactTitle: "Contact and more information",
                contactIcon: <SiInstagram className="h-10 w-10 text-gray-3" />,
                contactPerson: "Instagram",
                contactLinkText: "runway.bystrc",
                contactLink: "https://www.instagram.com/runway.bystrc/"
            }
        }
    },
    {
        template: "template1",
        type: "regular",
        translations: {
            cs: {
                name: "Sport Challenge",
                slug: "sport-challenge",
                cardDescription: "Klub pro děti 9 - 13 let",
                cardIcon: "/icons/ball.png",
                description: ["Přijď si vyzkoušet sporty pro radost ze hry a posuň své hranice s novými kamarády. Nová výzva, pohyb, kamarádi. Pro všechny děti ve věku od 8 do 12 let."],
                time: ["každé úterý od 17:00"],
                cardTime: null,
                place: "centrum runway bystrc + přilehlé sportoviště kamechy",
                image: "challenge.webp",
                contactTitle: "Kontakt",
                contactIcon: <Phone className="h-10 w-10 text-gray-3" />,
                contactPerson: "Ivo Drábek",
                contactLinkText: "i.drabek@seznam.cz",
                contactLink: "mailto:i.drabek@seznam.cz"
            },
            en: {
                name: "Sport Challenge",
                slug: "sport-challenge",
                cardDescription: "Club for kids aged 9 - 13",
                cardIcon: "/icons/ball.png",
                description: ["Come and try sports for the joy of the game and push your limits with new friends. A new challenge, movement, friends. For all kids aged 8 to 12."],
                time: ["every Tuesday at 5:00 PM"],
                cardTime: null,
                place: "Runway Bystrc Center + nearby Kamechy sports grounds",
                image: "challenge.webp",
                contactTitle: "Contact",
                contactIcon: <Phone className="h-10 w-10 text-gray-3" />,
                contactPerson: "Ivo Drábek",
                contactLinkText: "i.drabek@seznam.cz",
                contactLink: "mailto:i.drabek@seznam.cz"
            }
        }
    },
    {
        template: "template1",
        type: "regular",
        translations: {
            cs: {
                name: "Runway Youth",
                slug: "runway_youth",
                cardDescription: "Klub pro mládež 13 - 18 let",
                cardIcon: "/icons/person.png",
                description: ["Jsme klub pro všechny ve věku 13-20 let. Potkáváme se každou středu v 18-20 hodin. Hrajeme společně hry, jíme občerstvení a užíváme si zábavy. Těšíme se na Tebe!"],
                time: ["každou středu od 18:00"],
                cardTime: null,
                place: "centrum runway bystrc",
                image: "youth.webp",
                contactTitle: "Kontakt a více informací",
                contactIcon: <SiInstagram className="h-10 w-10 text-gray-3" />,
                contactPerson: "Instagram",
                contactLinkText: "runway_youth",
                contactLink: "https://www.instagram.com/runway_youth/"
            },
            en: {
                name: "Runway Youth",
                slug: "runway_youth",
                cardDescription: "Club for youth aged 13 - 18",
                cardIcon: "/icons/person.png",
                description: ["We are a club for everyone aged 13-20. We meet every Wednesday from 6-8 PM. We play games together, enjoy refreshments, and have fun. We look forward to seeing you!"],
                time: ["every Wednesday at 6:00 PM"],
                cardTime: null,
                place: "Runway Bystrc Center",
                image: "youth.webp",
                contactTitle: "Contact and more information",
                contactIcon: <SiInstagram className="h-10 w-10 text-gray-3" />,
                contactPerson: "Instagram",
                contactLinkText: "runway_youth",
                contactLink: "https://www.instagram.com/runway_youth/"
            }
        }
    },
    // {
    //     template: "template1",
    //     type: "regular",
    //     translations: {
    //         cs: {
    //             name: "Klub pro maminky s dětmi",
    //             slug: "klub-pro-maminky-s-detmi",
    //             cardDescription: "Možnost navázat přátelství",
    //             cardIcon: "/icons/stroller.png",
    //             description: ["Jsi maminka s dítětem a chceš si na chvíli oddechnout a strávit příjemné dopoledne s dalšími maminkami? Tak se připoj k nám na anglický klub pro maminky! Čeká Tě posezení u čaje nebo kávy, rozhovory či tvoření.", "V případě většího počtu starších dětí lze program orientovat na jejich procvičování angličtiny."],
    //             time: ["každý čtvrtek od 9:30"],
    //             cardTime: null,
    //             place: "centrum runway bystrc",
    //             image: "maminky.webp",
    //             contactTitle: "Kontakt a více informací",
    //             contactIcon: <SiFacebook className="h-10 w-10 text-gray-3" />,
    //             contactPerson: "Facebook",
    //             contactLinkText: "Maminky Runway Bystrc",
    //             contactLink: "https://www.facebook.com/profile.php?id=100076218601052"
    //         },
    //         en: {
    //             name: "Club for Moms with Kids",
    //             slug: "klub-pro-maminky-s-detmi",
    //             cardDescription: "Opportunity to make friends",
    //             cardIcon: "/icons/stroller.png",
    //             description: ["Are you a mom with a child and want to take a break and spend a pleasant morning with other moms? Then join us for the English club for moms! You can look forward to sitting over tea or coffee, conversations, or crafting.", "If there are more older children, the program can be oriented towards their English practice."],
    //             time: ["every Thursday at 9:30 AM"],
    //             cardTime: null,
    //             place: "Runway Bystrc Center",
    //             image: "maminky.webp",
    //             contactTitle: "Contact and more information",
    //             contactIcon: <SiFacebook className="h-10 w-10 text-gray-3" />,
    //             contactPerson: "Facebook",
    //             contactLinkText: "Maminky Runway Bystrc",
    //             contactLink: "https://www.facebook.com/profile.php?id=100076218601052"
    //         }
    //     }
    // },
    {
        template: "template1",
        type: "regular",
        translations: {
            cs: {
                name: "Anglické večery",
                slug: "english",
                cardDescription: "Večery s rodilým mluvčím",
                cardIcon: "/icons/flag.png",
                description: ["Přijďte si popovídat s rodilým mluvčím a v příjemné atmosféře zlepšete své konverzační schopnosti. Konverzace probíhají v malé skupině."],
                time: ["každý čtvrtek 18:00-19:30"],
                cardTime: null,
                place: "centrum runway bystrc",
                image: "flag.webp",
                contactTitle: "Kontakt",
                contactIcon: <Mail className="h-10 w-10 text-gray-3" />,
                contactPerson: "Tereza Parks",
                contactLinkText: "info@runway-bystrc.cz",
                contactLink: "mailto:info@runway-bystrc.cz"
            },
            en: {
                name: "English Evenings",
                slug: "english",
                cardDescription: "Evenings with a native speaker",
                cardIcon: "/icons/flag.png",
                description: ["Come and chat with a native speaker and improve your conversational skills in a pleasant atmosphere. Conversations take place in a small group."],
                time: ["every Thursday from 6:00 PM to 7:30 PM"],
                cardTime: null,
                place: "Runway Bystrc Center",
                image: "flag.webp",
                contactTitle: "Contact",
                contactIcon: <Mail className="h-10 w-10 text-gray-3" />,
                contactPerson: "Tereza Parks",
                contactLinkText: "info@runway-bystrc.cz",
                contactLink: "mailto:info@runway-bystrc.cz"
            }
        }
    },
    /* {
        template: "template1",
        type: "regular",
        translations: {
            cs: {
                name: "Manželské večery",
                slug: "manzelske-vecery",
                cardDescription: "Čas pro váš vztah",
                cardIcon: "/icons/heart.png",
                description: ["Čas pro váš vztah"],
                time: null,
                cardTime: null,
                place: "",
                image: "",
                contactTitle: "",
                contactIcon: null,
                contactPerson: "",
                contactLinkText: "",
                contactLink: ""
            },
            en: {
                name: "Marriage Evenings",
                slug: "en/marriage-evenings",
                cardDescription: "Time for your relationship",
                cardIcon: "/icons/heart.png",
                description: ["Time for your relationship"],
                time: null,
                cardTime: null,
                place: "",
                image: "",
                contactTitle: "",
                contactIcon: null,
                contactPerson: "",
                contactLinkText: "",
                contactLink: ""
            }
        }
    }, */
    {
        template: "template1",
        type: "regular",
        translations: {
            cs: {
                name: "Tábory",
                slug: "tabory",
                cardDescription: "Letní tábory pro dětí",
                cardIcon: "/icons/sun.png",
                description: ["Letní tábory pro dětí"],
                time: null,
                cardTime: null,
                place: "",
                image: "",
                contactTitle: "",
                contactIcon: null,
                contactPerson: "",
                contactLinkText: "",
                contactLink: ""
            },
            en: {
                name: "Camps",
                slug: "tabory",
                cardDescription: "Summer camps for kids",
                cardIcon: "/icons/sun.png",
                description: ["Summer camps for kids"],
                time: null,
                cardTime: null,
                place: "",
                image: "",
                contactTitle: "",
                contactIcon: null,
                contactPerson: "",
                contactLinkText: "",
                contactLink: ""
            }
        }
    },
    {
        template: "template3",
        type: "special",
        translations: {
            cs: {
                name: "Runway jede na hory",
                slug: "hory",
                cardDescription: "Tradiční zimní pobyt na horách, tentokrát v srdci Jeseníků",
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
                filterDate: "2025-02-23",
                cardDate: "21. - 23. února",
                cardTime: null,
                place: "hotel na trojce",
                image: "placeholder.webp",
                registrationText: "Přihlašování do 12. 2.", 
                registrationLink: "prihlaska/hory",      
                contactIcon: null,
                contactPerson: "",
                contactLinkText: "",
                contactLink: ""
            },
            en: {
                name: "Runway Goes to the Mountains",
                slug: "hory",
                cardDescription: "Traditional winter stay in the mountains, this time in the heart of Jeseníky",
                cardIcon: "",
                description: [
                    "Join us for a winter stay in Jeseníky from February 21st to 23rd, 2025. Shared time, fun, skiing, walks…", 
                    "This year, for the third time, we will go to the mountains with Runway, this time to Hotel na Trojce in Jeseníky. We will travel to the location by car; if you are interested in carpooling with someone, please write it in the application, and you will be assigned to someone's car. The program will start on Friday with dinner at 7:00 PM. Over the weekend, it will be possible to ski or go on an organized trip (ski pass is not included in the price of the stay). Regarding food, the price includes Friday dinner, Saturday breakfast and dinner, and Sunday breakfast. More information about transportation and the program will be sent by email during February. Payment information will be sent by email within 24 hours after filling out the registration form. The application becomes binding upon payment.",
                    `Accommodation: Hotel na Trojce, Jindřichov, Jeseníky
                    Price for the weekend (accommodation + half board):
                    persons aged 10 and over: 1540,- CZK
                    children under 10 years: 1240,- CZK
                    children under 3 years without entitlement to bed and food: free
                    members of Challenge and Runway Youth: 1240,- CZK`
                ],
                time: ["February 21st - 23rd, 2025", "starting at 7:00 PM"],
                cardDate: "February 21st - 23rd",
                filterDate: "2025-02-23",
                cardTime: null,
                place: "Hotel na Trojce",
                image: "placeholder.webp",
                registrationText: "Registration until February 12th", 
                registrationLink: "registration/mountains",      
                contactIcon: null,
                contactPerson: "",
                contactLinkText: "",
                contactLink: ""
            }
        }
    },
    {
        template: "template4",
        type: "special",
        translations: {
            cs: {
                name: "Den dětí",
                slug: "den-deti",
                cardDescription: "Jako každý rok se bude za klubovnou konat den plný zábavy!",
                cardIcon: "",
                description: [
                    "V neděli 1. června se již tradičně můžete těšit na Den dětí plný zábavy a nejrůznějších aktivit. Přijďte se svými dětmi na louku u dětského hřiště Kamechy. Program bude probíhat od 14:30 do 18:00."
                ],
                time: ["1. června od 14:30"],
                cardDate: "1. června",
                filterDate: "2025-06-01",
                cardTime: "od 14:30",
                place: "hřiště kamechy za centrem runway bystrc",
                image: "kidsDay.webp",
                registrationText: "", 
                registrationLink: "",   
                contactIcon: null,
                contactPerson: "",
                contactLinkText: "",
                contactLink: ""
            },
            en: {
                name: "Children's Day",
                slug: "den-deti",
                cardDescription: "As every year, a day full of fun will take place behind the clubhouse!",
                cardIcon: "",
                description: [
                    "On Sunday, June 1st, you can traditionally look forward to Children's Day full of fun and various activities. Come with your children to the meadow near the children's playground Kamechy. The program will run from 2:30 PM to 6:00 PM."
                ],
                time: ["June 1st from 2:30 PM"],
                cardDate: "June 1st",
                filterDate: "2025-06-01",
                cardTime: "from 2:30 PM",
                place: "Kamechy playground behind Runway Bystrc Center",
                image: "kidsDay.webp",
                registrationText: "", 
                registrationLink: "",   
                contactIcon: null,
                contactPerson: "",
                contactLinkText: "",
                contactLink: ""
            }
        }
    },
//     {
//         template: "template4",
//         type: "special",
//         translations: {
//             cs: {
//                 name: "Jarní swap oblečení",
//                 slug: "swap",
//                 cardDescription: "Přijďte předat své kousky dál a vybrat si jiné (dámské, dětské)",
//                 cardIcon: "",
//                 description: ["Přijďte předat své kousky dál a vybrat si jiné (dámské, dětské)"],
//                 time: ["12. 4. 2025", "13:00 - 17:00"],
//                 cardDate: "12. dubna",
//                 cardTime: "13:00 - 17:00",
//                 filterDate: "1. 6. 2025",
//                 place: "centrum runway bystrc",
//                 image: "swap.webp",
//                 registrationText: "", 
//                 registrationLink: "",     
//                 contactIcon: null, 
//                 contactPerson: "",
//                 contactLinkText: "",
//                 contactLink: ""
//             },
//             en: {
//                 name: "Spring Clothing Swap",
//                 slug: "swap",
//                 cardDescription: "Come and pass on your pieces and pick others (women's, children's)",
//                 cardIcon: "",
//                 description: ["Come and pass on your pieces and pick others (women's, children's)"],
//                 time: ["April 12th, 2025", "1:00 PM - 5:00 PM"],
//                 cardDate: "April 12th",
//                 cardTime: "1 PM - 5 PM",
//                 filterDate: "1. 6. 2025",
//                 place: "Runway Bystrc Center",
//                 image: "swap.webp",
//                 registrationText: "", 
//                 registrationLink: "",     
//                 contactIcon: null, 
//                 contactPerson: "",
//                 contactLinkText: "",
//                 contactLink: ""
//             }
//         }
//     }   
 ];

export const specialActivitiesCard = {
    template: "",
    type: "",
    translations: {
        cs: {
            name: "Speciální akce",
            slug: "specialni-akce",
            cardDescription: "Náš kalendář událostí",
            cardIcon: "/icons/calendar.png",
            description: ["Letní tábory pro dětí"],
            time: null,
            place: "",
            image: "",
            contactTitle: "",
            contactIcon: null,
            contactPerson: "",
            contactLinkText: "",
            contactLink: ""
        },
        en: {
            name: "Special Events",
            slug: "specialni-akce",
            cardDescription: "Our event calendar",
            cardIcon: "/icons/calendar.png",
            description: ["Summer camps for kids"],
            time: null,
            place: "",
            image: "",
            contactTitle: "",
            contactIcon: null,
            contactPerson: "",
            contactLinkText: "",
            contactLink: ""
        }
    }
};

export const challengeCamp = {   
    template: "",
    type: "regular",
    translations: {
        cs: {
            name: "Challenge Camp 2025",
            slug: "challenge-camp",
            cardDescription: "Čas pro váš vztah",
            cardIcon: "/icons/heart.png",
            description: ["Hledáte příměstský tábor v Bystrci s angličtinou? Pak je Challenge camp právě pro Vás. Letos pořádáme již sedmý ročník kempu plného angličtiny a spousty zábavy. Na táboře budou přítomni rodilí mluvčí z USA, se kterými budou účastníci mít příležitost každý den konverzovat a prohlubovat své znalosti angličtiny - ať už během připravených lekcí nebo přirozeně v průběhu tábora."],
            time: ["21. - 25. 7. 2025"],
            cardTime: null,
            place: "centrum runway bystrc a přilehlá sportoviště",
            image: "",
            contactTitle: "Kontakt",
            contactIcon: <Phone className="h-10 w-10 text-gray-3" />,
            contactPerson: "Marek Žitný",
            contactLinkText: "info@runway-bystrc.cz",
            contactLink: "mailto:info@runway-bystrc.cz"
        },
        en: {
            name: "Challenge Camp 2025",
            slug: "challenge-camp",
            cardDescription: "Time for your relationship",
            cardIcon: "/icons/heart.png",
            description: ["Looking for a day camp in Bystrc with English? Then Challenge camp is just for you. This year we are organizing the seventh annual camp full of English and lots of fun. Native speakers from the USA will be present at the camp, with whom participants will have the opportunity to converse every day and deepen their knowledge of English - whether during prepared lessons or naturally during the camp."],
            time: ["July 21st - 25th, 2025"],
            cardTime: null,
            place: "Runway Bystrc Center and nearby sports grounds",
            image: "",
            contactTitle: "Contact",
            contactIcon: <Phone className="h-10 w-10 text-gray-3" />,
            contactPerson: "Marek Žitný",
            contactLinkText: "info@runway-bystrc.cz",
            contactLink: "mailto:info@runway-bystrc.cz"
        }
    }
};