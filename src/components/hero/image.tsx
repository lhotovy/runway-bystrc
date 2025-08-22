import Image from "next/image"
import placeholderImage from "@/public/placeholder.webp"

export const HeroImage = ({
    image,
    name,
    children
}: {
    image: string,
    name: string,
    children: React.ReactNode
}) => {
  return (
    <div className="relative w-full h-full">
        <Image 
            src={`/${image}` || placeholderImage} 
            alt={name} 
            fill
            className="object-cover"
            priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            {children}
        </div>
    </div>
  )
}

