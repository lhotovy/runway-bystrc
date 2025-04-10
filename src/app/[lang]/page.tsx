import { Metadata } from "next";
import HomePageDisplay from "./homePageDispay";

export async function generateMetadata(
    { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
    const { lang } = await params;

    const textData = {
        cs: 'Runway Bystrc | Otevřená a moderní církev v Bystrci',
        en: 'Runway Bystrc | Open and modern church in Bystrc',
    };

    return {
      title: textData[lang as keyof typeof textData], 
      description: textData[lang as keyof typeof textData]
    };
};

export async function generateStaticParams() {
    return [{ lang: "cs" }, { lang: "en" }];
};

export default async function Home({params}: {params: Promise<{ lang: string }>}) {
  const { lang } = await params;
  return (  
    <HomePageDisplay lang={lang} />
  )
}
