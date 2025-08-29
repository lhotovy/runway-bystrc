import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

export const Coffeeshop = ({ data, lang }: { data: any, lang: string }) => {
  return (  
    <section className="py-16 bg-dark-blue w-full px-4 md:px-0">
      <div className="mx-auto px-4 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
          <div className="order-1">
            <h2 className="text-4xl font-bold text-white mb-6">
              {data?.coffeeshopTitle}
            </h2>
            <p className="text-base text-white mb-6 leading-relaxed">
              {data?.coffeeshopDescription}
            </p>
            <div className="mt-8 w-fit">
              <Button
                onClick={() => window.open("https://runwayhub.cz/", "_blank")}
                variant="yellow"
                className="py-3"
                text={data?.coffeeshopLearnMoreText} 
                iconDisplay={true}
                customIcon={<ChevronRightIcon className="w-4 h-4 ml-3" />}
              />
            </div>
          </div>
      
          {/* Right Column - Picture */}
          <div className="order-2">
            <div className="relative">
              <Image
                src="/coffeeshop.webp"
                alt="Our coffeeshop"
                className="aspect-square w-full lg:h-92 lg:w-fit object-cover rounded-none lg:rounded-lg"
                width={500}
                height={500}
              />             
            </div>
          </div>
        </div>             
      </div>
    </section>   
  )
}