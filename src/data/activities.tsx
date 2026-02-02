import { SiInstagram } from "@icons-pack/react-simple-icons";
import { Mail, Phone } from "lucide-react";

export const activities = [
    {
        template: "template2",
        type: "regular",
        translations: {
            cs: {
                name: "Neděle na Runwayi",
                slug: "nedele",
                cardDescription: "Klasická bohoslužba nebo Chosen klub",
                cardIcon: "/icons/book.png",
                description: ["Přijď k nám na bohoslužbu nebo na Chosen klub, které se pravidelně střídají. V každém případě zažiješ společenství, které usiluje o Boží blízkost a kde jsi vítán!"],
                time: ["každou neděli od 16:00"],
                cardTime: null,
                place: "Runway Hub",
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
                cardDescription: "Regular service or Chosen club",
                cardIcon: "/icons/book.png",
                description: ["Come to our regular service or Chosen club, which alternates regularly. In either case, you will experience fellowship that strives for God's closeness and where you are welcome!"],
                time: ["every Sunday at 4:00 PM"],
                cardTime: null,
                place: "Runway Hub",
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
                slug: "challenge-camp",
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
                slug: "challenge-camp",
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
                    "Pojeďme společně na hory. Společný čas, zábava, lyžování, procházky, termální lázně, koupání..", 
                    "Letos již tradičně vyrazíme s Runway na hory, konkrétně do penzionu Švihák ve Velkých Losinách. Na místo se dopravíme auty, kdo bude mít zájem o spolujízdu s někým, prosím napište to do daného místa v přihlášce a budete k někomu do auta přiděleni. Program začne v pátek večeří v 19:00. O víkendu bude možno lyžovat, jít na organizovaný výlet nebo do blízkého wellness (vstupné za wellness ani permanentka na lyžování není v ceně pobytu). Co se týče jídla, v ceně je zahrnuta páteční večeře, sobotní snídaně, svačinový balíček a večeře a dále nedělní snídaně a opět balíček. Bližší informace k dopravě i programu budou zaslány na mail na začátku ledna. Informace k platbě Vám budou zaslány v mailu po vyplnění registračního formuláře. Přihláška se stává závaznou ve chvíli jejího zaplacení."
                ],
                details: {
                    "Místo": "Penzion Švihák Lázeňský, Rudé armády 37, Velké Losiny",
                    "Termín": "16. – 18. 1. 2026",
                    "Cena": "osoby od 12 let 1 700 Kč, děti do 11 let 900 Kč, děti do 2 let zdarma (ubytování + polopenze)"
                },
                time: ["16. - 18. 1. 2026"],
                filterDate: "2026-01-16",
                cardDate: "16. - 18. ledna",
                cardTime: null,
                place: "Penzion Švihák Lázeňský",
                image: "hory.webp",
                registrationText: "Kapacita byla naplněna, přihlašování je již uzavřeno", 
                registrationLink: "",      
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
                    "This year, for the third time, we will go to the mountains with Runway, this time to Hotel na Trojce in Jeseníky. We will travel to the location by car; if you are interested in carpooling with someone, please write it in the application, and you will be assigned to someone's car. The program will start on Friday with dinner at 7:00 PM. Over the weekend, it will be possible to ski or go on an organized trip (ski pass is not included in the price of the stay). Regarding food, the price includes Friday dinner, Saturday breakfast and dinner, and Sunday breakfast. More information about transportation and the program will be sent by email during February. Payment information will be sent by email within 24 hours after filling out the registration form. The application becomes binding upon payment."
                ],
                details: {
                    "Place": "Hotel na Trojce, Jindřichov, Jeseníky",
                    "Date": "16. – 18. 1. 2026",
                    "Price": "persons 10+ 1 540 CZK, children under 10 1 240 CZK, under 3 free (accommodation + half board)"
                },
                time: ["February 21st - 23rd, 2025 from 7:00 PM"],
                cardDate: "February 21st - 23rd",
                filterDate: "2026-01-16",
                cardTime: null,
                place: "Hotel na Trojce",
                image: "hory.webp",
                registrationText: "Capacity was filled, registration is closed", 
                registrationLink: "",      
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
                details: {
                    "Místo": "Hřiště Kamechy za centrem Runway Bystrc",
                    "Datum": "1. června",
                    "Čas": "14:30 – 18:00"
                },
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
                details: {
                    "Place": "Kamechy playground behind Runway Bystrc Center",
                    "Date": "June 1st",
                    "Time": "2:30 PM – 6:00 PM"
                },
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
    {
        template: "template3",
        type: "special",
        translations: {
            cs: {
                name: "Léto na Teyschlovce: Turnaj ve stolním fotbálku 2025",
                slug: "leto-na-teyschlovce",
                cardDescription: "Přijďte si zahrát stolní fotbálek nebo se jen tak zastavit!",
                cardIcon: "",
                description: ["Na začátku září Vám opět nabídneme letní osvěžení ve Street Baru v rámci Léta na Teyschlovce, které pořádáme u našeho centra.",
                    "Ve středu 3. 9. se také můžete zúčastnit již čtvrtého ročníku TURNAJE VE STOLNÍM FOTBÁLKU. Na turnaj se registrujte v 17:00 - 17:45 na místě nebo kliknutím na tlačítko níže. Účastnit se mohou jak jednotlivci tak dvojice (počítejte ale s tím, že turnaj není rozdělen do dvou kategorií - tedy např. dvojice může hrát proti jednotlivci)."
                ],
                details: {
                    "Místo": "Centrum Runway Bystrc (vedle Teyschlovy 20)",
                    "Datum": "3. 9. 2025",
                    "Čas": "Street Bar 17:00 – 20:00, turnaj od 18:00",
                    "Startovné": "dobrovolné (na místě)"
                },
                time: ["3. 9. 2025", "17:00 - 20:00"],
                cardDate: "3. září",
                cardTime: "17:00 - 20:00",
                filterDate: "2025-09-03",
                place: "centrum runway bystrc",
                image: "turnaj.webp",
                registrationText: "",
                registrationLink: "https://forms.gle/KqRqKdKSBBa38SDf9",
                contactIcon: null, 
                contactPerson: "",
                contactLinkText: "",
                contactLink: ""
            },
            en: {
                name: "Summer on Teyschlovka: Table football tournament 2025",
                slug: "leto-na-teyschlovce",
                cardDescription: "Come and play table football or just stop by!",
                cardIcon: "",
                description: ["At the beginning of September, we will again offer you a refreshing break in the Street Bar as part of Léto na Teyschlovce, which we organize at our center.",
                    "On Wednesday, September 3rd, you can also participate in the fourth annual TOURNAMENT IN TABLE FOOTBALL. Register for the tournament from 5:00 PM to 5:45 PM at the location or via the button below. Participants can be individuals or pairs (please note that the tournament is not divided into two categories)."
                ],
                details: {
                    "Place": "Runway Bystrc Center (next to Teyschlovy 20)",
                    "Date": "September 3rd, 2025",
                    "Time": "Street Bar 5:00 – 8:00 PM, tournament from 6:00 PM",
                    "Entry fee": "voluntary (on site)"
                },
                time: ["September 3rd, 2025", "17:00 - 20:00"],
                cardDate: "September 3rd",
                cardTime: "17:00 - 20:00",
                filterDate: "2025-09-03",
                place: "Runway Bystrc Center",
                image: "turnaj.webp",
                registrationText: "",
                registrationLink: "https://forms.gle/KqRqKdKSBBa38SDf9",
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
                name: "Otevření Runway Hubu",
                slug: "otevreni-hubu",
                cardDescription: "Již brzy otevíráme náš nový prostor!",
                cardIcon: "",
                description: ["Runway Bystrc otevírá novou budovu!",
                    "Přijďte s námi oslavit otevření našich nových prostor s kavárnou a místem pro komunitní akce v Bystrci. Slavnostní otevření bude probíhat od 14:30 do 16:00.",
                    "Těšit se můžete na voňavou kávu, točenou limonádu, hudbu a doprovodný program pro děti i dospělé.",
                    "V 16:00 zde následně proběhne první bohoslužba v Runway Hub na téma Nebuďme jen sousedé. Přijďte oslavit nový začátek s námi!"
                ],
                details: {
                    "Místo": "Runway Hub, Nad Přehradou 9a, Bystrc",
                    "Datum": "7. 9. 2025",
                    "Čas": "14:30 – 16:00"
                },
                time: ["7. 9. 2025", "14:30 - 16:00"],
                cardDate: "7. září",
                cardTime: "14:30 - 16:00",
                filterDate: "2025-09-07",
                place: "Runway Hub, Nad Přehradou 9a, Bystrc",
                image: "hub.webp",
                registrationText: "", 
                registrationLink: "",     
                contactIcon: null, 
                contactPerson: "",
                contactLinkText: "",
                contactLink: ""
            },
            en: {
                name: "Opening of Runway Hub",
                slug: "otevreni-hubu",
                cardDescription: "We are opening our new space soon!",
                cardIcon: "",
                description: ["Runway Bystrc is opening a new building!",
                    "Come and celebrate the opening of our new space with us, with a coffee shop and a place for community events in Bystrc. The official opening will take place from 2:30 PM to 4:00 PM.",
                    "You can look forward to the smell of coffee, freshly squeezed lemonade, music, and a program for both children and adults.",
                    "At 4:00 PM, the first service in Runway Hub will take place on the topic: Be not just neighbors. Come and celebrate the new beginning with us!"
                ],
                details: {
                    "Place": "Runway Hub, Nad Přehradou 9a, Bystrc",
                    "Date": "September 7th, 2025",
                    "Time": "2:30 PM – 4:00 PM"
                },
                time: ["September 7th, 2025", "14:30 - 16:00"],
                cardDate: "September 7th",
                cardTime: "14:30 - 16:00",
                filterDate: "2025-09-07",
                place: "Runway Hub, Nad Přehradou 9a, Bystrc",
                image: "hub.webp",
                registrationText: "",
                registrationLink: "",
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
                name: "Kurz umělé inteligence I. termín",
                slug: "kurz-ai-I",
                cardDescription: "Kurz umělé inteligence",
                cardIcon: "",
                description: [`Srozumitelný kurz využití umělé inteligence v každodenním životě. Naučte se využít nástroje jako Chat GPT
                  NotebookLM, Leonardo, Suno, Vapi, Genspark a další pro usnadnění vašeho života.`],
                details: {
                    "Místo": "Centrum Runway Bystrc",
                    "Termín": "9. – 11. 12. 2025",
                    "Čas": "8:00 – 16:00",
                    "Kontakt": "Jiří Folta, jirka.folta@gmail.com"
                },
                time: ["9. - 11. 12. 2025", "8:00 - 16:00"],
                cardDate: "9. - 11. 12. 2025",
                cardTime: "8:00 - 16:00",
                filterDate: "2025-12-11",
                place: "centrum runway bystrc",
                image: "kurz-ai.webp",
                registrationText: "Registrace na kurz", 
                registrationLink: "https://naucse.eu/ai/",     
                contactIcon: null, 
                contactPerson: "Jiří Folta",
                contactLinkText: "jirka.folta@gmail.com",
                contactLink: "mailto:jirka.folta@gmail.com"
            },
            en: {
                name: "AI Course I. run",
                slug: "kurz-ai-I",
                cardDescription: "AI Course I. run",
                cardIcon: "",
                description: [`A comprehensible course on the use of artificial intelligence in everyday life. Learn to use tools like Chat GPT
                  NotebookLM, Leonardo, Suno, Vapi, Genspark and others to make your life easier.`],
                details: {
                    "Place": "Runway Bystrc Center",
                    "Date": "9. – 11. 12. 2025",
                    "Time": "8:00 AM – 4:00 PM",
                    "Contact": "Jiří Folta, jirka.folta@gmail.com"
                },
                time: ["9. - 11. 12. 2025", "8:00 - 16:00"],
                cardDate: "9. - 11. 12. 2025",
                cardTime: "8:00 - 16:00",
                filterDate: "2025-12-11",
                place: "Runway Bystrc Center",
                image: "kurz-ai.webp",
                registrationText: "Registration for the course", 
                registrationLink: "https://naucse.eu/ai/",     
                contactIcon: null, 
                contactPerson: "Jiří Folta",
                contactLinkText: "jirka.folta@gmail.com",
                contactLink: "mailto:jirka.folta@gmail.com"
            }
        }
    },
    {
        template: "template3",
        type: "special",
        translations: {
            cs: {
                name: "Kurz umělé inteligence II. termín",
                slug: "kurz-ai-II",
                cardDescription: "Kurz umělé inteligence",
                cardIcon: "",
                description: [`Srozumitelný kurz využití umělé inteligence v každodenním životě. Naučte se využít nástroje jako Chat GPT
                  NotebookLM, Leonardo, Suno, Vapi, Genspark a další pro usnadnění vašeho života.`],
                details: {
                    "Místo": "Centrum Runway Bystrc",
                    "Termín": "12. – 14. 12. 2025",
                    "Čas": "8:00 – 16:00",
                    "Kontakt": "Jiří Folta, jirka.folta@gmail.com"
                },
                time: ["12. - 14. 12. 2025", "8:00 - 16:00"],
                cardDate: "12. - 14. 12. 2025",
                cardTime: "8:00 - 16:00",
                filterDate: "2025-12-14",
                place: "centrum runway bystrc",
                image: "kurz-ai.webp",
                registrationText: "Registrace na kurz", 
                registrationLink: "https://naucse.eu/ai/",     
                contactIcon: null, 
                contactPerson: "Jiří Folta",
                contactLinkText: "jirka.folta@gmail.com",
                contactLink: "mailto:jirka.folta@gmail.com"
            },
            en: {
                name: "AI Course II. run",
                slug: "kurz-ai-II",
                cardDescription: "AI Course I. run",
                cardIcon: "",
                description: [`A comprehensible course on the use of artificial intelligence in everyday life. Learn to use tools like Chat GPT
                  NotebookLM, Leonardo, Suno, Vapi, Genspark and others to make your life easier.`],
                details: {
                    "Place": "Runway Bystrc Center",
                    "Date": "12. – 14. 12. 2025",
                    "Time": "8:00 AM – 4:00 PM",
                    "Contact": "Jiří Folta, jirka.folta@gmail.com"
                },
                time: ["12. - 14. 12. 2025", "8:00 - 16:00"],
                cardDate: "12. - 14. 12. 2025",
                cardTime: "8:00 - 16:00",
                filterDate: "2025-12-14",
                place: "Runway Bystrc Center",
                image: "kurz-ai.webp",
                registrationText: "Registration for the course", 
                registrationLink: "https://naucse.eu/ai/",     
                contactIcon: null, 
                contactPerson: "Jiří Folta",
                contactLinkText: "jirka.folta@gmail.com",
                contactLink: "mailto:jirka.folta@gmail.com"
            }
        }
    },
    {
        template: "template4",
        type: "special",
        translations: {
            cs: {
                name: "Swap oblečení",
                slug: "swap",
                cardDescription: "Podzimní swap dětské a dámské oblečení a hraček",
                cardIcon: "",
                description: [`Zavítejte k nám na podzimní swap, tentokrát zaměřený na dětské a dámské oblečení a hračky.
                    Swap se koná v prostorech kavárny Runway Hub v Bystrci. Kavárna bude v průběhu akce otevřená, takže si můžete objednat kávu nebo něco dobrého k zakousnutí.`],
                details: {
                    "Místo": "Runway Hub, Bystrc",
                    "Datum": "1. 11. 2025",
                    "Čas": "11:00 – 18:00"
                },
                time: ["1. 11. 2025", "11:00 - 18:00"],
                cardDate: "1. 11. 2025",
                cardTime: "11:00 - 18:00",
                filterDate: "2025-11-01",
                place: "Runway Hub",
                image: "swap.webp",
                registrationText: "", 
                registrationLink: "",     
                contactIcon: null, 
                contactPerson: "",
                contactLinkText: "",
                contactLink: ""
            },
            en: {
                name: "Clothes Swap",
                slug: "swap",
                cardDescription: "Clothes Swap",
                cardIcon: "",
                description: [`Come and join us for a fall clothes swap, focusing on children's and women's clothing and toys.
                    The swap will take place in the Runway Hub cafe in Bystrc. The cafe will be open during the event, so you can order a coffee or something good to eat.`],
                details: {
                    "Place": "Runway Hub, Bystrc",
                    "Date": "1. 11. 2025",
                    "Time": "11:00 AM – 6:00 PM"
                },
                time: ["1. 11. 2025", "11:00 - 18:00"],
                cardDate: "1. 11. 2025",
                cardTime: "11:00 - 18:00",
                filterDate: "2025-11-01",
                place: "Runway Hub",
                image: "swap.webp",
                registrationText: "", 
                registrationLink: "",     
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
                name: "Vánoční “mug quiz”",
                slug: "mug-quiz",
                cardDescription: "Vánoční “mug quiz”  - kavárenský pub quiz",
                cardIcon: "",
                description: [`Zveme Vás na náš první Mug Quiz – kavárenskou verzi oblíbeného pub quizu. Přijďte si užít předvánoční atmosféru s hrnkem kávy v ruce.
                            Přihlásit se mohou týmy i jednotlivci (max. 5 osob v týmu). Pokud se přihlásíte sami, přiřadíme Vás do týmu k dalším účastníkům. Pro vítězný tým máme připravenou malou výhru.`],
                details: {
                    "Místo": "Runway Hub",
                    "Datum": "13. 12. 2025",
                    "Čas": "17:00",
                    "Vstup": "zdarma"
                },
                time: ["13. 12. 2025", "17:00"],
                cardDate: "13. 12. 2025",
                cardTime: "17:00",
                filterDate: "2025-12-13",
                place: "Runway Hub",
                image: "mugQuiz.webp",
                registrationText: "Přihlásit se na mug quiz", 
                registrationLink: "https://forms.gle/fatddNn132wNMfN69",     
                contactIcon: null, 
                contactPerson: "",
                contactLinkText: "",
                contactLink: ""
            },
            en: {
                name: "Christmas “mug quiz”",
                slug: "mug-quiz",   
                cardDescription: "Christmas “mug quiz” - cafe quiz",
                cardIcon: "",
                description: [`We invite you to our first Mug Quiz – a café version of the popular pub quiz. Come and enjoy the pre-Christmas atmosphere with a cup of coffee in your hand.
                            Teams and individuals can register (max. 5 people per team). If you register alone, we will assign you to a team with other participants. For the winning team, we have prepared a small prize.`],
                details: {
                    "Place": "Runway Hub",
                    "Date": "13. 12. 2025",
                    "Time": "5:00 PM",
                    "Entrance": "free"
                },
                time: ["13. 12. 2025", "17:00"],
                cardDate: "13. 12. 2025",
                cardTime: "17:00",
                filterDate: "2025-12-13",
                place: "Runway Hub",
                image: "mugQuiz.webp",
                registrationText: "Register for the mug quiz", 
                registrationLink: "https://forms.gle/fatddNn132wNMfN69",     
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
                name: "Kurz Manželské večery",
                slug: "manzelske-vecery",
                cardDescription: "",
                cardIcon: "",
                description: [
                    "Manželské večery jsou časem, který si partneři vědomě vyhradí jeden pro druhého. Každý večer začíná večeří při svíčkách u stolků pro dva – v prostředí připomínajícím rande. Tlumená hudba, květiny, káva a zákusek vytvářejí prostor, kde je snadné zpomalit a být spolu.",
                    "Součástí programu jsou praktická témata o vztazích, která formou videí otevírají zkušení světoví odborníci. Zaznívají skutečné příběhy párů i situace ze života, často s lehkostí a humorem. Obsah je srozumitelný, praktický a vede k zamyšlení.",
                    "Jádrem každého večera je rozhovor pouze v páru. U stolku pro dva, v naprostém soukromí, si partneři povídají nad otázkami v zápisnících. O svém vztahu se nemluví před skupinou ani s nikým dalším – jen spolu.",
                    "Manželské večery jsou určené pro partnery (nejen manžele), pro každého bez ohledu na víru či životní filozofii. Jsou vhodné jak pro vztahy, které fungují dobře, tak pro ty, které procházejí náročnějším obdobím. Každý vztah má totiž prostor k růstu.",
                    "Témata jednotlivých večerů: 1. Vybudovat pevné základy – společně strávený čas, pochopení potřeb toho druhého. 2. Umění komunikace – naslouchání a sdílení vnitřních pocitů. 3. Řešení konfliktů – přijímání odlišností, šest kroků k řešení konfliktu. 4. Síla odpuštění – přiznání zranění, jak odpustit i těžké věci, jak začít znovu. 5. Rodiče a rodiče partnera – vliv rodiny původu a vztahy s rodiči v dospělosti. 6. Dobrý sex – jak znovu zažehnout jiskru, šest rad pro dobré milence. 7. Láska v akci – pět jazyků lásky prakticky. 8. Závěrečná párty Manželských večerů – co tvoří hezké a zdravé manželství.",
                    "Více informací: www.manzelskevecery.cz/content/view/manzelskevecery"
                ],
                details: {
                    "Místo": "Runway Hub, Nad Přehradou 1466/9a, Bystrc",
                    "Termín": "8 úterků, vždy od 18:30",
                    "Začátek": "10. března 2026",
                    "Cena": "3 800 Kč za pár (včetně večeře)"
                },
                time: ["8 úterků, vždy od 18:30", "Začátek: 10. března 2026"],
                cardDate: "10. 3. 2026",
                cardTime: "18:30",
                filterDate: "2026-03-10",
                place: "Runway Hub",
                image: "manzelske_vecery.webp",
                registrationText: null, 
                registrationLink: "/prihlaska/manzelske-vecery",     
                contactIcon: null, 
                contactPerson: "",
                contactLinkText: "",
                contactLink: "https://manzelskevecery.cz/content/view/manzelskevecery"
            },
            en: {
                name: "Marriage Evenings Courses",
                slug: "manzelske-vecery",   
                cardDescription: "Time for your relationship – 8 evenings over dinner and in private",
                cardIcon: "",
                description: [
                    "Marriage Evenings are time that partners deliberately set aside for each other. Each evening begins with a candlelit dinner at tables for two – in an atmosphere reminiscent of a date. Soft music, flowers, coffee and dessert create a space where it is easy to slow down and be together.",
                    "The program includes practical topics on relationships, opened by experienced international experts in video form. Real stories of couples and everyday situations are shared, often with lightness and humor. The content is clear, practical and gives food for thought.",
                    "The core of each evening is a conversation only as a couple. At a table for two, in complete privacy, partners talk through questions in workbooks. The relationship is not discussed in front of the group or with anyone else – only together.",
                    "Marriage Evenings are for partners (not only married couples), for everyone regardless of faith or life philosophy. They are suitable both for relationships that are going well and for those going through a tougher period. Every relationship has room to grow.",
                    "Topics of the evenings: 1. Building solid foundations – time together, understanding each other's needs. 2. The art of communication – listening and sharing inner feelings. 3. Resolving conflict – accepting differences, six steps to resolving conflict. 4. The power of forgiveness – acknowledging hurt, how to forgive even hard things, how to start again. 5. Parents and in-laws – influence of family of origin and relationships with parents in adulthood. 6. Good sex – how to rekindle the spark, six tips for good lovers. 7. Love in action – five love languages in practice. 8. Marriage Evenings closing party – what makes a good and healthy marriage.",
                    "More information: www.manzelskevecery.cz/content/view/manzelskevecery"
                ],
                details: {
                    "Place": "Runway Hub, Nad Přehradou 1466/9a, Bystrc",
                    "Schedule": "8 Tuesdays, always from 6:30 PM",
                    "Start": "10 March 2026",
                    "Price": "3,800 CZK per couple (including dinner)"
                },
                time: ["8 Tuesdays, from 6:30 PM", "Start: 10 March 2026"],
                cardDate: "10. 3. 2026",
                cardTime: "18:30",
                filterDate: "2026-03-10",
                place: "Runway Hub",
                image: "manzelske_vecery.webp",
                registrationText: null, 
                registrationLink: "/prihlaska/manzelske-vecery",     
                contactIcon: null, 
                contactPerson: "",
                contactLinkText: "",
                contactLink: "https://manzelskevecery.cz/content/view/manzelskevecery"
            }
        }
    },
    {
        template: "template4",
        type: "special",
        translations: {
            cs: {
                name: "Benefiční vánoční koncert pro Chovánek",
                slug: "vanocni-koncert",
                cardDescription: "Benefiční vánoční koncert pro Chovánek",
                cardIcon: "",
                description: [`Rádi byste si trochu oddychli a k tomu podpořili dobrou věc? I letos Vás zveme na benefiční vánoční koncert skupiny GraceToYou. 
                    Můžete se těšit na vánoční písně v moderním podání. Výtěžek koncertu bude věnován dětskému centru Chovánek.`, "VSTUPNÉ DOBROVOLNÉ"],
                details: {
                    "Místo": "Společenské centrum Bystrc, Odbojářská 2",
                    "Datum": "19. 12. 2025",
                    "Čas": "18:00",
                    "Vstupné": "dobrovolné"
                },
                time: ["19. 12. 2025", "18:00"],
                cardDate: "19. 12. 2025",
                cardTime: "18:00",
                filterDate: "2025-12-19",
                place: "Společenské centrum Bystrc, Odbojářská 2",
                image: "christmasConcert.webp",
                registrationText: "",
                registrationLink: "",
                contactIcon: null,
                contactPerson: "",
                contactLinkText: "",
                contactLink: ""
            },
            en: {
                name: "Fund-raiser Christmas concert for Chovánek",
                slug: "vanocni-koncert",   
                cardDescription: "Fund-raiser Christmas concert for Chovánek",
                cardIcon: "",
                description: [`We would like to take a little break and at the same time support a good cause? This year we invite you to a fund-raiser Christmas concert by the group GraceToYou. 
                    You can look forward to Christmas songs in a modern interpretation. The gain of the concert will be donated to the children's center Chovánek.`, "FREE ENTRY"],
                details: {
                    "Place": "Společenské centrum Bystrc, Odbojářská 2",
                    "Date": "19. 12. 2025",
                    "Time": "6:00 PM",
                    "Entrance": "voluntary"
                },
                time: ["19. 12. 2025", "18:00"],
                cardDate: "19. 12. 2025",
                cardTime: "18:00",
                filterDate: "2025-12-19",
                place: "Společenské centrum Bystrc, Odbojářská 2",
                image: "christmasConcert.webp",
                registrationText: "",
                registrationLink: "",
                contactIcon: null,
                contactPerson: "",
                contactLinkText: "",
                contactLink: ""
            }
        }
    },        
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
    },
    
};

