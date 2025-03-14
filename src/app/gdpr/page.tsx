import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Zpracování osobních údajů | Runway Bystrc",
    description: "Informace o zpracování osobních údajů na stránkách Runway Bystrc",
};

export default function GDPR() {
  return (
    <div className="fle flex-col text-gray-9 py-16">
        <h1 className="font-bold text-[40px]">Informace o zpracování osobních údajů</h1>
        <div className="text-base w-full lg:w-2/3 flex flex-col gap-y-8">
            <p className="mt-4">Runway Bystrc jako součást Sboru Bratrské jednoty baptistů v Brně, se sídlem Smetanova 20, 602 00 Brno, IČ: 00487597 (dále také jen „správce“), tímto prohlašuje, že ve smyslu nařízení Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a volném pohybu těchto údajů a o zrušení směrnice 95/46/ES (toto nařízení bude dále označováno jen jako „GDPR“) zpracovává osobní údaje subjektů údajů pro svou činnost, a je tedy správcem osobních údajů (tj. osobou, která určuje způsoby a účely zpracování osobních údajů).</p>
            <div className="flex flex-col gap-y-4">
                <p className="font-bold mt-4">Zpracování osobních údajů</p>
                <p>Správce zpracovává osobní údaje zejména v následujících oblastech:</p>
                <ul className="list-disc pl-12 flex flex-col gap-y-2">
                    <li>agenda související se správou a chodem církve,</li>
                    <li>agenda související se službami pro členy či přátele církve,</li>  
                    <li>správa majetku a souvisejících smluvních vztahů,</li> 
                    <li>pořádání školení, kurzů a dalších akcí v rámci organizace a pro veřejnost.</li>
                </ul>
                <p>Pro zpracování osobních údajů svědčí správci tituly plnění zákonné povinnosti, plnění smlouvy, oprávněného zájmu správce či třetí osoby nebo souhlasu se zpracováním osobních údajů uděleného subjektem údajů. Při zpracování osobních údajů se správce řídí zákonem stanovenými lhůtami a lhůtami stanovenými po pečlivém zvážení ve vnitřním předpise tak, aby nedocházelo k porušování práv subjektů údajů.</p>
                <p>V rámci zpracování osobních údajů je v některých případech nutné předat osobní údaje jiné osobě. Toto předávání je minimalizováno, v některých případech je to nezbytné pro splnění povinností vyplývajících ze zákona, smlouvy nebo v rámci činnosti církve. Ve všech případech, kdy správce předává osobní údaje jiné osobě, dbá o zajištění maximální ochrany práv subjektů údajů.</p>
            </div>
            <div className="flex flex-col gap-y-4">
                <p className="font-bold mt-4">Práva subjektu údajů</p>
                <p>Aby byla zajištěna možnost subjektů údajů rozhodovat v co možná nejširší míře o zpracování jejich osobních údajů, stanovuje GDPR řadu práv, která lze vůči jakémukoli správci údajů uplatnit. V případě, že se rozhodnete uplatnit některé ze svých práv, obraťte se na správce. Můžete k tomu využít Vám zaslaný kontakt na osobu zastupující správce v souvislosti s poskytnutím vašich osobních údajů.</p>
                <p>Obrátit se můžete rovněž na níže uvedené kontakty:</p>
                <p>Písemně na adrese: <span className="font-bold">Sbor Bratrské jednoty baptistů v Brně, Smetanova 20, 602 00 Brno</span></p>
                <p>Telefonicky na čísle: <span className="font-bold">773 628 747 nebo prostřednictvím e-mailu na adrese: info@runway-bystrc.cz</span></p>
                <p>Vaším základním právem je kdykoli požadovat sdělení, zda správce zpracovává Vaše osobní údaje. Pokud je zpracováváme, máte právo požadovat jednu kopii všech osobních údajů, které o Vás zpracováváme. V případě, že zjistíte, že zpracovávané údaje nejsou přesné, máte právo požadovat opravu osobních údajů. Pokud dojdete k názoru, že Vaše osobní údaje nezpracováváme v souladu s právem, můžete uplatnit právo na výmaz osobních údajů. Pokud nebudete s čímkoli spokojeni nebo budete mít za to, že jsme Vaši žádost nevyřídili tak, jak jsme měli, máte právo obrátit se se stížností na Úřad pro ochranu osobních údajů.</p>
                <p>Dovolujeme si zdůraznit, že ať jste ke správci v jakémkoli poměru, nehrozí Vám na základě uplatnění těchto práv žádné riziko. Je naším zájmem zpracovávat osobní údaje zákonně a řádně a nepoškozovat Vaše práva. V případě jakýchkoli pochybností nás neváhejte kontaktovat.</p>
            </div>       
        </div>
    </div>
  )
}