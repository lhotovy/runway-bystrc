"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export const ConfirmClient = () => {
    const searchParams = useSearchParams();
    const registrationActivity = searchParams.get("activity");
    const router = useRouter();    

    return (
        <div className="flex flex-col items-center justify-center gap-y-16 min-h-[calc(100vh-306px)] text-gray-9">
            <h1 className="text-[32px] font-bold text-gray-9">Děkujeme za vyplnění</h1>
            <p>Vaše přihláška byla úspěšně odeslána! Více informací dostanete v nejbližší době v e-mailu.</p>
            <div className="flex flex-col sm:flex-row items-center gap-y-8 sm:gap-x-8">
                <Button 
                    variant="blue" 
                    text="Zpět na popis akce"
                    onClick={() => router.push(`/${registrationActivity}`)}
                />
                <Link 
                    href={`/prihlaska/${registrationActivity}`} 
                    className="text-blue-5 font-bold"
                >
                    Přihlásit dalšího účastníka
                </Link>
            </div>
        </div>
    )
}