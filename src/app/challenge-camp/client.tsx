"use client";

import { Clock4, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnotherActivities } from "../../components/activities/anotherActivities";
import { useRouter } from "next/navigation";
import { activities, challengeCamp, specialActivitiesCard } from "@/data/activities";
import { Button } from "@/components/ui/button";


export const ChallengeCampClient = () => {
    const router = useRouter();
    const { time, name, place, description, contactTitle, image, contactIcon, 
        contactLink, contactLinkText, contactPerson } = challengeCamp;

    const anotherActivities = [...activities.filter((activityData) => activityData.type === "regular"), specialActivitiesCard];     

    return (
        <div className="flex flex-col items-center w-full my-10 lg:mt-24 min-h-screen">
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col justify-center items-center gap-y-10">
                <h1 className="text-5xl text-gray-9 font-semibold">{name}</h1>
                <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-10 text-blue-5 uppercase text-sm">     
                    {
                    time?.map((timeItem, index) => {
                        return (
                        <p className="flex items-center gap-x-2" key={index}>
                            <Clock4 size={24} />
                            {timeItem}
                        </p>
                        )}     
                    )}      
                    <p className="flex items-center gap-x-2">
                    <MapPin size={24} />
                    {place}
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-y-2 justify-center items-center w-full gap-x-4">               
                    <p>Spousta zábavy</p>
                    <p className="text-gray-5 text-2xl mx-4 hidden lg:flex">•</p>
                    <p>angličtina s rodilými mluvčími</p>
                    <p className="text-gray-5 text-2xl mx-4 hidden lg:flex">•</p>
                    <p>skvělá dostupnost z celého Brna a okolí</p>
                </div>
                <div className="text-gray-9 text-base flex flex-col items-start gap-y-8 max-w-[850px]">
                    {
                    description.map((paragraph, index) => {
                        return (
                        <p key={index}>{paragraph}</p>
                        )
                    })
                    }
                </div>          
            </div>            
        </div>
        <div className="w-[calc(100vw-15px)] bg-gray-1 flex flex-col items-center mt-10 py-6">
            <div className="max-w-[1280px] flex flex-col justify-start items-start px-4 lg:px-0 py-7.5 gap-y-8">
                <p><span className="font-bold mr-1">Věk:</span>od 9 do 16 let</p>
                <p><span className="font-bold mr-1">Cena:</span>3.200,- Kč při přihlášení a zaplacení zálohy do 30. 4. 2024, poté 3.900,- Kč</p>
                <p>Pokud se na tábor na tvé pozvání přihlásí kamarád, který na našich táborech ještě nebyl, dostaneš slevu 200,- Kč.</p>
                <p>Letos nově si navíc účastníci mohou vybrat mezi workshopem vyrábění a sportů.</p>
            </div>
        </div>
        <div className="flex justify-center w-full py-12">            
            <div className="flex flex-col lg:flex-row gap-y-24 w-full items-center justify-center gap-x-48">
                <div className="flex flex-col items-center gap-y-4 px-4">
                    <p className="text-xl text-gray-9 font-bold">{contactTitle}</p>           
                    {contactIcon && contactIcon}
                    <p className="text-gray-8 text-base font-bold">{contactPerson}</p>
                    <Link className="text-blue-5 font-semibold text-base" href={contactLink}>{contactLinkText}</Link>
                </div>
                <div className="flex flex-col items-center gap-y-4">
                    <p className="text-xl text-gray-9 font-bold">Přihlašování do 30. 4. 2025</p>  
                    <Button 
                        variant="blue"
                        text="Přihlaš se" 
                        className="w-48"                      
                        onClick={()=> router.push("/prihlaska/challenge-camp")}
                    />                   
                </div>
            </div>   
        </div> 
        <div className="w-[calc(100vw-15px)] bg-blue-5 py-16 text-sm lg:text-base">
            <div className="max-w-[1000px] mx-auto">
                <p className="text-xl font-bold text-white mb-8 px-4 lg:px-0">Program dne</p>
                <div className="grid grid-cols-2 lg:grid-cols-6 mx-auto text-white px-4 lg:px-0 ">             
                    <div className="font-semibold w-24 flex flex-col col-span-1 gap-y-3">
                        <p>7:30 - 8:00</p>
                        <p>8:00 - 9:00</p>
                        <p>9:10 - 10:10</p>
                        <p>10:15 - 10:30</p>
                        <p>10:45 - 11:45</p>
                        <p>12:00</p>
                        <p>13:30 - 14:45</p>
                        <p>14:45 - 15:00</p>      
                        <p>15:00 - 16:25</p>
                        <p>16:25 - 16:45</p>
                    </div>
                    <div className="col-span-1 lg:col-span-5 flex flex-col gap-y-3">
                        <p>registrace</p>
                        <p>ranní úvodní program</p>
                        <p>angličtina/vyrábění</p>
                        <p>svačina</p>
                        <p>hry</p>
                        <p>oběd</p>
                        <p>angličtina/vyrábění</p>
                        <p>svačina</p>
                        <p>hry</p>
                        <p>rozloučení a předání rodičům</p>
                    </div>
                </div>
            </div>
        </div> 
        <div className="flex flex-col items-center mt-10 w-full">
            <p className="text-xl italic w-full lg:w-96 px-6 lg:px-0">
                “Chtěla bych poděkovat všem, kteří se podíleli na organizaci tábora. Perfect camp.”
            </p>
            <h2 className="text-[32px] font-bold mt-16 mb-8">Minulé tábory</h2>           
            <iframe 
                className="w-full max-w-[1000px] h-[400px] lg:h-[600px]"               
                src="https://www.youtube.com/embed/e2rDH-fJ7iU?si=ZhvXXOsCmWOfrvFO" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen 
            />             
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full py-16 max-w-[1000px]">
            {Array.from({ length: 24 }).map((_, index) => (
                <Image
                    key={index}
                    src="/placeholder.webp"
                    alt={`Placeholder ${index + 1}`}
                    width={300}
                    height={200}
                    className="object-cover"
                />
            ))}
        </div>
        <AnotherActivities activities={anotherActivities} />
        </div>
    )
}