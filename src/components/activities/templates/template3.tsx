"use client";

import { AnotherActivities } from "../anotherActivities";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Hero } from "@/components/hero";
import { LangOptions } from "@/types";

// Template pro akci s přihlašováním
export const ActivityTemplate3 = ({
  name,
  description,
  time,
  place,
  image,
  registrationText,
  registrationLink,
  anotherActivities,
  lang
}: {
  name: string,
  description: string[],
  time: string[] | null,
  place: string,
  image: string,
  registrationText: string | undefined,
  registrationLink: string | undefined,
  anotherActivities: any[]
  lang: LangOptions
}) => {
  const router = useRouter();
console.log(registrationLink);
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Hero
        name={name}
        time={time}
        place={place}
        image={image}
      />
      <div className="text-gray-9 w-5/6 sm:w-1/2 text-base flex flex-col items-start my-12 gap-y-8">
        {
          description.map((paragraph, index) => {
            return (
              <p key={index}>{paragraph}</p>
            )
          })
        }
      </div>    
      <div className="w-full flex justify-center bg-content-blue py-7.5">
        <div className="flex flex-col items-center w-full max-w-screen-xl px-4">
          {registrationText && <p className="text-xl text-white font-bold mb-4">{registrationText}</p>}         
          {registrationLink && 
            <Button 
              variant="yellow" 
              text="Přihlásit se"
              disabled={registrationLink === "/"} 
              onClick={() => {registrationLink.includes("http") ? window.open(registrationLink, "_blank") : router.push(`${registrationLink}`)}} 
              className="py-3"
            />}     
        </div>
      </div>
      <AnotherActivities 
        activities={anotherActivities}
        lang={lang} 
      />
    </div>
  )
}