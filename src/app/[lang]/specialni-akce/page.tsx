import { SpecialEventsClient } from "./client";

export const metadata = {
  title: 'Speciální akce | Runway Bystrc',
  description: 'Runway Bystrc | Otevřená a moderní církev v Bystrci',
};

export default async function SpecialEventsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <SpecialEventsClient lang={lang} />
  )
}