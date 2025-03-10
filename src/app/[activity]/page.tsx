import { Metadata } from "next";
import { activities } from "@/data/activities/data";
import { ActivityTemplate1 } from "@/components/activities/template1";

type Props = {
    params: Promise<{ activity: string }>   
  }
   
export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { activity } = await params

    const activityData = activities.find((activityData) => activityData.slug === activity);

    if (!activityData) {
        throw new Error(`Activity with slug ${activity} not found`);
    }

    return {
        title: `${activityData.name} | Runway Bystrc`,
        description: activityData.description
    }
};

export default async function Activity({ params }: Props) {    
    const { activity } = await params;
    const activityData = activities.find((activityData) => activityData.slug === activity);
        
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
                    contactTitle={activityData.contactTitle}
                    contactPerson={activityData.contactPerson}
                    contactLinkText={activityData.contactLinkText}
                    contactLink={activityData.contactLink}
                />
            }
        </div>
    )
}