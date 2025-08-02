import { Metadata } from "next";
import { gdprData } from "@/data/staticPages/gdpr";

export async function generateMetadata(
    { params }: { params: Promise<{ lang: keyof typeof gdprData.translations }> }
): Promise<Metadata> {
    const { lang } = await params;

    const data = gdprData.translations[lang];   

    return {
        title: data.title,
        description: data.description
    };
};

export async function generateStaticParams() {
    return [{ lang: "cs" }, { lang: "en" }];
};

interface PageProps {
  params: Promise<{
    lang: keyof typeof gdprData.translations;
  }>;
}

export default async function GDPR({ params }: PageProps) {
  const { lang } = await params;
  const data = gdprData.translations[lang];

  return (
    <div className="flex flex-col gap-y-8 items-start">
      <div className="relative w-full bg-middle-blue text-white text-center py-8">
        <h1 className="font-bold text-[24px] md:text-[40px]">{data.sections.processing.title}</h1>
      </div>
      <div className="text-base w-full lg:w-2/3 flex flex-col mx-auto my-12 gap-y-8">
        <p>{data.sections.processing.content[0]}</p>
        <p>{data.sections.processing.content[1]}</p>
        <ul className="list-disc pl-12 flex flex-col gap-y-2">
          {data.sections.processing.list.map((item: any, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {data.sections.processing.additionalContent.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className="flex flex-col gap-y-4">
          <p className="font-bold mt-4">{data.sections.rights.title}</p>
          {data.sections.rights.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <ul className="list-disc pl-12 flex flex-col gap-y-2">
            {data.sections.rights.contacts.map((contact, index) => (
              <li key={index}>{contact}</li>
            ))}
          </ul>
          {data.sections.rights.additionalContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}