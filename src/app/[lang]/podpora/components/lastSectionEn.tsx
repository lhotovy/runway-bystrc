"use client";

import { supportUsData } from "@/data/staticPages/supportUs";
import { Button } from "@/components/ui/button";

export const LastSectionEn = () => {
    const lang = "en";
    const data = supportUsData.translations[lang].lastSection;

    return (
        <section className="flex flex-col items-center max-w-[800px] mx-auto space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">{data.title}</h2>
                <p>Runway Bystrc partners with 4D Ministries. Donations are tax-deductible in the United States.
                Click the button to donate or you can also send a check to the address below.</p>
                <section className="flex flex-col gap-2 my-8">               
                    <p>4D Ministries,</p>
                    <p>PO BOX 120,</p>
                    <p>Monument, Colorado</p>
                    <p>80 132</p>
                </section>
                <Button text="Donate" variant="yellow" onClick={() => window.open("https://crm.4dministries.org/4dcrm/contribute/transact/?reset=1&id=57&fbclid=IwY2xjawMc00hleHRuA2FlbQIxMABicmlkETF3S3RTRnZ0ejQ1UlBIZlM0AR4jfJe5fpLFztrYnPADLP86guebFdSN6O-j_OAxEcNWvfIx0MhBrQPk_RM__g_aem_7gIz7XpLQIjIZVNAsL3pqw", "_blank")} />
            </div>          
        </section>
    );
};
