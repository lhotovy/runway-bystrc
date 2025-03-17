"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export const NewsletterClient = () => {
    return (
        <div className="flex flex-col items-center py-20">
            <h1 className="text-[32px] font-bold">Přihlaš se k odběru novinek a zůstaň s námi ve spojení!</h1>            
            <form className="mt-8 w-full sm:w-2/3 lg:w-1/3 flex flex-col gap-y-8">
                {/* Jméno a příjmení */}
                <div className="flex flex-col gap-y-1">
                    <label 
                        htmlFor="name" 
                        className="font-bold text-base"
                    >
                        Jméno a příjmení *
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="px-4 py-2 border border-gray-300 rounded-lg" 
                    />
                </div>          
           
                {/* Email */}
                <div className="flex flex-col gap-y-1">
                    <label 
                        htmlFor="email" 
                        className="font-bold text-base"
                    >
                        Email *
                    </label>
                    <input 
                        type="text" 
                        id="email"
                        name="email"
                        className="px-4 py-2 border border-gray-300 rounded-lg" 
                    />
                </div>
                {/* Telefonní číslo */}
                <div className="flex flex-col gap-y-1">
                    <label 
                        htmlFor="phone" 
                        className="font-bold text-base"
                    >
                        Telefonní číslo
                    </label>
                    <input 
                        type="text" 
                        id="phone"
                        name="phone"
                        className="px-4 py-2 border border-gray-300 rounded-lg" 
                    />
                </div>
                {/* Adresa */}
                <div className="flex flex-col gap-y-1">
                    <label 
                        htmlFor="address" 
                        className="font-bold text-base"
                    >
                        Adresa
                    </label>
                    <input 
                        type="text" 
                        id="address"
                        name="address"
                        className="px-4 py-2 border border-gray-300 rounded-lg" 
                    />
                </div>
                <p className="font-bold text-base">O kterých aktivitách chci dostávat informace</p>
                <div className="flex flex-col items-start gap-y-2">
                    <div className="flex gap-x-2 items-center">
                        <Checkbox />
                        <label className="text-gray-8 text-base">Vše</label>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <Checkbox />
                        <label className="text-gray-8 text-base">Bohoslužby</label>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <Checkbox />
                        <label className="text-gray-8 text-base">Sport Challenge</label>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <Checkbox />
                        <label className="text-gray-8 text-base">Runway Youth</label>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <Checkbox />
                        <label className="text-gray-8 text-base">Klub pro maminky s dětmi</label>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <Checkbox />
                        <label className="text-gray-8 text-base">Manželské večery</label>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <Checkbox />
                        <label className="text-gray-8 text-base">English Evenings</label>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <Checkbox />
                        <label className="text-gray-8 text-base">Tábory</label>
                    </div>
                </div>
                <div className="flex gap-x-2 items-center">
                    <Checkbox />
                    <label className="text-gray-8 text-base">
                        Souhlasím se 
                        <Link 
                            href="/gdpr" 
                            target="blank" 
                            className="text-blue-5 font-bold ml-1"
                        >
                            zpracováním osobních údajů
                        </Link>
                    </label>
                </div>
                <p className="font-sm text-gray-8">
                    Z odběru novinek se můžete kdykoli odhlásit zasláním zprávy na adresu 
                    <span className="font-bold mx-1">
                        info@runway-bystrc.cz
                    </span> 
                        nebo kliknutím na odkaz v zápatí každého z našich newsletterů.
                </p>
                <div className="flex justify-center">
                    <Button 
                        variant="blue" 
                        type="submit" 
                        text="Přihlásit se k odběru" 
                        className="text-center w-2/3 md:w-1/2" 
                    />
                </div>
            </form>
        </div>
    )
};