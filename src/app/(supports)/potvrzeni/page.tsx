import { Metadata } from "next";
import { ConfirmClient } from "./client";

export const metadata: Metadata = {
    title: "Potvrzení přihlášky | Runway Bystrc",
    description: "Potvrzení o přijetí přihlášky",
};

export default function Confirm() {
    return (
       <ConfirmClient />
    )
}