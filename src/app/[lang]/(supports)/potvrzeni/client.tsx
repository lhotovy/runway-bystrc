"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { potvrzeniData } from "@/data/staticPages/potvrzeni";

export const ConfirmClient = ({ lang }: { lang: string }) => {
  const searchParams = useSearchParams();
  const registrationActivity = searchParams.get("activity");
  const router = useRouter();
  const data = potvrzeniData.translations[lang as keyof typeof potvrzeniData.translations];
  const activityLink = lang === "en" ? `/en/${registrationActivity}` : `/${registrationActivity}`;
  const registrationLink = lang === "en" ? `/en/prihlaska/${registrationActivity}` : `/prihlaska/${registrationActivity}`;

  return (
    <div className="flex flex-col items-center justify-center gap-y-16 min-h-[calc(100vh-306px)] text-gray-9">
      <h1 className="text-[32px] font-bold text-gray-9">{data.title}</h1>
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