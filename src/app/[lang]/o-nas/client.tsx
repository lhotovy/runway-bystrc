"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";
import { oNasData } from "@/data/staticPages/oNas";
import placeholderImage from "@/public/placeholder.webp";

export const ONasClient = ({ lang }: { lang: 'cs' | 'en' }) => {
  const data = oNasData.translations[lang];

  return (
    <div className="flex flex-col items-center mt-12">
      {/* big screen */}
      <h1 className="hidden lg:flex font-bold text-[40px] text-gray-9 self-start mb-12">{data.title}</h1>
      <div className="hidden lg:flex gap-x-8 items-center">
        <div className="flex flex-col gap-y-8 w-2/3">
          {data.about.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="w-1/3">
          <Image src="/oNas.webp" alt="O Runwayi" width={400} height={150} className="rounded-xl" />
        </div>
      </div>
      <div className="hidden lg:flex flex-col items-center mt-24">
        <h2 className="text-3xl text-gray-9 font-bold mt-8 pb-4">{data.valuesTitle}</h2>
        <div className="flex gap-x-12 py-12">
          {data.values.map((value: any, index: number) => (
            <div key={index} className="flex flex-col gap-y-4 w-1/3 items-center">
              <Image src={value.source || placeholderImage} alt={value.imageAlt} width={150} height={150} className="bg-gray-1 p-12 rounded-full" />
              <p className="font-bold text-lg text-gray-9">{value.title}</p>
              <p className="text-base text-gray-9 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* mobile screen */}
      <div className="flex lg:hidden gap-x-8 px-4">
        <div className="flex flex-col gap-y-8 w-full">
          <h1 className="font-bold text-[40px] text-gray-9">{data.title}</h1>
          <div className="w-full">
            <Image src="/oNas.webp" alt="O Runwayi" width={400} height={150} className="rounded-xl" />
          </div>
          {data.about.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="flex lg:hidden flex-col items-center mt-12">
        <h2 className="text-3xl text-gray-9 font-bold mt-8 pb-4">{data.valuesTitle}</h2>
        <div className="flex flex-col gap-y-24 py-12">
          {data.values.map((value: any, index: number) => (
            <div key={index} className="flex flex-col gap-y-4 items-center">
              <Image src={value.source || placeholderImage} alt={value.imageAlt} width={150} height={150} className="bg-gray-1 p-12 rounded-full" />
              <p className="font-bold text-lg text-gray-9">{value.title}</p>
              <p className="text-base text-gray-9 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[calc(100vw-15px)] flex justify-center bg-gray-1 mt-12">
        <div className="flex justify-center w-full max-w-screen-xl py-18">
          <Button variant="white" text={data.contactButton} onClick={() => redirect("/kontakt")} />
        </div>
      </div>
    </div>
  );
};