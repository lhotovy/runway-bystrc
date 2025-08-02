import { footerData } from "@/data/staticPages/footer";
import Image from "next/image";
import { SocialIcons } from "../landingPage/socialIcons";
import Link from "next/link";
import { Link2 } from "lucide-react";

export const Footer = ({ lang }: { lang: string | null }) => {
    const data = footerData.translations[lang as keyof typeof footerData.translations];

    return (
        <div className="flex flex-col items-center bg-middle-blue text-base w-full h-fit">
            {/* lg view */}
            <div className="hidden lg:flex items-center w-full max-w-[1280px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start w-full h-5/6">
                    <div 
                        id="column1"
                        className="flex flex-col mt-8"
                    >
                        <Image
                            src="/logo_white_cropped.png"
                            alt="Runway Logo"
                            className="hidden lg:flex w-32 mb-6"
                            height={179}
                            width={500}
                            priority
                            quality={100}
                            sizes="(max-width: 768px) 120px, 200px"
                        />
                        <div className="flex flex-col gap-y-1.5 text-gray-2">
                            <p>{data.address.name}</p>
                            <p>{data.address.street}</p>
                            <p>{data.address.city}</p>
                        </div>
                    </div>
                    <div
                        id="column2" 
                        className="flex flex-col items-center gap-y-12 mt-4"
                    >
                        <SocialIcons />
                        <Link 
                            href={lang === "cs" ? "/newsletter" : "/en/newsletter"}
                            className="cursor-pointer text-middle-blue font-bold bg-yellow py-4 px-6 rounded-xl"
                        >
                            {data.newsletter}
                        </Link>
                        <Image src="/logo_no_bg.png" alt="Logo" width={400} height={200} className="flex lg:hidden mb-2" />
                    </div>
                    <div
                        id="column3"
                        className="flex flex-col items-end text-gray-2 my-16"
                    >
                        <p className="uppercase text-base font-semibold mb-2">{data.linksTitle}</p>
                        <div className="flex flex-col items-end gap-y-1.5">
                            {
                                data.links.map((link, index) => {
                                    return (
                                        <Link key={index} href={link.href || "/"}>{link.name}</Link>                                       
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
                        <Link 
                            href={lang === "cs" ? "/newsletter" : "/en/newsletter"}
                            className="cursor-pointer text-middle-blue font-semibold bg-yellow py-4 px-6 rounded-xl"
                        >
                            {data.newsletter}
                        </Link>
                        <Image
                            src="/logo_white_cropped.png"
                            alt="Runway Logo"
                            className="flex w-3/5"
                            height={179}
                            width={400}
                            priority
                            quality={100}
                            sizes="(max-width: 768px) 120px, 200px"
                        />
                    </div>
                    <div 
                        id="column2"
                        className="flex flex-col gap-y-8 item-center w-full"
                    >
                        <div className="flex flex-col items-center gap-y-1.5 text-gray-2">
                            <p className="uppercase text-base font-semibold mb-2">{data.address.title}</p>                      
                            <p>{data.address.name}</p>
                            <p>{data.address.street}</p>
                            <p>{data.address.city}</p>
                        </div>
                        <div
                            className="flex flex-col items-center text-gray-2"
                        >
                            <p className="uppercase text-base font-semibold mb-2">{data.linksTitle}</p>
                            <div className="flex flex-col items-center gap-y-1.5">
                                {
                                    data.links.map((link, index) => {
                                        return (
                                            <Link key={index} href={link.href || "/"}>{link.name}</Link>  
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
                <div className="flex flex-col lg:flex-row gap-y-2 items-center justify-center mt-auto h-1/6 py-2 text-sm text-gray-2">
                <p>{data.copyright}</p>
                    <p className="text-gray-5 text-2xl mx-4 hidden lg:flex">•</p>
                    <p>{data.poweredBy}</p>
                    <p className="text-gray-5 text-2xl mx-4 hidden lg:flex">•</p>
                    <Link href={lang === "cs" ? "/gdpr" : "/en/gdpr"}>{data.privacyPolicy}</Link>
                </div>
            </div>
        </div>
    )
};