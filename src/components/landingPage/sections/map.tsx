import Image from "next/image"

export const Map = () => {
  return (
    <div className="relative w-[calc(100vw-15px)] h-[70vh]">
        <Image src="/map.webp" alt="Pozice míst Runwaye v Bystrci" fill className="object-cover" />
    </div>
  )
}