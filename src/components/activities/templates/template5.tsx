import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { AnotherActivities } from "../anotherActivities";
import { LangOptions } from "@/types";

export type EventPoster = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

// Event information beside a full, uncropped portrait flyer.
export function ActivityTemplate5({
  name, description, details, time, place, poster, anotherActivities, lang,
}: {
  name: string;
  description: string[];
  details?: Record<string, string>;
  time: string[];
  place: string;
  poster?: EventPoster;
  anotherActivities: Parameters<typeof AnotherActivities>[0]["activities"];
  lang: LangOptions;
}) {
  const eventsHref = lang === "en" ? "/en/specialni-akce" : "/specialni-akce";
  const labels = lang === "en"
    ? { back: "All special events", category: "Special event", when: "When", where: "Where", flyer: "Event flyer", open: "Open full-size flyer (new tab)" }
    : { back: "Všechny speciální akce", category: "Speciální akce", when: "Kdy", where: "Kde", flyer: "Leták k akci", open: "Otevřít celý leták (nová karta)" };

  return (
    <div className="w-full text-gray-9">
      <section className="bg-blue-1 px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <Link href={eventsHref} className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-5 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">
            <ArrowLeft aria-hidden="true" className="size-4" />{labels.back}
          </Link>
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div className="min-w-0">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-5">{labels.category}</p>
              <h1 className="text-4xl font-bold leading-tight text-dark-blue md:text-5xl">{name}</h1>
              <dl className="my-8 grid gap-5 rounded-2xl bg-white p-6">
                <div className="flex gap-3">
                  <CalendarDays aria-hidden="true" className="mt-1 size-5 shrink-0 text-blue-5" />
                  <div><dt className="mb-1 text-sm text-gray-7">{labels.when}</dt><dd className="font-bold">{time.join(" · ")}</dd></div>
                </div>
                <div className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-blue-5" />
                  <div><dt className="mb-1 text-sm text-gray-7">{labels.where}</dt><dd className="font-bold">{place}</dd></div>
                </div>
              </dl>
              <div className="space-y-5 text-base leading-relaxed">
                {description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {details && Object.keys(details).length > 0 && (
                <dl className="mt-8 space-y-5 border-t border-blue-2 pt-6">
                  {Object.entries(details).map(([label, value]) => (
                    <div key={label}><dt className="mb-1 font-bold text-dark-blue">{label}</dt><dd className="leading-relaxed">{value}</dd></div>
                  ))}
                </dl>
              )}
            </div>
            {poster && (
              <figure className="mx-auto w-full max-w-[520px] min-w-0">
                <h2 className="sr-only">{labels.flyer}</h2>
                <a href={poster.src} target="_blank" rel="noopener noreferrer" aria-label={labels.open} className="block rounded-xl shadow-xl transition-shadow hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-5">
                  <Image src={poster.src} width={poster.width} height={poster.height} alt={poster.alt} sizes="(min-width: 1024px) 520px, (min-width: 560px) 520px, calc(100vw - 40px)" className="h-auto w-full rounded-xl" priority />
                </a>
                <figcaption className="mt-5 space-y-3 text-sm leading-relaxed text-gray-8">
                  <p>{poster.caption}</p>
                  <a href={poster.src} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-blue-5 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">{labels.open}<ArrowUpRight aria-hidden="true" className="size-4" /></a>
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </section>
      <div className="mb-16 flex justify-center"><AnotherActivities activities={anotherActivities} lang={lang} /></div>
    </div>
  );
}
