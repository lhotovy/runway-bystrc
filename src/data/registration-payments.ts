import { LangOptions } from "@/types";

type Payment = {
  account: string;
  reference: string;
  price: Record<LangOptions, string>;
  note: Record<LangOptions, string>;
  due?: Record<LangOptions, string>;
  additional?: Record<LangOptions, string>;
};

// These values feed both the registration form and its confirmation email.
// Add an entry for a new event only after its payment instructions are confirmed.
export const registrationPayments: Record<string, Payment> = {
  "vikendovka-runway-youth": {
    account: "366538139/0300",
    reference: "2602",
    price: { cs: "950 Kč.", en: "950 CZK." },
    note: { cs: "Do poznámky k platbě uveďte jméno a příjmení účastníka.", en: "Include the participant's full name in the payment note." },
  },
  vence: {
    account: "366538139/0300",
    reference: "2606",
    price: { cs: "350 Kč (materiál na věnec nebo vánoční ozdoby).", en: "350 CZK (materials for a wreath or Christmas decorations)." },
    note: { cs: "Do poznámky pro příjemce uveďte své jméno.", en: "Include your name in the payment note." },
    due: { cs: "Přihlášky s platbou do 22. 11. 2026.", en: "Register and pay by 22 November 2026." },
  },
  hory: {
    account: "366538139/0300",
    reference: "2701",
    price: { cs: "Dospělá osoba 1 950 Kč, dítě 3–11 let 1 050 Kč, dítě do 2 let zdarma.", en: "Adult 1,950 CZK, child aged 3–11 1,050 CZK, child aged 0–2 free." },
    note: { cs: "Do poznámky k platbě uveďte své jméno a příjmení.", en: "Include your full name in the payment note." },
    due: { cs: "Částku za celou rodinu uhraďte prosím ihned po přihlášení.", en: "Please pay for your whole family immediately after registering." },
  },
  "dovolena-2026": {
    account: "366538139/0300",
    reference: "2604",
    price: { cs: "Ubytování: 1600 Kč za dospělého, 700 Kč za dítě od 3 let.", en: "Accommodation: 1600 CZK per adult, 700 CZK per child from age 3." },
    note: { cs: "Do poznámky uveďte jméno.", en: "Include your name in the payment note." },
    additional: { cs: "Při kratším pobytu zaplaťte poměrnou část podle počtu nocí. Jídlo a vyúčtování ubytování vyřešíme společně na místě.", en: "For a shorter stay, pay proportionally to the number of nights. We will arrange food and settle accommodation costs together on site." },
  },
  "vychova-teenageru": {
    account: "366538139/0300",
    reference: "2605",
    price: { cs: "970 Kč za účastníka na celý kurz.", en: "970 CZK per participant for the whole course." },
    note: { cs: "Do poznámky pro příjemce uveďte své jméno.", en: "Include your name in the payment note." },
    due: { cs: "Přihlášky s platbou do 2. 11. 2026.", en: "Register and pay by 2 November 2026." },
  },
};

export function getPaymentLines(slug: string, lang: LangOptions): string[] {
  const payment = registrationPayments[slug];
  if (!payment) return [];
  return [
    `${lang === "en" ? "Price" : "Cena"}: ${payment.price[lang]}`,
    `${lang === "en" ? "Bank account" : "Číslo účtu"}: ${payment.account}`,
    `${lang === "en" ? "Payment reference (variable symbol)" : "Variabilní symbol"}: ${payment.reference}`,
    payment.note[lang],
    payment.due?.[lang] || "",
    payment.additional?.[lang] || "",
  ];
}
