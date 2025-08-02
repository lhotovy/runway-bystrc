"use client";

import { beliefsData } from "@/data/staticPages/beliefsData";

export default function BeliefsClient({ lang }: { lang: 'en' | 'cs' }) {
    const content = beliefsData.translations[lang];

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-0">
        <div className="relative w-full bg-middle-blue text-white text-center py-8">
            <h1 className="font-bold text-[24px] md:text-[40px]">{content?.title}</h1>
        </div>
        <div className="max-w-[1280px] w-full py-12">
            {
                content?.text?.map((item, index) => (
                <p key={index} className="mb-6">{item}</p>
                ))
            }
        </div>
    </div>
  );
}