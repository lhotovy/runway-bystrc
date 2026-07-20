import Image from "next/image"
import placeholderImage from "@/public/placeholder.webp"

export const HeroImage = ({
    image,
    name,
    imagePosition,
    children
}: {
    image: string,
    name: string,
    imagePosition?: string,
    children: React.ReactNode
}) => {
  return (
    <div className="relative w-full h-full">
        <Image 
            src={`/${image}` || placeholderImage} 
            alt={name} 
            fill
            className="object-cover"
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
            priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            {children}
        </div>
    </div>
  )
}

