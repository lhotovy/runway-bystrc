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
    <div className="flex flex-col gap-y-8 items-start py-20">
      <div className="flex flex-col gap-y-8">
        <h1 className="font-bold text-[40px]">{data.name}</h1>
        <p>{data.description}</p>
      </div>
      <form
        className="flex flex-wrap gap-x-6 gap-y-4 w-full lg:w-2/3"
        onSubmit={handleSubmit}
      >
        {elements}
        <div className="flex justify-center w-full lg:w-[600px]">
          <Button
            variant="blue"
            text={lang === "en" ? "Submit" : "Odeslat přihlášku"}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};