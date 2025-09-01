import Link from "next/link";
import { AnotherActivities } from "../anotherActivities";
import { JSX } from "react";
import { Hero } from "@/components/hero";
import { LangOptions } from "@/types";

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
  lang: LangOptions
}) => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen mb-24">
      <Hero 
        name={name} 
        time={time} 
        place={place} 
        image={image} 
      />
      <div className="text-gray-9 text-base flex flex-col items-center gap-y-8 w-5/6 sm:w-1/2 my-24">
        {
          description.map((paragraph, index) => {
            return (
              <p key={index}>{paragraph}</p>
            )
          })
        }
      </div>
      <div className="w-full flex justify-center bg-gray-1 py-7.5">
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