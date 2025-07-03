"use client";

import { Clock4, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnotherActivities } from "../anotherActivities";
import { useRouter } from "next/navigation";
import { JSX } from "react";
import { template2Data } from "@/data/templates/template2Data";
import placeholderImage from "@/public/placeholder.webp";
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/solid";

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
  anotherActivities,
  lang
}: {
  name: string,
  description: string[],
  time: string[] | null,
  place: string,
  image: string,
  contactTitle: string | undefined,
  contactIcon: JSX.Element | null,
  contactPerson: string,
  contactLinkText: string,
  contactLink: string,
  anotherActivities: any[]
  lang: string
}) => {
    const router = useRouter();
    const staticData = template2Data.translations[lang as keyof typeof template2Data.translations];
  return (
    <div className="flex flex-col items-center w-full min-h-screen mb-24">
    {/* big screen view */}
    <div className="hidden sm:flex relative w-[calc(100vw-15px)] h-[60vh] min-h-[500px]">
      <Image 
        src={`/${image}` || placeholderImage} 
        alt={name} 
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl flex flex-col gap-y-10">
          <h1 className="text-5xl text-white font-bold">{name}</h1>
          <div className="flex justify-center gap-x-10 text-black font-semibold uppercase text-sm">
            {
              time?.map((time, index) => {
                return (
                  <p key={index} className="flex items-center gap-x-2 bg-yellow py-1.5 px-3 rounded-xl">
                    <ClockIcon className="w-6 h-6 text-black" />
                    {time}
                  </p>
                )
              })
            }
            <p className="flex items-center gap-x-2 bg-yellow py-1.5 px-3 rounded-xl">
              <MapPinIcon className="w-6 h-6 text-black" />
              {place}
            </p>
          </div>           
        </div>
      </div>
    </div>
    {/* mobile screen view */}
    <div className="flex sm:hidden items-center w-full">
      <div className="w-full flex flex-col justify-center item-center gap-y-10">
        <h1 className="text-4xl text-gray-9 font-bold">{name}</h1>
        <div className="flex justify-center">
          <Image src={`/${image}` || placeholderImage} alt={name} width={300} height={300} className="w-full aspect-square rounded-4xl" />
        </div>
        <div className="flex flex-col gap-y-8 text-blue-5 uppercase text-sm">
          { 
          time?.map((time, index) => {
            return (
              <p key={index} className="flex items-center gap-x-2 bg-yellow py-1.5 px-3 rounded-xl">
                <ClockIcon className="w-6 h-6 text-black" />
                {time}
              </p>
          )}
          )}           
          <p className="flex items-center gap-x-2 bg-yellow py-1.5 px-3 rounded-xl">
            <MapPinIcon className="w-6 h-6 text-black" />
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
      
    </div>
    <div className="text-gray-9 text-base flex flex-col items-center gap-y-8 w-1/2 my-24">
      {
        description.map((paragraph, index) => {
          return (
            <p key={index}>{paragraph}</p>
          )
        })
      }
    </div>

      <div className="flex flex-col justify-center items-center w-[calc(100vw-15px)] bg-gray-1 py-7.5 mt-10 gap-y-8">
        <p className="text-xl text-gray-9 font-bold">{contactTitle}</p>
        <div className="flex flex-col sm:flex-row items-center sm:gap-x-12 gap-y-8">
            <div className="flex flex-col items-center gap-y-4 w-full max-w-screen-xl px-4">           
                {contactIcon && contactIcon}
                <p className="text-gray-8 text-base font-bold">{contactPerson}</p>
                <Link className="text-blue-5 font-semibold text-base" target="blank" href={contactLink ?? "/"}>{contactLinkText}</Link>
                </div>
            <div className="w-92 text-center">
              <button 
                  className="w-1/2 sm:w-full p-4 text-blue-5 bg-white rounded-xl font-bold text-base cursor-pointer"
                  onClick={()=> router.push(staticData.anotherContacts.href)}
              >
                  {staticData.anotherContacts.text}
              </button>
            </div>
        </div>      
      </div>
      <div className="flex flex-col items-center w-full">
        <h2 className="text-gray-9 font-bold text-[32px] py-24">{staticData.anotherServices}</h2>
        <div className="flex flex-col sm:flex-row gap-y-16 sm:gap-x-48 items-end">            
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
      <AnotherActivities 
        activities={anotherActivities} 
        lang={lang}
      />
    </div>
  )
}