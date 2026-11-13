import Image from "next/image";
import { AnotherActivities } from "../anotherActivities";
import { LangOptions } from "@/types";
import { HeroSummary } from "@/components/hero/summary";

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
  const labels = lang === "en"
    ? { flyer: "Event flyer", open: "Open full-size flyer (new tab)" }
    : { flyer: "Leták k akci", open: "Otevřít celý leták (nová karta)" };

  return (
    <div className="w-full text-gray-9">
      <section className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div className="min-w-0">
              <div className="text-center">
                <HeroSummary name={name} time={time} place={place} titleClassName="text-gray-9" />
              </div>
              <div className="my-12 flex flex-col items-start gap-y-8 text-base">
                {description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {details && Object.keys(details).length > 0 && (
                  <ul className="list-none list-inside space-y-2 w-full">
                    {Object.entries(details).map(([label, value]) => (
                      <li key={label}><strong>{label}:</strong> {value}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {poster && (
              <figure className="mx-auto w-full max-w-[520px] min-w-0">
                <h2 className="sr-only">{labels.flyer}</h2>
                <a href={poster.src} target="_blank" rel="noopener noreferrer" aria-label={labels.open} className="block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-5">
                  <Image src={poster.src} width={poster.width} height={poster.height} alt={poster.alt} sizes="(min-width: 1024px) 520px, (min-width: 560px) 520px, calc(100vw - 40px)" className="h-auto w-full rounded-lg" priority />
                </a>
                <figcaption className="mt-5 space-y-3 text-sm leading-relaxed text-gray-8">
                  <p>{poster.caption}</p>
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
