"use client";

import { sendRegistrationEmail } from "@/components/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { generateFormElements } from "@/lib/functions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const RegistrationPageClient = ({ data, lang }: { data: any, lang: string }) => {
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const activityLink = lang === "en" ? `/en/potvrzeni?activity=${data.slug}` : `/potvrzeni?activity=${data.slug}`;

  const handleSubmit = async (e: any) => {
    const payload = { ...formData, title: data.name, time: new Date() };
    await sendRegistrationEmail(e, payload);
    router.push(activityLink);
  };

  const elements = generateFormElements(data.elements, formData, setFormData);  

  return (
    <div className="flex flex-col gap-y-8 items-start">
      <div className="relative w-full bg-middle-blue text-white text-center py-8">
         <h1 className="font-bold text-[24px] md:text-[40px]">{data.name}</h1>
      </div>
      <div className="flex flex-col gap-y-8 max-w-[800px] w-full mx-auto px-4 md:px-0">       
        {Array.isArray(data.description) ? (
          <div className="flex flex-col gap-y-4">
            {data.description.map((desc: string, index: number) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        ) : (
          <p>{data.description}</p>
        )}
      </div>
      <form
        className="flex mx-auto flex-wrap gap-x-6 gap-y-4 w-full max-w-[800px] my-12 px-4 md:px-0"
        onSubmit={handleSubmit}
      >
        {elements}
        <div className="flex justify-center w-full">
          <Button
            variant="yellow"
            text={lang === "en" ? "Submit" : "Odeslat přihlášku"}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};