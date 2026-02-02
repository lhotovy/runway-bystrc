import { LinkButton } from "@/components/ui/linkButton"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { LangOptions } from "@/types";

export const Sundays = ({ data, lang }: { data: any, lang: LangOptions }) => {
  return (
    <section className="max-w-[1280px] px-4 md:px-0 py-2 md:py-16 bg-white">
      <div className="mx-auto px-4">
        <div className="max-w-[900px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-auto">
          {/* Left Column - Picture */}
          <div className="relative w-full order-2 lg:order-1">
            <Image
              src="/sundaysfeb.webp"
              alt="Sundays at our church"
              className="w-full max-w-full object-cover rounded-lg"
              width={1000}
              height={1000}
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {data?.sundaysTitle}
            </h2>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              {data?.sundaysDescription}
            </p> 
            <div className="mt-8 w-fit">
              <LinkButton
                href={lang === 'en' ? "/en/nedele" : "/nedele"}
                text={data?.sundaysLearnMoreText || (lang === 'en' ? "Learn more" : "Zjisti víc")}
                icon={<ChevronRightIcon className="w-4 h-4" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}