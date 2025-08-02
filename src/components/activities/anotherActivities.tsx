import { Activity } from "@/types"
import { ActivityCard } from "../landingPage/activityCard"
import { SectionTitle } from "../landingPage/common/sectionTitle"

export const AnotherActivities = ({activities, lang}: {activities: Activity[], lang: string}) => {
   
  return (
    <div className='max-w-[1280px] w-full flex flex-col justify-center gap-y-10 mt-12 px-4 md:px-0'>
            <SectionTitle title={lang === "cs" ? "Další aktivity" : "Another activities"} />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6'>
              {
                activities.map((activity: Activity, index: number) => {
                  return (
                    <ActivityCard
                        key={index} 
                        activity={activity}
                        lang={lang}
                    />
                  )
                })
              }
            </div>
        </div>
  )
}