"use client";

import { sendKontaktEmail } from "@/components/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { Building2, Mail, Phone, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { kontaktData } from "@/data/staticPages/kontakt";
import placeholderImage from "@/public/placeholder.webp";
import { Hero } from "@/components/hero";

export default function KontaktClient({ lang }: { lang: 'en' | 'cs' }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const data = kontaktData.translations[lang];

  const handleSubmit = async (e: any) => {
    try {
      await sendKontaktEmail(e, formData);
      setSuccess(true);
    } catch (error) {
      console.error("Failed to send email", error);
    }
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col items-center">
      <Hero name={data.title} image="hero.webp" />
      <h1 className="text-[32px] font-bold self-start mt-18 mb-12">{data.subtitle}</h1>
      <div className="flex flex-col md:flex-row mb-12 gap-y-8">     
        <div className="max-w-[1280px] w-full flex flex-col md:flex-row gap-y-36 items-center">
          {data.locations.map((location, index) => (
            <div key={index} className="flex flex-col gap-y-8 items-center w-full md:w-1/2">
              <Image 
                src={location.image || placeholderImage} 
                alt={location.name} 
                width={400} 
                height={400} 
                className="rounded-4xl self-start" 
              />
              <div className="flex items-center md:items-start flex-col gap-y-4">
                <p className="text-xl font-bold">{location.name}</p>
                <p className="text-base w-full md:w-4/5">{location.description}</p>
                <div className="flex items-center">
                  <Image src="/icons/place.png" alt="place icon" width={30} height={30} className="h-10 w-10 mr-4" />
                  <div className="flex flex-col">
                    <p className="w-full md:w-3/4">
                      {location.address}{" "}
                      <Link href={location.mapLink || "/"} target="blank">
                        <span className="text-blue-5 font-bold">{location.address ?? "/"}</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>        
          ))}
        </div>
      </div>
       <div className="flex flex-col md:flex-row bg-blue-2 mt-12 w-[calc(100vw-15px)] -mx-[calc((100vw-100%)/2)] md:p-12">
        <div className="max-w-[1000px] w-full flex flex-col md:flex-row mx-auto items-center">
          {/* Contacts Section */}
          <div className="bg-middle-blue md:w-1/3 w-full h-full flex flex-col items-center md:items-start gap-y-12 p-12 md:rounded-l-3xl text-blue-1">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex mb-4 gap-x-2 items-center">
                <Building2 className="h-8 text-yellow font-bold" />
                <p className="text-lg font-bold">{data.contactDetails.officialAddress.title}</p>
              </div>
              <div className="flex flex-col gap-y-2">
                {data.contactDetails.officialAddress.lines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex mb-4 gap-x-2 items-center">
                <Phone className="h-8 text-yellow font-bold" />
                <p className="text-lg font-bold">{data.contactDetails.phone.title}</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p>{data.contactDetails.phone.name}</p>
                <p className="text-yellow font-semibold">{data.contactDetails.phone.number}</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex mb-4 gap-x-2 items-center">
                <Mail className="h-8 text-yellow font-bold" />
                <p className="text-lg font-bold">{data.contactDetails.email.title}</p>
              </div>
              <Link href={`mailto:${data.contactDetails.email.address ?? "/"}`} target="blank">
                <p className="text-yellow font-semibold">{data.contactDetails.email.address}</p>
              </Link>
            </div>
          </div>
          {/* Form Section */}
          <div className="md:w-2/3 w-full flex flex-col bg-white p-12 md:rounded-r-3xl">
            <h2 className="text-[32px] font-bold text-center">{data.form.title}</h2>
            {success && (
              <div className="flex items-center text-green-700 mt-4">
                <CheckCircle className="h-6 w-6 mr-2" />
                <p>{data.form.successMessage}</p>
              </div>
            )}
            {/* form */}
            <form className="flex flex-col gap-y-10 mt-12" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-y-1">
                <label htmlFor="name" className="text-base font-bold">
                  {data.form.fields.name}
                </label>
                <input
                  id="name"
                  type="text"
                  className="border border-gray-3 rounded-lg h-10 px-2"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <label htmlFor="email" className="text-base font-bold">
                  {data.form.fields.email}
                </label>
                <input
                  id="email"
                  type="text"
                  className="border border-gray-3 rounded-lg h-10 px-2"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <label htmlFor="message" className="text-base font-bold">
                  {data.form.fields.message}
                </label>
                <textarea
                  id="message"
                  className="border border-gray-3 rounded-lg h-24 p-2"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button variant="yellow" text={data.form.submitButton} className="px-6 py-4 self-center" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}