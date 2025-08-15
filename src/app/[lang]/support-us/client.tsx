import { TopSection } from './components/topSection';
import { ContentsSection } from "./components/contentsSection";
import { LastSection } from './components/lastSection';

export const SupportUsClient = ({ lang }: { lang: "cs" | "en" }) => {
  return (
    <div className="max-w-[1280px] w-full flex flex-col items-center mx-auto gap-y-24 my-10">
      <TopSection lang={lang} />
      <ContentsSection lang={lang} />
      <LastSection lang={lang} />
    </div>
  )
}