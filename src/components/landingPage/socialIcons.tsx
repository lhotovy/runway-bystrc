import { socialLinks } from "@/data/socialLinks";
import Link from "next/link";

export const SocialIcons = () => {
    return (
        <div className="flex items-center gap-x-6 my-12 text-gray-2 ">
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