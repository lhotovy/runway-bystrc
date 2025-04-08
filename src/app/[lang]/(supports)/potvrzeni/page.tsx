import { Metadata } from "next";
import { ConfirmClient } from "./client";
import { Suspense } from "react";
import { potvrzeniData } from "@/data/staticPages/potvrzeni";

export async function generateMetadata(
    { params }: { params: Promise<{ lang: keyof typeof potvrzeniData.translations }> }
): Promise<Metadata> {
    const { lang } = await params;

    const data = potvrzeniData.translations[lang];   

    return {
        title: data.pageTitle,
        description: data.pageDescription
    };
};

export async function generateStaticParams() {
    return [{ lang: "cs" }, { lang: "en" }];
};

export default async function Confirm({params}: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ConfirmClient lang={lang} />
        </Suspense>
    )
}