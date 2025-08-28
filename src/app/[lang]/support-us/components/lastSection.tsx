"use client";

import { BankAccountDetails } from './lastSection/bankAccountDetails';
import { useState } from "react";
import { supportUsData } from "@/data/staticPages/supportUs";
import { Button } from "@/components/ui/button";
import { QrCodeModal } from "./lastSection/qrCodeModal";

export const LastSection = () => {
    const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
    const [showQR, setShowQR] = useState(false);
    const lang = "cs";
    const data = supportUsData.translations[lang].lastSection;

    const handleAmountClick = (amount: string) => {
        setSelectedAmount(amount);
        setShowQR(true);
    };

    const closeQR = () => {
        setShowQR(false);
        setSelectedAmount(null);
    };

    return (
        <section className="flex flex-col items-center max-w-[800px] mx-auto space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">{data.title}</h2>
                <p className="text-lg text-gray-600">{data.subtitle}</p>
            </div>

            {/* Donation Amount Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-md">
                {data.donationAmounts.map((item, index) => (
                    <Button
                        key={index}
                        text={`${item.amount} ${item.currency}`}
                        variant="yellow"
                        className="h-16"
                        onClick={() => handleAmountClick(item.amount)}
                    >
                        {item.amount} {item.currency}
                    </Button>
                ))}
            </div>          
            {showQR && (
                <QrCodeModal 
                    selectedAmount={selectedAmount}                  
                    closeQR={closeQR} 
                    data={data}
                />
            )}    
            <BankAccountDetails  data={data} />
        </section>
    );
};
