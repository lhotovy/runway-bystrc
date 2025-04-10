import { Metadata } from "next";
import { NewsletterClient } from "./client";
import { newsletterData } from "@/data/staticPages/newsletter";

export async function generateMetadata(
    { params }: { params: Promise<{ lang: keyof typeof newsletterData.translations }> }
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

export default async function NewsletterPage({params}: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return ( 
      <NewsletterClient lang={lang} />
  );
}