import { SiFacebook, SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";

export const SocialIcons = () => {
    return (
        <div className="flex items-center gap-x-6 mt-8 text-gray-5 ">
            <SiInstagram className="w-8 h-8 cursor-pointer hover:text-gray-7" />
            <SiFacebook className="w-8 h-8 cursor-pointer hover:text-gray-7" />
            <SiYoutube className="w-8 h-8 cursor-pointer hover:text-gray-7" />
        </div>
    );
  }