export const challengeCamp = {   
    template: "",
    type: "regular",
    translations: {
        cs: {
            name: "Challenge Camp 2026",
            slug: "challenge-camp",
            cardDescription: "Čas pro váš vztah",
            cardIcon: "/icons/heart.png",
            description: ["Hledáte příměstský tábor v Bystrci s angličtinou? Pak je Challenge camp právě pro Vás. Letos pořádáme již osmý ročník kempu plného angličtiny a spousty zábavy. Na táboře budou přítomni rodilí mluvčí z USA, se kterými budou účastníci mít příležitost každý den konverzovat a prohlubovat své znalosti angličtiny - ať už během připravených lekcí nebo přirozeně v průběhu tábora."],
            time: ["20. - 24. 7. 2026"],
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
            name: "Challenge Camp 2026",
            slug: "challenge-camp", 
            cardDescription: "Time for your relationship",
            cardIcon: "/icons/heart.png",
            description: ["Looking for a day camp in Bystrc with English? Then Challenge camp is just for you. This year we are organizing the eighth annual camp full of English and lots of fun. Native speakers from the USA will be present at the camp, with whom participants will have the opportunity to converse every day and deepen their knowledge of English - whether during prepared lessons or naturally during the camp."],
            time: ["July 20th - 24th, 2026"],
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