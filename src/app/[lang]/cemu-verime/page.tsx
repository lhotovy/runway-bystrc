import { Metadata } from "next";
import BeliefsClient from "./client";
import { beliefsData } from "@/data/staticPages/beliefsData";

export async function generateMetadata(
    { params }: { params: Promise<{ lang: keyof typeof beliefsData.translations }> }
): Promise<Metadata> {
    const { lang } = await params;

    const data = beliefsData.translations[lang];   

    return {
        title: `${data.title} | Runway Bystrc`,
        description: data.description
    };
};

export async function generateStaticParams() {
    return [{ lang: "cs" }, { lang: "en" }];
};

export default async function BeliefsPage({params}: { params: Promise<{ lang: 'en' | 'cs' }> }) {
    const { lang } = await params;
    return (
        <BeliefsClient lang={lang} />
    )
};