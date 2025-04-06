import { links } from "@/data/footer";
import Image from "next/image";
import { SocialIcons } from "../landingPage/socialIcons";

export const Footer = () => {
    return (
        <div className="flex flex-col items-center bg-gray-3 text-base w-full h-fit">
            {/* lg view */}
            <div className="hidden lg:flex items-center w-full max-w-[1280px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full h-5/6">
                    <div 
                        id="column1"
                        className="flex flex-col"
                    >
                        <Image src="/logo.jpeg" alt="Logo" width={120} height={80} className="hidden lg:flex mb-2" />
                        <div className="flex flex-col gap-y-1.5 text-gray-8">
                            <p>Runway Bystrc</p>
                            <p>Smetanova 20</p>
                            <p>602 00 Brno</p>
                        </div>
                    </div>
                    <div
                        id="column2" 
                        className="flex flex-col items-center gap-y-6 mb-8"
                    >
                        <SocialIcons />
                        <p className="cursor-pointer text-blue-5 font-semibold bg-white hover:bg-gray-1 py-4 px-6 rounded-xl">
                            Přihlásit se k odběru newsletteru
                        </p>
                        <Image src="/logo.jpeg" alt="Logo" width={120} height={80} className="flex lg:hidden mb-2" />
                    </div>
                    <div
                        id="column3"
                        className="flex flex-col items-end text-gray-8"
                    >
                        <p className="uppercase text-base font-semibold mb-2">Odkazy</p>
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
            </div>     
        
            {/* small screen view */}
            <div className="flex lg:hidden items-center w-full max-w-[1280px] mx-auto px-4 pb-4">
                <div className="flex flex-col items-center w-full h-fit">
                    <div
                        id="column1" 
                        className="flex flex-col items-center gap-y-6 mb-8"
                    >
                        <SocialIcons />
                        <p className="cursor-pointer text-blue-5 font-semibold bg-white hover:bg-gray-1 py-4 px-6 rounded-xl">
                            Přihlásit se k odběru newsletteru
                        </p>
                        <Image src="/logo.jpeg" alt="Logo" width={120} height={80} className="flex mb-2" />
                    </div>
                    <div 
                        id="column2"
                        className="flex justify-between w-full"
                    >
                        <div className="flex flex-col gap-y-1.5 text-gray-8">
                            <p className="uppercase text-base font-semibold mb-2">Adresa</p>                      
                            <p>Runway Bystrc</p>
                            <p>Smetanova 20</p>
                            <p>602 00 Brno</p>
                        </div>
                        <div
                            className="flex flex-col items-end text-gray-8"
                        >
                            <p className="uppercase text-base font-semibold mb-2">Odkazy</p>
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
                </div>
            </div>
            <hr className="w-full border-gray-5" />
            <div className="w-full max-w-[1280px] mx-auto py-4">
                <div className="flex flex-col lg:flex-row gap-y-2 items-center justify-center mt-auto h-1/6 py-2 text-sm text-gray-9">
                <p>Copyright © 2025 Runway Bystrc</p>
                    <p className="text-gray-5 text-2xl mx-4 hidden lg:flex">•</p>
                    <p>Powered by Runway Bystrc</p>
                    <p className="text-gray-5 text-2xl mx-4 hidden lg:flex">•</p>
                    <p>Zpracování osobních údajů</p>
                </div>
            </div>
        </div>
    )
};