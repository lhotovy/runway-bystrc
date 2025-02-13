import React from "react";
import { lpUpcoming } from '@/data/lpUpcoming';
import Image from "next/image";

export const Upcoming = () => {
  return ( 
    <div className='py-8 px-48 h-[400px] w-full flex flex-col justify-center gap-y-10'>
        <h2 className="text-3xl font-semibold">Nadcházející akce</h2>
        <div className="flex items-center gap-x-24">
            <div className='grid grid-cols-3 gap-x-8 gap-y-4'>
                {
                    lpUpcoming.map((activity, index) => <div key={index} className="flex flex-col py-4 border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-slate-100">
                        <Image src={activity.image} width={400} height={100} alt={activity.name} />
                        <div className="flex flex-col gap-y-2 px-6 mt-6">
                            <h3 className="text-xl font-semibold">{activity.name}</h3>
                            <p className="text-md text-slate-500">{activity.description}</p>
                        </div>
                    </div>
                    )
                }
            </div>
            <p className="underline">Zobrazit vše</p>
        </div>
    </div>
  );
};  