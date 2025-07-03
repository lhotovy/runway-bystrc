import { ClockIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { AnotherActivities } from "../anotherActivities";
import { JSX } from "react";
import placeholderImage from "@/public/placeholder.webp";

// Základní template pro aktivity
export const ActivityTemplate1 = ({
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
  contactTitle: string,
  contactIcon: JSX.Element | null,
  contactPerson: string,
  contactLinkText: string,
  contactLink: string,
  anotherActivities: any[]
  lang: string
}) => {
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
      <div className="w-[calc(100vw-15px)] flex justify-center bg-gray-1 py-7.5">
        <div className="flex flex-col items-center gap-y-4 w-full max-w-screen-xl px-4">
          <p className="text-xl text-gray-9 font-bold">{contactTitle}</p>
          {contactIcon && contactIcon}
          <p className="text-gray-8 text-base font-bold">{contactPerson}</p>
          <Link className="text-blue-5 font-semibold text-base" target="blank" href={contactLink ?? "/"}>{contactLinkText}</Link>
        </div>
      </div>
      <AnotherActivities 
        activities={anotherActivities} 
        lang={lang}
      />
    </div>
  )
}