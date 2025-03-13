"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";

export const ONasClient = () => {  
  return (
    <div className="flex flex-col items-center mt-12">
      {/* big screen */}
      <div className="hidden lg:flex gap-x-8">
        <div className="flex flex-col gap-y-8 w-2/3">
          <h1 className="font-bold text-[40px] text-gray-9">O nás</h1>
          <p>Runway Bystrc je skupina lidí, kteří rádi dělají něco přínosného pro své okolí. Většina z nás žije nebo žila v Bystrci a proto nám tato velká a pěkná městská část není lhostejná. Jsme součástí křesťanské církve Bratrské jednoty baptistů, která v Brně působí již více než 120 let, a chtěli bychom být přínosem i v Bystrci v různých oblastech společenského i duchovního života. Důležité jsou pro nás naše vzájemné vztahy i vztah s Bohem, které chceme společně rozvíjet.</p>
          <p>A proč Runway? Runway je pro nás symbolem nového startu i očekávání něčeho nového a dobrodružného. Runway je pro nás obrazem svobody, kterou nám dal Bůh. Má ji každý člověk, ale záleží na něm, jak ji využije. Chceme být bezpečným místem pro starty do života v různých oblastech a chceme pomoci předejít nebezpečím, která číhají především na mladou generaci v podobě různých závislostí, gangů a s tím související kriminalitou. Přidáte se k nám na palubu?</p>
        </div>
        <div className="w-1/3">
          <Image src="/oNas.jpg" alt="O Runwayi" width={400} height={150} className="rounded-xl" />    
        </div>
      </div>
      <div className="hidden lg:flex flex-col items-center mt-24">
        <h2 className="text-3xl text-gray-9 font-bold mt-8 pb-4">Naše hodnoty</h2>
        <div className="flex gap-x-12 py-12">
          <div className="flex flex-col gap-y-4 w-1/3 items-center">
            <Image src="/planeDep.png" alt="Bezpečná vzhletová dráha do života" width={150} height={150} className="bg-gray-1 p-12 rounded-full" />
            <p className="font-bold text-lg text-gray-9">Bezpečná vzletová dráha do života</p>
            <p className="text-base text-gray-9 text-center">Chceme poskytovat bezpečné prostředí pro rozvoj a růst jednotlivců z různých generací.</p>
          </div>
          <div className="flex flex-col gap-y-4 w-1/3 items-center">
            <Image src="/heart.png" alt="Bezpečná vzhletová dráha do života" width={150} height={150} className="bg-gray-1 p-12 rounded-full" />
            <p className="font-bold text-lg text-gray-9">Bystrcká komunita</p>
            <p className="text-base text-gray-9 text-center">Spojujeme lidi z Bystrce a okolí a vytváříme příležitosti k budování vztahů.</p>
          </div>
          <div className="flex flex-col gap-y-4 w-1/3 items-center">
            <Image src="/cross.png" alt="Bezpečná vzhletová dráha do života" width={140} height={150} className="bg-gray-1 p-10 rounded-full" />
            <p className="font-bold text-lg text-gray-9">Víra v Ježíše Krista</p>
            <p className="text-base text-gray-9 text-center">Naše víra v Ježíše Krista nám dává pevný základ pro naše vlastní životy. Věříme, že Ježíš je tu i pro tebe, pokud o Něj máš zájem.</p>
          </div>
        </div>
      </div>
      {/* mobile screen */}
      <div className="flex lg:hidden gap-x-8 px-4">
        <div className="flex flex-col gap-y-8 w-full">
          <h1 className="font-bold text-[40px] text-gray-9">O nás</h1>
          <div className="w-full">
            <Image src="/oNas.jpg" alt="O Runwayi" width={400} height={150} className="rounded-xl" />    
          </div>
          <p className="w-">Runway Bystrc je skupina lidí, kteří rádi dělají něco přínosného pro své okolí. Většina z nás žije nebo žila v Bystrci a proto nám tato velká a pěkná městská část není lhostejná. Jsme součástí křesťanské církve Bratrské jednoty baptistů, která v Brně působí již více než 120 let, a chtěli bychom být přínosem i v Bystrci v různých oblastech společenského i duchovního života. Důležité jsou pro nás naše vzájemné vztahy i vztah s Bohem, které chceme společně rozvíjet.</p>
          <p>A proč Runway? Runway je pro nás symbolem nového startu i očekávání něčeho nového a dobrodružného. Runway je pro nás obrazem svobody, kterou nám dal Bůh. Má ji každý člověk, ale záleží na něm, jak ji využije. Chceme být bezpečným místem pro starty do života v různých oblastech a chceme pomoci předejít nebezpečím, která číhají především na mladou generaci v podobě různých závislostí, gangů a s tím související kriminalitou. Přidáte se k nám na palubu?</p>
        </div>
       
      </div>
      <div className="flex lg:hidden flex-col items-center mt-12">
        <h2 className="text-3xl text-gray-9 font-bold mt-8 pb-4">Naše hodnoty</h2>
        <div className="flex flex-col gap-y-24 py-12">
          <div className="flex flex-col gap-y-4  items-center">
            <Image src="/planeDep.png" alt="Bezpečná vzhletová dráha do života" width={150} height={150} className="bg-gray-1 p-12 rounded-full" />
            <p className="font-bold text-lg text-gray-9">Bezpečná vzletová dráha do života</p>
            <p className="text-base text-gray-9 text-center">Chceme poskytovat bezpečné prostředí pro rozvoj a růst jednotlivců z různých generací.</p>
          </div>
          <div className="flex flex-col gap-y-4 items-center">
            <Image src="/heart.png" alt="Bezpečná vzhletová dráha do života" width={150} height={150} className="bg-gray-1 p-12 rounded-full" />
            <p className="font-bold text-lg text-gray-9">Bystrcká komunita</p>
            <p className="text-base text-gray-9 text-center">Spojujeme lidi z Bystrce a okolí a vytváříme příležitosti k budování vztahů.</p>
          </div>
          <div className="flex flex-col gap-y-4 items-center">
            <Image src="/cross.png" alt="Bezpečná vzhletová dráha do života" width={140} height={150} className="bg-gray-1 p-10 rounded-full" />
            <p className="font-bold text-lg text-gray-9">Víra v Ježíše Krista</p>
            <p className="text-base text-gray-9 text-center">Naše víra v Ježíše Krista nám dává pevný základ pro naše vlastní životy. Věříme, že Ježíš je tu i pro tebe, pokud o Něj máš zájem.</p>
          </div>
        </div>
      </div>      
      <div className="w-[calc(100vw-15px)] flex justify-center bg-gray-1 mt-12">
         <div className="flex justify-center w-full max-w-screen-xl py-18">
           <Button variant="white" text="Kontaktuje nás" onClick={() => redirect("/kontakt")} />
         </div>
      </div>
      
    </div>
  );
}