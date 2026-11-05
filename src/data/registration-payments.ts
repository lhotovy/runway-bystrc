import { LangOptions } from "@/types";

type Payment = {
  account: string;
  reference: string;
  price: Record<LangOptions, string>;
  instructions: Record<LangOptions, string>;
};

// These values feed both the registration form and its confirmation email.
// Add an entry for a new event only after its payment instructions are confirmed.
export const registrationPayments: Record<string, Payment> = {
  vence: {
    account: "366538139/0300",
    reference: "2606",
    price: { cs: "350 Kč (materiál na věnec nebo vánoční ozdoby).", en: "350 CZK (materials for a wreath or Christmas decorations)." },
    instructions: { cs: "Do poznámky pro příjemce uveďte své jméno. Přihlášky s platbou do 22. 11. 2026.", en: "Include your name in the payment note. Register and pay by 22 November 2026." },
  },
  hory: {
    account: "366538139/0300",
    reference: "2701",
    price: { cs: "Dospělá osoba 1 950 Kč, dítě 3–11 let 1 050 Kč, dítě do 2 let zdarma.", en: "Adult 1,950 CZK, child aged 3–11 1,050 CZK, child aged 0–2 free." },
    instructions: { cs: "Částku za celou rodinu uhraďte prosím ihned po přihlášení. Do poznámky k platbě uveďte své jméno a příjmení.", en: "Please pay for your whole family immediately after registering. Include your full name in the payment note." },
  },
  "dovolena-2026": {
    account: "366538139/0300",
    reference: "2604",
    price: { cs: "Ubytování: 1600 Kč za dospělého, 700 Kč za dítě od 3 let.", en: "Accommodation: 1600 CZK per adult, 700 CZK per child from age 3." },
    instructions: { cs: "Do poznámky uveďte jméno. Při kratším pobytu zaplaťte poměrnou část podle počtu nocí. Jídlo a vyúčtování ubytování vyřešíme společně na místě.", en: "Include your name in the payment note. For a shorter stay, pay proportionally to the number of nights. We will arrange food and settle accommodation costs together on site." },
  },
  "vychova-teenageru": {
    account: "366538139/0300",
    reference: "2605",
    price: { cs: "970 Kč za účastníka na celý kurz.", en: "970 CZK per participant for the whole course." },
    instructions: { cs: "Do poznámky pro příjemce uveďte své jméno. Přihlášky s platbou do 2. 11. 2026.", en: "Include your name in the payment note. Register and pay by 2 November 2026." },
  },
};

export function getPaymentLines(slug: string, lang: LangOptions): string[] {
  const payment = registrationPayments[slug];
  if (!payment) return [];
  return lang === "en"
    ? [`Price: ${payment.price.en}`, `Bank account: ${payment.account}. Payment reference (variable symbol): ${payment.reference}.`, payment.instructions.en]
    : [`Cena: ${payment.price.cs}`, `Číslo účtu: ${payment.account}. Variabilní symbol: ${payment.reference}.`, payment.instructions.cs];
}
