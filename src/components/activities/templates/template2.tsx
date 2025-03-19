"use client";

import { Clock4, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnotherActivities } from "../anotherActivities";
import { Activity } from "@/types";
import { useRouter } from "next/navigation";
import { JSX } from "react";


// Template pro Neděle na Runwayi s odkazy na jiné sbory
export const ActivityTemplate2 = ({
  name,
  description,
  time,
  place,
  image,
  contactTitle,
  contactIcon,
  contactPerson,
  contactLinkText,
  contactLink,
  anotherActivities
}: {
  name: string,
  description: string[],
  time: string,
  place: string,
  image: string,
  contactTitle: string,
  contactIcon: JSX.Element | null,
  contactPerson: string,
  contactLinkText: string,
  contactLink: string,
  anotherActivities: any[]
}) => {
    const router = useRouter();
  return (
    <div className="flex flex-col items-center w-full my-10 lg:mt-12 min-h-screen">
      <div className="flex items-center w-full">
        <div className="w-2/3 flex flex-col justify-start gap-y-10">
          <h1 className="text-5xl text-gray-9 font-semibold">{name}</h1>
          <div className="flex gap-x-10 text-blue-5 uppercase text-sm">
            <p className="flex items-center gap-x-2">
              <Clock4 size={24} />
              {time}
            </p>
            <p className="flex items-center gap-x-2">
              <MapPin size={24} />
              {place}
            </p>
          </div>
          <div className="text-gray-9 text-base flex flex-col items-start gap-y-8">
            {
              description.map((paragraph, index) => {
                return (
                  <p key={index}>{paragraph}</p>
                )
              })
            }
          </div>          
        </div>
        <div className="w-1/3 flex justify-center">
          <Image src={`/${image}`} alt={name} width={300} height={300} className="w-60 h-60 rounded-2xl" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[calc(100vw-15px)] bg-gray-1 py-7.5 mt-10 gap-y-8">
        <p className="text-xl text-gray-9 font-bold">{contactTitle}</p>
        <div className="flex items-center gap-x-12">
            <div className="flex flex-col items-center gap-y-4 w-full max-w-screen-xl px-4">           
                {contactIcon && contactIcon}
                <p className="text-gray-8 text-base font-bold">{contactPerson}</p>
                <Link className="text-blue-5 font-semibold text-base" href={contactLink}>{contactLinkText}</Link>
                </div>
            <div className="w-92">
                <button 
                    className="w-full p-4 text-blue-5 bg-white rounded-xl font-bold text-base cursor-pointer"
                    onClick={()=> router.push("/kontakt")}
                >
                    Další kontakty
                </button>
            </div>
        </div>      
      </div>
      <div className="flex flex-col items-center w-full">
        <h2 className="text-gray-9 font-bold text-[32px] py-24">Bohoslužby jinde v Brně</h2>
        <div className="flex gap-x-48 items-end">            
            <Link href="https://www.baptistebrno.cz/" target="blank" className="flex flex-col items-center">
              <Image src="/smetanka.png" alt="BJB Smetanova" width={150} height={90} className="mb-6" />
              <p>Bratská jednota baptistů</p>
              <p>Smetanova 20</p>
            </Link>
  
            <Link href="https://www.k12medlanky.cz/" target="blank" className="flex flex-col items-center">
              <Image src="/kytnerova.png" alt="BJB Medlánky" width={90} height={50} className="mb-6" />
              <p>Společenství K12</p>
              <p>Kytnerova 12, Medlánky</p>
            </Link>          
        </div>
      </div>
      <AnotherActivities activities={anotherActivities} />
    </div>
  )
}