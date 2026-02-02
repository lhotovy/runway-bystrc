import { AnotherActivities } from "../anotherActivities";
import { Hero } from "@/components/hero";
import { LangOptions } from "@/types";

// Template pro akci bez přihlašování
export const ActivityTemplate4 = ({
  name,
  description,
  details,
  time,
  place,
  image,
  anotherActivities,
  lang
}: {
  name: string,
  description: string[],
  details?: Record<string, string>,
  time: string[] | null,
  place: string,
  image: string,
  anotherActivities: any[]
  lang: LangOptions
}) => {
  const hasDetails = details && Object.keys(details).length > 0;

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
      {hasDetails && (
        <ul className="list-none list-inside space-y-2 w-full">
          {Object.entries(details!).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      )}
    </div>  
    <div className="mb-16"> 
      <AnotherActivities 
        activities={anotherActivities} 
        lang={lang} 
      />
    </div> 
    </div>
  )
}