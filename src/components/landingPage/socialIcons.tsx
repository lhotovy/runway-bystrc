import { SiFacebook, SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";

export const SocialIcons = () => {
    return (
        <div className="flex items-center gap-x-6 mt-8 text-gray-5">
            <SiInstagram className="w-8 h-8 cursor-pointer" />
            <SiFacebook className="w-8 h-8 cursor-pointer" />
            <SiYoutube className="w-8 h-8 cursor-pointer" />
        </div>
    );
  }