import { Clock4, MapPin } from "lucide-react";
import Image from "next/image";

export const ActivityTemplate1 = ({
  name,
  description,
  time,
  place,
  image,
  contactTitle,
  contactPerson,
  contactLinkText,
  contactLink
}: {
  name: string,
  description: string,
  time: string,
  place: string,
  image: string,
  contactTitle: string,
  contactPerson: string,
  contactLinkText: string,
  contactLink: string
}) => {
  return (
    <div>
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
          <p className="text-gray-9 text-base">{description}</p>
        </div>
        <div className="w-1/3">
          <Image src="/beach.jpg" alt={name} width={300} height={300}/>
        </div>
      </div>
    </div>
  )
}