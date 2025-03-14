"use client";

import { Button } from "@/components/ui/button";
import { Building2, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function KontaktClient() {
  const [formData, setFormData] = useState({name: "", email: "", message: ""});

  return (
    <div className="flex flex-col items-center">
      {/* big screen */}
      <div className="hidden md:flex flex-col mt-24 mb-12 gap-y-12">
        <h1 className="text-4xl font-bold">Kontakt</h1>
        <div className="flex gap-x-8 items-center">
          <Image src="/centrumrb.png" alt="Centrum Runway Bystrc" width={170} height={170} />
          <div className="flex flex-col gap-y-4">
            <p className="text-xl font-bold">Centrum Runway Bystrc (Klubovna)</p>
            <p className="text-base">Zde se setkáváme pro naprostou většinu našich aktivit. Stačí přijít k paneláku na Teyschlově 20. Nejbližší zastávky jsou Ruda či Kavčí. </p>
            <div className="flex items-center">
              <Image src="/icons/place.png" alt="place icon" width={30} height={30} className="h-10 w-10 mr-4" />
              <div className="flex flex-col">
                <p>vedle budovy <Link href="https://maps.app.goo.gl/orMBCrEwbYNZuvEd9" target="blank"><span className="text-blue-5 font-bold">Teyschlova 20</span></Link></p>
                <p>Brno - Bystrc</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-8 items-center">
          <Image src="/placeholder.png" alt="Modlitebna Runway Bystrc" width={170} height={170} />
          <div className="flex flex-col gap-y-4">
            <p className="text-xl font-bold">Modlitebna</p>
            <p className="text-base">Připravujeme nové a větší prostory pro naše setkávání! Těšíme se, že vás brzy přivítáme v naší nové modlitebně, kterou se stane právě rekonstruovaná bývalá restaurace Don Papa. </p>
            <div className="flex items-center">
              <Image src="/icons/place.png" alt="place icon" width={30} height={30} className="h-10 w-10 mr-4" />
              <div className="flex flex-col">
                <Link href="https://maps.app.goo.gl/ZqvRKeMYPwbcTVhBA" target="blank"><p className="text-blue-5 font-bold">Nad Přehradou 9a</p></Link>
                <p>Brno - Bystrc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[calc(100vw-15px)] hidden md:flex justify-center bg-gray-1 mt-12">
          <div className="flex justify-between w-5/6 lg:w-2/3 xl:w-1/2 max-w-[1280px] py-18">
            <div className="flex flex-col items-center">
              <div className="flex mb-4 gap-x-2 items-center">
                <Building2 className="h-8 text-gray-3 font-bold" />
                <p className="text-lg font-bold">Oficiální sídlo Runwaye</p>               
              </div>
              <div className="flex flex-col gap-y-2">
                <p>Runway Bystrc</p>
                <p>Smetanova 20</p>
                <p>602 000 Brno</p>
              </div>             
            </div>
            <div className="flex flex-col items-center">
            <div className="flex mb-4 gap-x-2 items-center">
                <Phone className="h-8 text-gray-3 font-bold" />
                <p className="text-lg font-bold">Telefon</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p>Marek Žitný</p>
                <p className="text-blue-5 font-semibold">732 238 116</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex mb-4 gap-x-2 items-center">
                <Mail className="h-8 text-gray-3 font-bold" />
                <p className="text-lg font-bold">Email</p>
              </div>
              <Link href="mailto:info@runway-bystrc.cz">
                <p className="text-blue-5 font-semibold">info@runway-bystrc.cz</p>
              </Link>
            </div>
          </div>
      </div>
      {/* mobile screen */}
      <div className="flex md:hidden flex-col mt-16 mb-12 gap-y-12">
        <h1 className="text-4xl font-bold">Kontakt</h1>              
          <div className="flex flex-col gap-y-6">
            <p className="text-xl font-bold text-center">Centrum Runway Bystrc (Klubovna)</p>
            <Image src="/centrumrb.png" alt="Centrum Runway Bystrc" width={170} height={170} className="self-center" />
            <p className="text-base">Zde se setkáváme pro naprostou většinu našich aktivit. Stačí přijít k paneláku na Teyschlově 20. Nejbližší zastávky jsou Ruda či Kavčí. </p>
            <div className="flex items-center">
              <Image src="/icons/place.png" alt="place icon" width={30} height={30} className="h-10 w-10 mr-4" />
              <div className="flex flex-col self-start">
                <p>vedle budovy <Link href="https://maps.app.goo.gl/orMBCrEwbYNZuvEd9" target="blank"><span className="text-blue-5 font-bold">Teyschlova 20</span></Link></p>
                <p>Brno - Bystrc</p>
              </div>
            </div>       
          </div>         
          <div className="flex flex-col gap-y-6 mt-12">
            <p className="text-xl font-bold self-center">Modlitebna</p>
            <Image src="/placeholder.png" alt="Modlitebna Runway Bystrc" width={170} height={170} className="self-center" />
            <p className="text-base">Připravujeme nové a větší prostory pro naše setkávání! Těšíme se, že vás brzy přivítáme v naší nové modlitebně, kterou se stane právě rekonstruovaná bývalá restaurace Don Papa. </p>
            <div className="flex items-center">
              <Image src="/icons/place.png" alt="place icon" width={30} height={30} className="h-10 w-10 mr-4" />
              <div className="flex flex-col">
                <Link href="https://maps.app.goo.gl/ZqvRKeMYPwbcTVhBA" target="blank"><p className="text-blue-5 font-bold">Nad Přehradou 9a</p></Link>
                <p>Brno - Bystrc</p>
              </div>
            </div>
          </div>       
      </div>
      <div className="w-[calc(100vw-15px)] flex md:hidden justify-center bg-gray-1 mt-12">
          <div className="flex flex-col gap-y-20 w-full md:w-5/6 lg:w-2/3 xl:w-1/2 max-w-[1280px] py-18">
            <div className="flex flex-col items-center">
              <div className="flex mb-4 gap-x-2 items-center">
                <Building2 className="h-8 text-gray-3 font-bold" />
                <p className="text-lg font-bold">Oficiální sídlo Runwaye</p>               
              </div>
              <div className="flex flex-col gap-y-2">
                <p>Runway Bystrc</p>
                <p>Smetanova 20</p>
                <p>602 000 Brno</p>
              </div>             
            </div>
            <div className="flex flex-col items-center">
            <div className="flex mb-4 gap-x-2 items-center">
                <Phone className="h-8 text-gray-3 font-bold" />
                <p className="text-lg font-bold">Telefon</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p>Marek Žitný</p>
                <p className="text-blue-5 font-semibold">732 238 116</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex mb-4 gap-x-2 items-center">
                <Mail className="h-8 text-gray-3 font-bold" />
                <p className="text-lg font-bold">Email</p>
              </div>
              <Link href="mailto:info@runway-bystrc.cz">
                <p className="text-blue-5 font-semibold">info@runway-bystrc.cz</p>
              </Link>
            </div>
          </div>
      </div>
      <div className="flex flex-col py-16">
        <h2 className="text-[32px] font-bold">Kontaktovat nás můžete i zde</h2>
        <div className="flex flex-col gap-y-10 mt-12 mb-6">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="name" className="text-base font-bold">Jméno a příjmení</label>
            <input 
              id="name" 
              type="text"
              className="border border-gray-3 rounded-lg h-10" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>       
          <div className="flex flex-col gap-y-1">   
            <label htmlFor="name" className="text-base font-bold">Email</label>
            <input 
              id="email" 
              type="text" 
              className="border border-gray-3 rounded-lg h-10" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="name" className="text-base font-bold">Zpráva</label>
            <textarea 
              id="message"    
              className="border border-gray-3 rounded-lg h-10"  
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}      
            />
          </div>
          <Button 
            variant="blue" 
            text="Odeslat" 
            className="px-6 py-4 self-center" 
          />
        </div>        
      </div>
    </div>
  )
}