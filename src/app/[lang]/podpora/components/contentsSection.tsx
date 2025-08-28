"use client";

import React, { useState } from 'react'
import { VisionTab } from './contentTabs/vision'
import { WhySupportTab } from './contentTabs/whySupport'
import { HowSupportTab } from './contentTabs/howSupport'

export const ContentsSection = ({ lang }: { lang: "cs" | "en" }) => {
    const [activeTab, setActiveTab] = useState("vision");

    const contentTabs = [
        { name: "vision", text: lang === "en" ? "Vision" : "Vize" },
        { name: "whySupport", text: lang === "en" ? "Why Support?" : "Proč podpořit?" },
        { name: "howSupport", text: lang === "en" ? "How to Contribute?" : "Jak přispět?" }
      ];

  return (
    <section className="flex flex-col items-center">
        <section className="flex gap-8 mb-8">
          {contentTabs.map((tab) => (
            <button 
                className={`${activeTab === tab.name ? " text-black font-semibold" : "text-black/50"} cursor-pointer`}
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
            >{tab.text}</button>
          ))}
        </section>
        <section className="flex max-w-[800px] px-4">
          {activeTab === "vision" && <VisionTab lang={lang} />}
          {activeTab === "whySupport" && <WhySupportTab lang={lang} />}
          {activeTab === "howSupport" && <HowSupportTab lang={lang} />}
        </section>
    </section>
  )
}