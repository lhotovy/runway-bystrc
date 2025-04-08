import HomePageDisplay from "./homePageDispay"

export const metadata = {
    title: 'Runway Bystrc | Otevřená a moderní církev v Bystrci',
    description: 'Runway Bystrc | Otevřená a moderní církev v Bystrci',
};

export default async function Home({params}: {params: Promise<{ lang: string }>}) {
  const { lang } = await params;
  return (  
    <HomePageDisplay lang={lang} />
  )
}
