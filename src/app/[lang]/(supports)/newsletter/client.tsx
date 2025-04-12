"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { newsletterData } from "@/data/staticPages/newsletter";

export const NewsletterClient = ({ lang }: { lang: string }) => {
  const data = newsletterData.translations[lang as keyof typeof newsletterData.translations];

  return (
    <div className="flex flex-col items-center py-20">
      <h1 className="text-[32px] font-bold">{data.title}</h1>
      <form className="mt-8 w-full sm:w-2/3 lg:w-1/3 flex flex-col gap-y-8">
        {/* Name */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="name" className="font-bold text-base">
            {data.fields.name}
          </label>
          <input type="text" id="name" name="name" className="px-4 py-2 border border-gray-300 rounded-lg" />
        </div>
        {/* Email */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="email" className="font-bold text-base">
            {data.fields.email}
          </label>
          <input type="text" id="email" name="email" className="px-4 py-2 border border-gray-300 rounded-lg" />
        </div>
        {/* Phone */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="phone" className="font-bold text-base">
            {data.fields.phone}
          </label>
          <input type="text" id="phone" name="phone" className="px-4 py-2 border border-gray-300 rounded-lg" />
        </div>
        {/* Address */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="address" className="font-bold text-base">
            {data.fields.address}
          </label>
          <input type="text" id="address" name="address" className="px-4 py-2 border border-gray-300 rounded-lg" />
        </div>
        {/* Activities */}
        <p className="font-bold text-base">{data.activitiesTitle}</p>
        <div className="flex flex-col items-start gap-y-2">
          {data.activities.map((activity, index) => (
            <div key={index} className="flex gap-x-2 items-center">
              <Checkbox />
              <label className="text-gray-8 text-base">{activity}</label>
            </div>
          ))}
        </div>
        {/* Consent */}
        <div className="flex gap-x-2 items-center">
          <Checkbox />
          <label className="text-gray-8 text-base">
            {data.consent.text}{" "}
            <Link href={data.consent.gdprLink ?? "/"} target="blank" className="text-blue-5 font-bold">
              {data.consent.linkText}
            </Link>
          </label>
        </div>
        {/* Unsubscribe Info */}
        <p className="font-sm text-gray-8">{data.unsubscribeInfo}</p>
        {/* Submit Button */}
        <div className="flex justify-center">
          <Button variant="blue" type="submit" text={data.submitButton} className="text-center w-2/3 md:w-1/2" />
        </div>
      </form>
    </div>
  );
};