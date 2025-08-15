import { supportUsData } from "@/data/staticPages/supportUs";

interface ProcPodporitTabProps {
  lang: "cs" | "en";
}

export const WhySupportTab = ({ lang }: ProcPodporitTabProps) => {
  const data = supportUsData.translations[lang].whySupport;

  return (
    <div className="max-w-[800px] space-y-6">
      <div className="space-y-4">
        <p className="leading-relaxed">
          {data.explanation}
        </p>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-semibold text-lg text-gray-800">{data.title}</h3>
        <ul className="space-y-3">
          {data.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-dark-blue rounded-full mt-2 flex-shrink-0"></div>
              <p className="leading-relaxed">
                {benefit}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
