import { specialniAkce } from "@/data/staticPages/specialniAkce";
import { SpecialEventsClient } from "./client";
import { Metadata } from "next";
import { LangOptions } from "@/types";

export async function generateMetadata(
    { params }: { params: Promise<{ lang: LangOptions }> }
): Promise<Metadata> {
    const { lang } = await params;

    const data = specialniAkce.translations[lang];   

    return {
        title: `${data.title} | Runway Bystrc`,
        description: data.otherActivities
    };
};

export async function generateStaticParams() {
    return [{ lang: "cs" }, { lang: "en" }];
};

export default async function SpecialEventsPage({ params }: { params: Promise<{ lang: LangOptions }> }) {
  const { lang } = await params;
  return (
    <SpecialEventsClient lang={lang} />
  )
}