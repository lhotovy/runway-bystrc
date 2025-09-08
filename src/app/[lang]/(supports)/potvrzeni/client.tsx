"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { potvrzeniData } from "@/data/staticPages/potvrzeni";
import { LangOptions } from "@/types";

export const ConfirmClient = ({ lang }: { lang: LangOptions }) => {
  const searchParams = useSearchParams();
  const registrationActivity = searchParams.get("activity");
  const router = useRouter();
  const data = potvrzeniData.translations[lang as keyof typeof potvrzeniData.translations];
  const activityLink = lang === "en" ? `/en/${registrationActivity}` : `/${registrationActivity}`;
  const registrationLink = lang === "en" ? `/en/prihlaska/${registrationActivity}` : `/prihlaska/${registrationActivity}`;

  return (
    <div className="flex flex-col items-center justify-center gap-y-16 min-h-[calc(100vh-306px)] text-gray-9 px-4 lg:px-0">
      <h1 className="text-[32px] font-bold text-gray-9 text-center md:text-left">{data.title}</h1>
      <p>{data.message}</p>
      <div className="flex flex-col sm:flex-row items-center gap-y-8 sm:gap-x-8">
        <Button
          variant="yellow"
          text={data.backButton}
          onClick={() => router.push(activityLink)}
        />
        <Link
          href={registrationLink}
          className="text-middle-blue font-bold"
        >
          {data.registerAnother}
        </Link>
      </div>
    </div>
  );
};