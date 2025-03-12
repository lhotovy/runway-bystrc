import { Activity } from "@/types"
import { ActivityCard } from "../landingPage/activityCard"
import { SectionTitle } from "../landingPage/common/sectionTitle"

export const AnotherActivities = ({activities}: {activities: Activity[]}) => {
  return (
    <div className='w-full flex flex-col justify-center gap-y-10 mt-12'>
            <SectionTitle title="Co děláme" />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6'>
              {
                activities.map((activity: Activity, index: number) => {
                  return (
                    <ActivityCard
                        key={index} 
                        activity={activity}                     
                    />
                  )
                })
              }
            </div>
        </div>
  )
}