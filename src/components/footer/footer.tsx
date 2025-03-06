import { links } from "@/data/footer";
import Image from "next/image";
import { SocialIcons } from "../landingPage/socialIcons";

export const Footer = () => {
    return (
        <div className="mt-12 flex flex-col items-center bg-gray-3 text-base w-full">
            <div className="w-full max-w-[1280px] h-full mx-auto">
                <div className="flex justify-between items-center w-full h-5/6 border-b-2 border-gray-5">
                    <div 
                        id="column1"
                        className="flex flex-col"
                    >
                            <Image src="/logo.jpeg" alt="Logo" width={120} height={80} className="mb-2" />
                            <div className="flex flex-col gap-y-1.5">
                                <p>Runway Bystrc</p>
                                <p>Smetanova 20</p>
                                <p>602 00 Brno</p>
                            </div>
                         
                    </div>
                    <div
                        id="column2" 
                        className="flex flex-col items-center gap-y-4"
                    >
                        <SocialIcons />
                        <p className="cursor-pointer text-blue-5 font-semibold bg-white py-4 px-6 rounded-xl">
                            Přihlásit se k odběru newsletteru
                        </p>
                    </div>
                    <div
                        id="column3"
                        className="flex flex-col items-end"
                    >
                        <p className="uppercase cursor-pointer text-base font-semibold mb-2">Odkazy</p>
                        <div className="flex flex-col items-end gap-y-1.5">
                            {
                                links.map((link, index) => {
                                    return (
                                        <p key={index} className="cursor-pointer">{link.name}</p>
                                    )
                                })
                            }  
                        </div>                     
                    </div>
                </div>
                <div className="flex items-center justify-center mt-auto h-1/6 py-2 text-sm text-gray-9">
                    <p>Copyright © 2025 Runway Bystrc</p>
                    <p className="text-gray-5 text-2xl mx-4">•</p>
                    <p>Powered by Runway Bystrc</p>
                    <p className="text-gray-5 text-2xl mx-4">•</p>
                    <p>Zpracování osobních údajů</p>
                </div>
            </div>
        </div>
    )
};