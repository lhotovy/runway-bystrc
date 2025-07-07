import React from "react";

export const SundaysDescription = {
    cs: function SundaysDescriptionCz() {
        return (
            <div className="flex flex-col gap-y-8">
                <p>Neděle na Runwayi probíhají každou <b>1. a 3. neděli v měsíci</b> v Centru Runway Bystrc (hned vedle Teyschlovy 20).
                    Od 16:15 je otevřená kavárnička, kde si můžete dát kávu, čaj nebo něco dobrého k zakousnutí. Je to příležitost si
                    v klidu popovídat nebo jen tak přijít a rozhlédnout se.</p>

                <p><b>Samotná bohoslužba začíná v 17:00</b> a trvá zhruba hodinu. Během ní probíhá také samostatný program
                    pro děti – formou her, příběhů a tvoření se děti seznamují s křesťanskými hodnotami přiměřeně svému věku.</p>

                <h2 className="text-gray-9 font-bold text-lg text-left mt-12">Co očekávat?</h2>
                <p>Naše bohoslužby jsou <b>otevřené veřejnosti.</b> Přicházejí k nám jak lidé, kteří jsou součástí církve, tak i ti,
                    kteří víru teprve objevují, hledají nebo se jen chtějí dozvědět víc. Vítán je <b>každý – bez ohledu na zkušenosti
                        s vírou, věk nebo životní příběh.</b> Oblečení může být klidně úplně neformální – přijď tak, jak je ti to pohodlné.
                </p>

                <p>Program bohoslužby obvykle zahrnuje <b>několik písní,</b> které zpíváme společně s kapelou (texty jsou promítané,
                    můžeš se přidat nebo jen poslouchat), <b>krátké biblické poselství,</b> které se snaží přinést inspiraci do
                    běžného života, a <b>modlitbu,</b> což je chvíle ticha nebo slov obrácených k Bohu. Zazní i <b>oznámení o dalších
                        akcích,</b> které v Runwayi připravujeme.</p>

                <p>Pokud je pro tebe něco nové nebo neznámé, je to v pořádku – <b>všechno se snažíme dělat srozumitelně a bez
                    zbytečného církevního jazyka.</b> Není potřeba nic vědět dopředu, ani se na nic připravovat. Stačí prostě přijít.</p>

                <p>Po bohoslužbě zůstáváme v kavárničce – můžeš se zapojit do rozhovoru, zeptat se na cokoli nebo jen v klidu odejít.
                    Je to na tobě.</p>
            </div>
        );
    },
    en: function SundaysDescriptionEn() {
        return (
            <div className="flex flex-col gap-y-8">
                <p>
                    Sundays at Runway take place every <b>1st and 3rd Sunday of the month</b> at the Runway Bystrc Center (right next to Teyschlova 20).
                    From 16:15, the café is open, where you can enjoy coffee, tea, or a snack. It&apos;s an opportunity to have a relaxed chat or just come and look around.
                </p>

                <p>
                    <b>The main service starts at 17:00</b> and lasts about an hour. During this time, there is also a separate program for children – through games, stories, 
                    and crafts, children learn about Christian values in an age-appropriate way.
                </p>

                <h2 className="text-gray-9 font-bold text-lg text-left mt-12">What to expect?</h2>

                <p>
                    Our services are <b>open to the public.</b> We welcome both people who are part of the church and those who are just discovering faith, searching, 
                    or simply want to learn more. <b>Everyone is welcome – regardless of faith experience, age, or life story.</b> Clothing can be completely 
                    informal – come as you feel comfortable.
                </p>

                <p>
                    The service program usually includes <b>several songs</b> sung together with the band (lyrics are projected, you can join in or just listen), 
                    a <b>short biblical message</b> that aims to bring inspiration into everyday life, and a <b>prayer,</b> which is a moment of silence or words directed to God. 
                    There are also <b>announcements about other events</b> being prepared at Runway.
                </p>

                <p>
                    If something is new or unfamiliar to you, that&apos;s okay – <b>we try to do everything in a clear and understandable way, without unnecessary church jargon.</b> 
                    You don&apos;t need to know anything in advance or prepare for anything. Just come as you are.
                </p>

                <p>
                    After the service, we stay in the café – you can join the conversation, ask anything, or just leave quietly. It&apos;s up to you.
                </p>
            </div>
        );
    }
};