import { Metadata } from "next";
import { activities, specialActivitiesCard } from "@/data/activities";
import { ActivityTemplate1 } from "@/components/activities/templates/template1";
import { ActivityTemplate2 } from "@/components/activities/templates/template2";
import { ActivityTemplate3 } from "@/components/activities/templates/template3";
import { ActivityTemplate4 } from "@/components/activities/templates/template4";
import { getActivityBySlugAndLang, getAllSlugs, getPageDataBySlug } from "@/lib/slug-mapping";

type Props = {
    params: Promise<{ lang: string, activity: string }>   
 };

 // Generate metadata for the page
 export async function generateMetadata(
     { params }: Props
 ): Promise<Metadata> {
     const { lang, activity } = await params;  
 
     // Exclude /mockServiceWorker.js
     if (['mockServiceWorker.js'].includes(activity)) {
         return {
                title: 'Runway Bystrc',
                description: 'Runway Bystrc - Service Worker for the application',
         }
     };
     
     const currentActivity = getActivityBySlugAndLang(activity, lang);
     const activityData = currentActivity?.translations[lang as keyof typeof currentActivity['translations']];
 
     if (!activityData) {
         throw new Error(`Activity with slug ${activity} not found`);
     };
 
     return {
         title: `${activityData.name} | Runway Bystrc`,
         description: activityData.description[0]
     };
 };
 
 // Generate static paths for the page
 export async function generateStaticParams() {
    const allSlugs = getAllSlugs()
    
    // Create params for each slug
    return allSlugs.map(slug => {
      const mapping = getPageDataBySlug(slug)
      if (!mapping) return null
      
      return {
        lang: mapping.lang,
        dynamicSegment: slug
      }
    }).filter(Boolean)
  }

export default async function ActivityPage({ params }: {params: Promise<{ lang: string, activity: string }>}) {   
    const { lang, activity: activityParam } = await params;
    const currentActivity = getActivityBySlugAndLang(activityParam, lang);
    const activityData = currentActivity?.translations[lang as keyof typeof currentActivity['translations']];
    const anotherActivities = [...activities
        .filter((activity) => activity.translations[lang as keyof typeof activities[number]['translations']].slug !== activityParam && activity.type === "regular"), specialActivitiesCard]
        .map((activity) => { return activity.translations[lang as keyof typeof activity.translations] });    
        
    return (
        <div>
            {
            currentActivity?.template === "template1" && 
            <ActivityTemplate1 
                name={activityData?.name || ""}
                description={activityData?.description || []}
                time={activityData?.time || []}
                place={activityData?.place || ""}                    
                image={activityData?.image || ""}                    
                contactTitle={activityData?.contactTitle || ""}
                contactIcon={activityData?.contactIcon || null}
                contactPerson={activityData?.contactPerson || ""}
                contactLinkText={activityData?.contactLinkText || ""}
                contactLink={activityData?.contactLink || "/"}
                anotherActivities={anotherActivities}
                lang={lang}
            />
            }
            {
            currentActivity?.template === "template2" && 
            <ActivityTemplate2 
                name={activityData?.name || ""}
                time={activityData?.time || []}
                place={activityData?.place || ""}
                image={activityData?.image || ""}
                contactTitle={activityData?.contactTitle || ""}
                contactIcon={activityData?.contactIcon || null}
                contactPerson={activityData?.contactPerson || ""}
                contactLinkText={activityData?.contactLinkText || ""}
                contactLink={activityData?.contactLink || "/"}
                anotherActivities={anotherActivities}
                lang={lang}
            />
            }
            {
            currentActivity?.template === "template3" && 
            <ActivityTemplate3
                name={activityData?.name || ""}
                description={activityData?.description || []}
                time={activityData?.time || []}
                place={activityData?.place || ""}
                image={activityData?.image || ""}
                registrationText={activityData?.registrationText || ""}
                registrationLink={activityData?.registrationLink || "/"}
                anotherActivities={anotherActivities}
                lang={lang}
            />
            }
              {
            currentActivity?.template === "template4" && 
            <ActivityTemplate4
                name={activityData?.name || ""}
                description={activityData?.description || []}
                time={activityData?.time || []}
                place={activityData?.place || ""}
                image={activityData?.image || ""}             
                anotherActivities={anotherActivities}
                lang={lang}
            />
            }
        </div>
    )
}