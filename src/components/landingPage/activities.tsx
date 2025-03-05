import React from "react";
import { lpActivities } from '@/data/lpActivities';

export const Activities = () => {
  return ( 
    <div className='py-8 px-24 h-[400px] w-full flex flex-col justify-center gap-y-10'>
        <h2 className="text-3xl font-bold">Co děláme</h2>
        <div className='grid grid-cols-3 gap-x-6 gap-y-6'>
          {
            lpActivities.map((activity, index) => <div key={index} className="flex flex-col py-4 border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-slate-100">
                <h3 className="text-xl font-semibold">{activity.name}</h3>
                <p className="text-md text-slate-500">{activity.description}</p>
              </div>
            )
        }
        </div>
    </div>
  );
};  