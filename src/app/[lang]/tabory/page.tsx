
import Image from "next/image";
import Link from "next/link";
import { AnotherActivities } from "@/components/activities/anotherActivities";
import { activities, specialActivitiesCard } from "@/data/activities";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tábory | Runway Bystrc",
    description: "Příměstské anglické tábory pořádáme v Brně již od roku 2019. Přidej se k nám i Ty!", 
}

export default async function Camps({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    
    const anotherActivities = [...activities
        .filter((activity) => activity.type === "regular"), specialActivitiesCard]
        .map((activity) => {
            const translatedActivity = activity.translations[lang as keyof typeof activity.translations];
            return {
                ...translatedActivity,
                template: activity.template || undefined,
                type: activity.type || "unknown",
            };
        });   

    return (
        <div className="flex flex-col items-center w-full my-10 lg:mt-12 min-h-screen">
        {/* Big screen */}
        <div className="hidden lg:flex items-center w-full">
            <div className="w-2/3 flex flex-col justify-start gap-y-10">
                <h1 className="text-5xl text-gray-9 font-semibold">Tábory</h1>
                <p className="text-gray-9 text-base flex flex-col items-start gap-y-8">
                        Příměstské anglické tábory pořádáme v Bystrci již od roku 2019. Přidejte se letos k nám i Vy!
                </p>          
            </div>
            <div className="w-1/3 flex justify-center">
                <Image src="/camps.webp" alt="Tábory" width={300} height={300} className="w-60 h-60 rounded-2xl" />
            </div>
        </div>  

        {/* Mobile screen */}
        <div className="flex lg:hidden items-center w-full">
            <div className="w-full flex flex-col justify-start gap-y-10">
                <h1 className="text-5xl text-gray-9 font-semibold">Tábory</h1>
                <div className="w-full flex justify-center">
                    <Image src="/camps.webp" alt="Tábory" width={300} height={300} className="w-80 h-80 rounded-2xl" />
                </div>
                <p className="text-gray-9 text-base flex flex-col items-start gap-y-8">
                        Příměstské anglické tábory pořádáme v Bystrci již od roku 2019. Přidejte se letos k nám i Vy!
                </p>          
            </div>
            
        </div>  

        <div className="flex flex-col items-center w-full my-10 lg:mt-12">
            <h2 className="font-bold text-[32px] mb-8 mt-16">Nadcházející tábory</h2>
            <Link className="bg-blue-1 rounded-xl p-4 flex flex-col items-center gap-y-2" href="/challenge-camp">
                <Image src="/challengeCamp.webp" alt="Challenge camp" width={300} height={300} className="w-80 h-60 rounded-xl" />
                <p className="text-xl font-bold">Challenge Camp 2025</p>
                <p>21. - 25. 7. 2025</p>

            </Link>
        </div>             
        <AnotherActivities activities={anotherActivities} />
        </div>
    )
}