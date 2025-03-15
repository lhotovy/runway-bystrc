import { Metadata } from "next";
import { ConfirmClient } from "./client";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Potvrzení přihlášky | Runway Bystrc",
    description: "Potvrzení o přijetí přihlášky",
};

export default function Confirm() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ConfirmClient />
        </Suspense>
    )
}