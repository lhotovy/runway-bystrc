import { Metadata } from "next";
import { ONasClient } from "./client";
import { oNasData } from "@/data/staticPages/oNas";

export async function generateMetadata(
    { params }: { params: Promise<{ lang: keyof typeof oNasData.translations }> }
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

export default async function ONas({params}: { params: Promise<{ lang: 'cs' | 'en' }> }) {
  const { lang } = await params;  
  return (
    <ONasClient lang={lang} />
  );
}