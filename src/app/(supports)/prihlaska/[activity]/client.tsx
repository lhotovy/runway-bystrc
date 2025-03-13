"use client";

import { sendEmail } from "@/components/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { generateFormElements } from "@/lib/functions";
import { useState } from "react";

export const RegistrationPageClient = ({ data }: any) => {
    const [formData, setFormData] = useState([]);

    console.log(formData);    
 
    return (
        <div className="flex flex-col gap-y-8 items-start">
            <div className="flex flex-col gap-y-8">
                <h1 className="font-bold text-[40px]">{data?.name}</h1>
                <p>{data?.description}</p>
            </div>
            <form className="flex gap-x-6 gap-y-4 flex-wrap w-1/3">
                {generateFormElements(data.elements, formData, setFormData)}
            </form>
            <div className="flex justify-center w-full">
                <Button variant="blue" text="Odeslat přihlášku" onClick={async() => await sendEmail(formData)} />
            </div>
        </div>
    );
};