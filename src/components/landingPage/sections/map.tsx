import Image from "next/image"

export const Map = () => {
  return (
    <div className="relative w-[calc(100vw-15px)] h-[50vh]">
        <Image src="/placeholder.webp" alt="Map" fill  />
    </div>
  )
}