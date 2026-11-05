"use client";

import { sendRegistrationEmail } from "@/components/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { generateFormElements } from "@/lib/functions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LangOptions } from "@/types";

export const RegistrationPageClient = ({ data, lang }: { data: any, lang: LangOptions }) => {
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const router = useRouter();
  const activityLink = lang === "en" ? `/en/potvrzeni?activity=${data.slug}` : `/potvrzeni?activity=${data.slug}`;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const values = formData as Record<string, string>;
    const consentLines = [
      values.personalDataConsent ? `Souhlas se zpracováním osobních údajů: ${values.personalDataConsent}` : "",
    ].filter(Boolean);
    // Keep family details in the existing email template's note field as well.
    const familyLines = data.slug === "hory" ? [
      `Počet dospělých osob: ${values.peopleCount}`,
      `Počet dětí a jejich věk: ${values.age}`,
    ] : [];
    const note = [values.note, ...familyLines, ...consentLines].filter(Boolean).join("\n");
    const payload = { ...values, title: data.name, time: new Date(), ...(note ? { note } : {}) };
    try {
      await sendRegistrationEmail(e, payload);
      router.push(activityLink);
    } catch {
      setStatus("error");
    }
  };

  const elements = generateFormElements(data.elements, formData, setFormData);  

  return (
    <div className="flex flex-col gap-y-8 items-start">
      <div className="relative w-full bg-middle-blue text-white text-center py-8 px-3 lg:px-0">
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
        {data.accommodationLink && (
          <a className="text-middle-blue font-bold underline" href={data.accommodationLink} target="_blank" rel="noopener noreferrer">
            {lang === "en" ? "Accommodation" : "Ubytování"}: {data.accommodationName}
          </a>
        )}
      </div>
      <form
        className="flex mx-auto flex-wrap gap-x-6 gap-y-4 w-full max-w-[800px] my-12 px-4 md:px-0"
        onSubmit={handleSubmit}
      >
        <fieldset disabled={status === "sending"} className="flex flex-wrap gap-x-6 gap-y-4 w-full">
          {elements}
        </fieldset>
        {status === "error" && (
          <p role="alert" className="w-full text-red-700">
            {lang === "en" ? "Your registration could not be sent. Please try again. If the problem persists, contact info@runway-bystrc.cz." : "Přihlášku se nepodařilo odeslat. Zkuste to prosím znovu. Pokud problém přetrvává, napište na info@runway-bystrc.cz."}
          </p>
        )}
        <div className="flex justify-center w-full">
          <Button
            variant="yellow"
            text={status === "sending" ? (lang === "en" ? "Sending…" : "Odesílání…") : (lang === "en" ? "Submit" : "Odeslat přihlášku")}
            disabled={status === "sending"}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};
