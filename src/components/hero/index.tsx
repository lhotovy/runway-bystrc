import { HeroImage } from "./image"
import { MapPinIcon, ClockIcon } from "@heroicons/react/24/solid"

export const Hero = ({
  name,
  time,
  place,
  image
}: {
  name: string,
  time: string[] | null,
  place: string,
  image: string
}) => {
  return (  
      <div className="flex relative w-screen h-[60vh] min-h-[500px]">
        <HeroImage image={image} name={name}>
          <div className="max-w-4xl flex flex-col gap-y-10">
            <h1 className="text-5xl text-white font-bold">{name}</h1>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-y-4 lg:gap-x-10 text-black font-semibold uppercase text-sm">
              {
                time && time?.map((time, index) => {
                  return (
                    <p key={index} className="flex items-center gap-x-2 bg-yellow py-1.5 px-3 rounded-xl">
                      <ClockIcon className="w-6 h-6 text-black" />
                      {time}
                    </p>
                  )
                })
              }
              {
                place && (
                    <p className="flex items-center gap-x-2 bg-yellow py-1.5 px-3 rounded-xl">
                        <MapPinIcon className="w-6 h-6 min-w-6 min-h-6 flex-shrink-0 text-black" />
                        {place}
                  </p>
                )
              }              
            </div>           
          </div>
        </HeroImage>
    </div>
  )
}