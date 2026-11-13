import { HeroImage } from "./image"
import { HeroSummary } from "./summary"

export const Hero = ({
  name,
  time,
  place,
  image,
  imagePosition
}: {
  name: string,
  time?: string[] | null,
  place?: string,
  image: string,
  imagePosition?: string
}) => {
  return (  
      <div className="flex relative h-[60vh] min-h-[500px] w-full">
        <HeroImage image={image} name={name} imagePosition={imagePosition}>
          <HeroSummary name={name} time={time} place={place} />
        </HeroImage>
    </div>
  )
}