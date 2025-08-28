import { Metadata } from "next";
import { SupportUsClient } from "./client";
import { supportUsData } from "@/data/staticPages/supportUs";

export async function generateMetadata(
    { params }: { params: Promise<{ lang: keyof typeof supportUsData.translations }> }
): Promise<Metadata> {
    const { lang } = await params;

    const data = supportUsData.translations[lang];   

    return {
        title: `${data.title} | Runway Bystrc`,
        description: data.description
    };
};

export async function generateStaticParams() {
    return [{ lang: "cs" }, { lang: "en" }];
};

export default async function SupportUs({params}: { params: Promise<{ lang: 'en' | 'cs' }> }) {
    const { lang } = await params;
    return (
        <SupportUsClient lang={lang} />
    )
};