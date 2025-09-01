import { registrations } from "@/data/registrations";
import { RegistrationPageClient } from "./client";
import { Metadata } from "next";
import { LangOptions } from "@/types";

// Generate metadata for the page
export async function generateMetadata(
    {
        params
    }: {
        params: Promise<{lang: string, activity: string}>
    }
): Promise<Metadata> {
    const { lang, activity } = await params;
    const registration = registrations.find((reg) => activity === reg.slug);
    if (!registration) {
        throw new Error(`Event registration form with slug ${activity} not found`);
    }
    const registrationData = registration.translations[lang as keyof typeof registration.translations];
    if (!registrationData) {
        throw new Error(`Event registration form with slug ${activity} not found`);
    }

    if (!registrationData) {
        throw new Error(`Event registration form with slug ${activity} not found`);
    };

    return {
        title: `${registrationData.name} | Runway Bystrc`,
        description: registrationData.description[0]
    };
};

export async function generateStaticParams() {
    return [{ lang: "cs" }, { lang: "en" }];
};
export default async function Registration(
    {
    params
}: {
    params: Promise<{lang: LangOptions, activity: string}>
}) {
    const { lang, activity } = await params;
    const registration = registrations.find((reg) => activity === reg.slug);
    if (!registration) {
        throw new Error(`Event registration form with slug ${activity} not found`);
    }
    const registrationData = registration.translations[lang as keyof typeof registration.translations];
        
    return (
        <RegistrationPageClient data={registrationData} lang={lang} />
    )
}