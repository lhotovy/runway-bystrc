import { Metadata } from "next";
import KontaktClient from "./client";
import { kontaktData } from "@/data/staticPages/kontakt";

export async function generateMetadata(
    { params }: { params: Promise<{ lang: keyof typeof kontaktData.translations }> }
): Promise<Metadata> {
    const { lang } = await params;

    const data = kontaktData.translations[lang];   

    return {
        title: `${data.title} | Runway Bystrc`,
        description: data.description
    };
};

export async function generateStaticParams() {
    return [{ lang: "cs" }, { lang: "en" }];
};

export default async function KontaktPage({params}: { params: Promise<{ lang: 'en' | 'cs' }> }) {
    const { lang } = await params;
    return (
        <KontaktClient lang={lang} />
    )
};