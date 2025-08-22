import { LinkButton } from "@/components/ui/linkButton"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

export const Coffeeshop = ({ data, lang }: { data: any, lang: string }) => {
  return (  
    <section className="py-16 bg-dark-blue w-full px-4 md:px-0">
      <div className="mx-auto lg:px-[28vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
          <div className="order-1">
            <h2 className="text-4xl font-bold text-white mb-6">
              {data?.coffeeshopTitle}
            </h2>
            <p className="text-lg text-white mb-6 leading-relaxed">
              {data?.coffeeshopDescription}
            </p>
            <div className="mt-8 w-fit">
            <LinkButton
                href={lang === 'en' ? "/en/kavarna" : "/kavarna"}
                text={data?.coffeeshopLearnMoreText}
                icon={<ChevronRightIcon className="w-4 h-4" />}
                />
            </div>
          </div>
      
          {/* Right Column - Picture */}
          <div className="order-2">
            <div className="relative">
              <Image
                src="/coffeeshop.webp"
                alt="Our coffeeshop"
                className="w-full h-64 lg:h-96 object-cover rounded-none lg:rounded-lg"
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