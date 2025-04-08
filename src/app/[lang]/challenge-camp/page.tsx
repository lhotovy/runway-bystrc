import { ChallengeCampClient } from "./client";
import { challengeCampData } from "@/data/staticPages/challengeCamp";
import { Metadata } from "next";

export async function generateMetadata(
    { params }: { params: Promise<{ lang: keyof typeof challengeCampData.translations }> }
): Promise<Metadata> {
    const { lang } = await params;

    const data = challengeCampData.translations[lang];   

    return {
        title: `${data.name} | Runway Bystrc`,
        description: data.description[0]
    };
};

export async function generateStaticParams() {
    return [{ lang: "cs" }, { lang: "en" }];
};

export default async function ChallengeCamp({
  params,
}: {
  params: Promise<{ lang: string }>
}) {  
  const { lang } = await params;
  return (
    <ChallengeCampClient lang={lang} />
  );
}