"use client";

import { sendKontaktEmail } from "@/components/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { Building2, Mail, Phone, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { kontaktData } from "@/data/staticPages/kontakt";
import placeholderImage from "@/public/placeholder.webp";

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
      {/* big screen */}
      <div className="hidden md:flex flex-col mt-24 mb-12 gap-y-12">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        {data.locations.map((location, index) => (
          <div key={index} className="flex gap-x-8 items-center">
            <Image 
              src={location.image || placeholderImage} 
              alt={location.name} 
              width={170} 
              height={170} 
              className="rounded-4xl" 
            />
            <div className="flex flex-col gap-y-4">
              <p className="text-xl font-bold">{location.name}</p>
              <p className="text-base">{location.description}</p>
              <div className="flex items-center">
                <Image src="/icons/place.png" alt="place icon" width={30} height={30} className="h-10 w-10 mr-4" />
                <div className="flex flex-col">
                  <p>
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
      <div className="w-[calc(100vw-15px)] hidden md:flex justify-center bg-gray-1 mt-12">
        <div className="flex justify-between w-5/6 lg:w-2/3 xl:w-1/2 max-w-[1280px] py-18">
          <div className="flex flex-col items-center">
            <div className="flex mb-4 gap-x-2 items-center">
              <Building2 className="h-8 text-gray-3 font-bold" />
              <p className="text-lg font-bold">{data.contactDetails.officialAddress.title}</p>
            </div>
            <div className="flex flex-col gap-y-2">
              {data.contactDetails.officialAddress.lines.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex mb-4 gap-x-2 items-center">
              <Phone className="h-8 text-gray-3 font-bold" />
              <p className="text-lg font-bold">{data.contactDetails.phone.title}</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p>{data.contactDetails.phone.name}</p>
              <p className="text-blue-5 font-semibold">{data.contactDetails.phone.number}</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex mb-4 gap-x-2 items-center">
              <Mail className="h-8 text-gray-3 font-bold" />
              <p className="text-lg font-bold">{data.contactDetails.email.title}</p>
            </div>
            <Link href={`mailto:${data.contactDetails.email.address ?? "/"}`} target="blank">
              <p className="text-blue-5 font-semibold">{data.contactDetails.email.address}</p>
            </Link>
          </div>
        </div>
      </div>
      {/* small screen */}
      <div className="flex md:hidden flex-col mt-24 mb-12 gap-y-8">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <div className="flex flex-col gap-y-36 items-center">
          {data.locations.map((location, index) => (
            <div key={index} className="flex flex-col gap-y-8 items-center">
              <Image 
                src={location.image || placeholderImage} 
                alt={location.name} 
                width={170} 
                height={170} 
                className="rounded-4xl" 
              />
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-bold">{location.name}</p>
                <p className="text-base">{location.description}</p>
                <div className="flex items-center">
                  <Image src="/icons/place.png" alt="place icon" width={30} height={30} className="h-10 w-10 mr-4" />
                  <div className="flex flex-col">
                    <p>
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
      <div className="w-[calc(100vw-15px)] flex md:hidden justify-center bg-gray-1 mt-12">
        <div className="flex flex-col justify-between gap-y-12 w-5/6 lg:w-2/3 xl:w-1/2 max-w-[1280px] py-18">
          <div className="flex flex-col items-center">
            <div className="flex mb-4 gap-x-2 items-center">
              <Building2 className="h-8 text-gray-3 font-bold" />
              <p className="text-lg font-bold">{data.contactDetails.officialAddress.title}</p>
            </div>
            <div className="flex flex-col gap-y-2">
              {data.contactDetails.officialAddress.lines.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex mb-4 gap-x-2 items-center">
              <Phone className="h-8 text-gray-3 font-bold" />
              <p className="text-lg font-bold">{data.contactDetails.phone.title}</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p>{data.contactDetails.phone.name}</p>
              <p className="text-blue-5 font-semibold">{data.contactDetails.phone.number}</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex mb-4 gap-x-2 items-center">
              <Mail className="h-8 text-gray-3 font-bold" />
              <p className="text-lg font-bold">{data.contactDetails.email.title}</p>
            </div>
            <Link href={`mailto:${data.contactDetails.email.address ?? "/"}`} target="blank">
              <p className="text-blue-5 font-semibold">{data.contactDetails.email.address}</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-16">
        <h2 className="text-[32px] font-bold">{data.form.title}</h2>
        {success && (
          <div className="flex items-center text-green-700 mt-4">
            <CheckCircle className="h-6 w-6 mr-2" />
            <p>{data.form.successMessage}</p>
          </div>
        )}
        <form className="flex flex-col gap-y-10 mt-12 mb-6" onSubmit={handleSubmit}>
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
              className="border border-gray-3 rounded-lg h-10 p-2"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <Button variant="blue" text={data.form.submitButton} className="px-6 py-4 self-center" type="submit" />
        </form>
      </div>
    </div>
  );
}