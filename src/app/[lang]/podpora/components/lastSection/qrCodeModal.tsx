import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const qrCodeMap: Record<string, string> = {
    "100": "/qrs/100.png",
    "200": "/qrs/200.png",
    "500": "/qrs/500.png",
    "1000": "/qrs/1000.png",
    "5000": "/qrs/5000.png",
    "Vyberu sám": "/qrs/bez.png"
};

export const QrCodeModal = (
    {
        selectedAmount,
        closeQR,
        data
    }: {
        selectedAmount: string | null,
        closeQR: () => void,
        data: any

    }) => {
    const qrCode = qrCodeMap[selectedAmount || "Vyberu sám"];

    const amount = selectedAmount === "Choose myself" || selectedAmount === "Vyberu sám"
        ? data.subtitle
        : `${data.donationAmounts.find((item: { amount: string }) => item.amount === selectedAmount)?.amount} ${data.donationAmounts.find((item: { amount: string }) => item.amount === selectedAmount)?.currency}`

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 min-h-screen">
            <div className="bg-white p-8 rounded-lg max-w-sm w-full mx-4 text-center">
                <h3 className="text-xl font-semibold mb-4">
                    {amount}
                </h3>
                <div className="w-48 h-48 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                    <Image src={qrCode} alt="QR Code" width={192} height={192} />
                </div>
                <Button text={data.qrCodeCloseButton} onClick={closeQR} variant="white" className="w-1/2 border border-gray-300" />
            </div>
        </div>
    );
}

