import { footerData } from "@/data/staticPages/footer";
import Image from "next/image";
import { SocialIcons } from "../landingPage/socialIcons";
import Link from "next/link";

export const Footer = ({ lang }: { lang: string | null }) => {
    const data = footerData.translations[lang as keyof typeof footerData.translations];

    return (
        <div className="flex flex-col items-center bg-gray-3 text-base w-full h-fit">
            {/* lg view */}
            <div className="hidden lg:flex items-center w-full max-w-[1280px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full h-5/6">
                    <div 
                        id="column1"
                        className="flex flex-col"
                    >
                        <Image src="/logo.webp" alt="Logo" width={200} height={100} className="hidden lg:flex mb-2 w-32" />
                        <div className="flex flex-col gap-y-1.5 text-gray-8">
                            <p>{data.address.name}</p>
                            <p>{data.address.street}</p>
                            <p>{data.address.city}</p>
                        </div>
                    </div>
                    <div
                        id="column2" 
                        className="flex flex-col items-center gap-y-6 mb-8"
                    >
                        <SocialIcons />
                        <Link 
                            href={lang === "cs" ? "/newsletter" : "/en/newsletter"}
                            className="cursor-pointer text-blue-5 font-semibold bg-white hover:bg-gray-1 py-4 px-6 rounded-xl"
                        >
                            {data.newsletter}
                        </Link>
                        <Image src="/logo.webp" alt="Logo" width={400} height={200} className="flex lg:hidden mb-2" />
                    </div>
                    <div
                        id="column3"
                        className="flex flex-col items-end text-gray-8"
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
                            className="cursor-pointer text-blue-5 font-semibold bg-white hover:bg-gray-1 py-4 px-6 rounded-xl"
                        >
                            {data.newsletter}
                        </Link>
                        <Image src="/logo.webp" alt="Logo" width={400} height={200} className="flex mb-2 w-1/2" />
                    </div>
                    <div 
                        id="column2"
                        className="flex flex-col gap-y-8 item-center w-full"
                    >
                        <div className="flex flex-col items-center gap-y-1.5 text-gray-8">
                            <p className="uppercase text-base font-semibold mb-2">{data.address.title}</p>                      
                            <p>{data.address.name}</p>
                            <p>{data.address.street}</p>
                            <p>{data.address.city}</p>
                        </div>
                        <div
                            className="flex flex-col items-center text-gray-8"
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
                <div className="flex flex-col lg:flex-row gap-y-2 items-center justify-center mt-auto h-1/6 py-2 text-sm text-gray-9">
                <p>{data.copyright}</p>
                    <p className="text-gray-5 text-2xl mx-4 hidden lg:flex">•</p>
                    <p>{data.poweredBy}</p>
                    <p className="text-gray-5 text-2xl mx-4 hidden lg:flex">•</p>
                    <p>{data.privacyPolicy}</p>
                </div>
            </div>
        </div>
    )
};