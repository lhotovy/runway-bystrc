import { Clock4, MapPin } from "lucide-react";
import Image from "next/image";
import { AnotherActivities } from "../anotherActivities";
import placeholderImage from "@/public/placeholder.webp";

// Template pro akci bez přihlašování
export const ActivityTemplate4 = ({
  name,
  description,
  time,
  place,
  image,
  anotherActivities,
  lang
}: {
  name: string,
  description: string[],
  time: string[] | null,
  place: string,
  image: string,
  anotherActivities: any[]
  lang: string
}) => {

  return (
    <div className="flex flex-col items-center w-full my-4 lg:mt-12 min-h-screen">
      {/* big screen view */}
      <div className="hidden sm:flex items-center w-full mb-12">
        <div className="w-2/3 flex flex-col justify-start gap-y-10">
          <h1 className="text-5xl text-gray-9 font-bold">{name}</h1>
          <div className="flex gap-x-10 text-blue-5 uppercase text-sm font-semibold">
            {
              time?.map((time, index) => {
                return (
                  <p key={index} className="flex items-center gap-x-2">
                    <Clock4 size={24} />
                    {time}
                  </p>
                )
              })
            }        
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
          <Image src={`/${image}` || placeholderImage} alt={name} width={300} height={300} className="w-60 h-60 rounded-2xl" />
        </div>
      </div>
      {/* mobile screen view */}
      <div className="flex sm:hidden items-center w-full">
        <div className="w-full flex flex-col justify-center item-center gap-y-10">
          <h1 className="text-4xl text-gray-9 font-bold">{name}</h1>
          <div className="flex justify-center">
            <Image src={`/${image}` || placeholderImage} alt={name} width={300} height={300} className="w-full aspect-square rounded-4xl" />
          </div>
          <div className="flex flex-col gap-y-8 text-blue-5 uppercase text-sm font-semibold">
            {
              time?.map((time, index) => {
                return (
                  <p key={index} className="flex items-center gap-x-2">
                    <Clock4 size={24} />
                    {time}
                  </p>
                )
              })
            }
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
        
      </div>     
      <AnotherActivities 
        activities={anotherActivities} 
        lang={lang} 
      />
    </div>
  )
}