import { Metadata } from "next";
import { activities, specialActivitiesCard } from "@/data/activities";
import { ActivityTemplate1 } from "@/components/activities/templates/template1";
import { ActivityTemplate2 } from "@/components/activities/templates/template2";
import { ActivityTemplate3 } from "@/components/activities/templates/template3";
import { ActivityTemplate4 } from "@/components/activities/templates/template4";

type Props = {
   params: Promise<{ activity: string }>   
};

// Generate metadata for the page
export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { activity } = await params;

    // Exclude /mockServiceWorker.js
    if (activity === 'mockServiceWorker.js') {
        return {
            title: 'Service Worker',
            description: 'Service Worker for the application'
        };
    };
    
    const activityData = activities.find((activityData) => activityData.slug === activity);

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
    return activities.map((activity) => ({
      slug: activity.slug,
    }));
};

export default async function Activity({ params }: Props) {    
    const { activity } = await params;
    const activityData = activities.find((activityData) => activityData.slug === activity);
    const anotherActivities = [...activities.filter((activityData) => activityData.slug !== activity && activityData.type === "regular"), specialActivitiesCard];
        
    return (
        <div>
            {
                activityData?.template === "template1" && 
                <ActivityTemplate1 
                    name={activityData.name}
                    description={activityData.description}
                    time={activityData.time}
                    place={activityData.place}
                    image={activityData.image}
                    contactTitle={activityData.contactTitle || ""}
                    contactIcon={activityData.contactIcon}
                    contactPerson={activityData.contactPerson}
                    contactLinkText={activityData.contactLinkText}
                    contactLink={activityData.contactLink}
                    anotherActivities={anotherActivities}
                />
            }
            {
                activityData?.template === "template2" && 
                <ActivityTemplate2 
                    name={activityData.name}
                    description={activityData.description}
                    time={activityData.time}
                    place={activityData.place}
                    image={activityData.image}
                    contactTitle={activityData.contactTitle}
                    contactIcon={activityData.contactIcon}
                    contactPerson={activityData.contactPerson}
                    contactLinkText={activityData.contactLinkText}
                    contactLink={activityData.contactLink}
                    anotherActivities={anotherActivities}
                />
            }
            {
                activityData?.template === "template3" && 
                <ActivityTemplate3
                    name={activityData.name}
                    description={activityData.description}
                    time={activityData.time}
                    place={activityData.place}
                    image={activityData.image}
                    registrationText={activityData.registrationText}
                    registrationLink={activityData.registrationLink}
                    anotherActivities={anotherActivities}
                />
            }
              {
                activityData?.template === "template4" && 
                <ActivityTemplate4
                    name={activityData.name}
                    description={activityData.description}
                    time={activityData.time}
                    place={activityData.place}
                    image={activityData.image}             
                    anotherActivities={anotherActivities}
                />
            }
        </div>
    )
}