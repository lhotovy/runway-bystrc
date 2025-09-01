import { Metadata } from "next";
import { NewsletterClient } from "./client";
import { newsletterData } from "@/data/staticPages/newsletter";
import { LangOptions } from "@/types";

export async function generateMetadata(
    { params }: { params: Promise<{ lang: LangOptions }> }
): Promise<Metadata> {
    const { lang } = await params;

    const data = newsletterData.translations[lang];   

    return {
        title: "Newsletter | Runway Bystrc",
        description: data.pageDescription
    };
};

export async function generateStaticParams() {
    return [{ lang: "cs" }, { lang: "en" }];
};

export default async function NewsletterPage({params}: { params: Promise<{ lang: LangOptions }> }) {
  const { lang } = await params;
  return ( 
      <NewsletterClient lang={lang} />
  );
}