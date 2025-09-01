import { TopSection } from './components/topSection';
import { ContentsSection } from "./components/contentsSection";
import { LastSection } from './components/lastSection';
import { LastSectionEn } from './components/lastSectionEn';
import { LangOptions } from '@/types';

export const SupportUsClient = ({ lang }: { lang: LangOptions }) => {
  return (
    <div className="max-w-[1280px] w-full flex flex-col items-center mx-auto gap-y-24 my-10">
      <TopSection lang={lang} />
      <ContentsSection lang={lang} />
      {lang === "cs" ? 
      <LastSection /> : 
      <LastSectionEn />
      }
    </div>
  )
}