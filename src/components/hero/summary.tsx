import { MapPinIcon, ClockIcon } from "@heroicons/react/24/solid";

export function HeroSummary({
  name, time, place, titleClassName = "text-white",
}: {
  name: string;
  time?: string[] | null;
  place?: string;
  titleClassName?: string;
}) {
  return (
    <div className="max-w-4xl flex flex-col gap-y-10">
      <h1 className={`text-5xl font-bold ${titleClassName}`}>{name}</h1>
      <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-y-4 lg:gap-x-10 text-black font-semibold uppercase text-sm">
        {time?.map((value) => (
          <p key={value} className="flex items-center gap-x-2 bg-yellow py-1.5 px-3 rounded-xl">
            <ClockIcon aria-hidden="true" className="w-6 h-6 shrink-0 text-black" />{value}
          </p>
        ))}
        {place && (
          <p className="flex items-center gap-x-2 bg-yellow py-1.5 px-3 rounded-xl">
            <MapPinIcon aria-hidden="true" className="w-6 h-6 shrink-0 text-black" />{place}
          </p>
        )}
      </div>
    </div>
  );
}
