import { LinkButton } from "@/components/ui/linkButton"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

export const Sundays = ({ data, lang }: { data: any, lang: string }) => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Picture */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/placeholder.webp"
                alt="Sundays at our church"
                className="w-full h-96 object-cover rounded-lg"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {data?.sundaysTitle}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {data?.sundaysDescription}
            </p> 
            <div className="mt-8 w-42">
                <LinkButton
                href={lang === 'en' ? "/en/nedele" : "/nedele"}
                text={data?.sundaysLearnMoreText}
                icon={<ChevronRightIcon className="w-4 h-4" />}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}