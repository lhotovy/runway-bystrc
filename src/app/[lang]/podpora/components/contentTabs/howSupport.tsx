"use client";

import { supportUsData } from "@/data/staticPages/supportUs";
import { LangOptions } from "@/types";

export const HowSupportTab = ({ lang }: { lang: LangOptions }) => {
  const data = supportUsData.translations[lang].howSupport;

  return (
    <div className="max-w-[800px] space-y-6">
      <ul className="space-y-4 leading-relaxed">
        <li>
          <strong>{data.prayer}</strong> – {data.prayerDescription}
        </li>
        <li>
          <strong>{data.financialSupport}</strong> – {data.financialDescription}
        </li>
      </ul>
    </div>
  );
};
