import { registrations } from "@/data/registrations";
import { RegistrationPageClient } from "./client";
import { Metadata } from "next";

// Generate metadata for the page
export async function generateMetadata(
    {
        params
    }: {
        params: Promise<{activity: string}>
    }
): Promise<Metadata> {
    const { activity } = await params;
    const registrationData = registrations.find((reg) => activity === reg.slug);

    if (!registrationData) {
        throw new Error(`Event registration form with slug ${activity} not found`);
    };

    return {
        title: `${registrationData.name} | Runway Bystrc`,
        description: registrationData.description[0]
    };
};

export default async function Registration(
    {
    params
}: {
    params: Promise<{activity: string}>
}) {
    const { activity } = await params;
    const registrationData = registrations.find((reg) => activity === reg.slug);
        
  return (
    <RegistrationPageClient data={registrationData} />
  )
}