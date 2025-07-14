"use client";

import Image from "next/image";
import { oNasData } from "@/data/staticPages/oNas";
import placeholderImage from "@/public/placeholder.webp";
import { Hero } from "@/components/hero";
import Link from "next/link";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { LinkButton } from "@/components/ui/linkButton";

export const ONasClient = ({ lang }: { lang: 'cs' | 'en' }) => {
  const data = oNasData.translations[lang];

  return (
    <div className="flex flex-col items-center">    
      <Hero name={data.title} image="hero.jpg" />
      <div className="flex flex-col gap-y-8 items-center mt-24 w-5/6 sm:w-1/2 text-base">
        {
          data.about.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))
        }    
      </div>
      <div className="flex flex-col items-center mt-24 w-[calc(100vw-15px)] bg-blue-1">
        <h2 className="text-3xl text-gray-9 font-bold mt-8 pb-4">{data.valuesTitle}</h2>
        <div className="flex flex-col gap-y-12 sm:flex-row gap-x-12 py-12 max-w-[1280px] items-center">
          {data.values.map((value: any, index: number) => (
            <div key={index} className="flex flex-col gap-y-4 w-full sm:w-1/3 items-center">
              <Image src={value.source || placeholderImage} alt={value.imageAlt} width={150} height={150} className="bg-white p-12 rounded-full" />
              <p className="font-bold text-lg text-gray-9">{value.title}</p>
              <p className="text-base text-gray-9 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* contact */}
      <div className="w-[calc(100vw-15px)] flex justify-center bg-content-blue py-7.5">
        <div className="flex flex-col items-center gap-y-4 w-full max-w-screen-xl px-4">
          <p className="text-xl text-white font-bold">{data.contactTitle}</p>
          <div className="flex flex-col items-center gap-y-2 my-8">
            <SiInstagram className="w-8 h-8 text-gray-3" />
            <p className="text-white text-base font-bold">{data.contactIconText}</p>
            <p className="text-blue-3 text-base">{data.contactText}</p>
          </div>
          <LinkButton href={data.contactLink} text={data.contactLinkText} />
        </div>
      </div>
      {/* another places to visit */}
      <div className="w-[calc(100vw-15px)] flex justify-center bg-jasmin py-12">
        <div className="flex flex-col items-center gap-y-4 w-full max-w-screen-xl px-4">
          <div className="flex flex-col items-center text-center gap-y-4 pb-6">
            <h2 className="text-3xl text-gray-9 font-bold">{data.anotherPlacesTitle}</h2>
            <p className="text-gray-9 text-xl font-bold">{data.anotherPlacesSubtitle}</p>
            <p className="text-gray-9 text-base w-full sm:w-2/3">{data.anotherPlacesText}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-y-12 sm:gap-x-8 w-full md:w-4/5 max-w-screen-xl px-4">
            {data.anotherPlaces.map((place: any, index: number) => (
              <div key={index} className="w-full sm:w-1/3 items-center bg-white rounded-2xl p-6">
                <Link href={place.link} target="_blank" className="flex flex-col gap-y-4 items-center">
                  <Image 
                    src={place.image || placeholderImage} 
                    alt={place.title} 
                    width={200}
                    height={200}
                    className="object-contain rounded-t-lg w-full h-[150px]"
                  />
                  <h3 className="font-bold text-lg text-gray-9">{place.title}</h3>
                  <p className="text-base text-gray-9 text-center">{place.text}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};