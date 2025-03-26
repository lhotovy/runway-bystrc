import { socialLinks } from "@/data/socialLinks";
import Link from "next/link";

export const SocialIcons = () => {
    return (
        <div className="flex items-center gap-x-6 mt-8 text-gray-5 ">
            {
                socialLinks.map((social, index) => (
                    <Link href={social.href} key={index} target="blank">
                        {social.icon}
                    </Link>
                ))
            }              
        </div>
    );
  }