import { Metadata } from "next";
import { ONasClient } from "./client";
import { oNasData } from "@/data/staticPages/oNas";
import { LangOptions } from "@/types";

export async function generateMetadata(
    { params }: { params: Promise<{ lang: LangOptions }> }
): Promise<Metadata> {
    const { lang } = await params;

    const data = oNasData.translations[lang];   

    return {
        title: `${data.title} | Runway Bystrc`,
        description: data.description
    };
};

export async function generateStaticParams() {
    return [{ lang: "cs" }, { lang: "en" }];
};

export default async function ONas({params}: { params: Promise<{ lang: LangOptions }> }) {
  const { lang } = await params;  
  return (
    <ONasClient lang={lang} />
  );
}