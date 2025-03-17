import { Metadata } from "next";
import { NewsletterClient } from "./client";

export const metadata: Metadata = {
    title: "Newsletter",
    description: "Subscribe to our newsletter to get the latest news and updates."
};

export default function NewsletterPage() {
  return ( 
      <NewsletterClient />
  );
}