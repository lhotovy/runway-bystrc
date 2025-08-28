import { supportUsData } from "@/data/staticPages/supportUs";

interface VizeTabProps {
  lang: "cs" | "en";
}

export const VisionTab = ({ lang }: VizeTabProps) => {
  const data = supportUsData.translations[lang].vision;

  return (
    <div className="max-w-[800px] space-y-6">
      <div className="space-y-4">
        <p className="leading-relaxed">
          {data.establishment}
        </p>
        <p className="leading-relaxed">
          {data.mission}
        </p>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-semibold mb-3 text-gray-800">{data.personalStory}</h3>
        <blockquote className="italic text-gray-700 leading-relaxed">
          &ldquo;{data.quote}&rdquo;
        </blockquote>
        <p className="text-right text-gray-600 mt-2">- {data.author} -</p>
      </div>
    </div>
  );
};
