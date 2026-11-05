import { getPaymentLines } from "@/data/registration-payments";
import { LangOptions } from "@/types";

export function getConfirmationParams(
  slug: string,
  title: string,
  lang: LangOptions,
  values: Record<string, string>,
) {
  const recipient = (values.email || values.representativeEmail || "").trim();
  if (!recipient || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)) {
    throw new Error("A valid confirmation email address is required.");
  }
  const paymentLines = getPaymentLines(slug, lang);
  return {
    email: values.email?.trim() || "",
    representativeEmail: values.representativeEmail?.trim() || "",
    subject: `${lang === "en" ? "Registration received" : "Potvrzení přijetí přihlášky"}: ${title}`,
    confirmation_intro: lang === "en"
      ? "Thank you for registering. We have received your registration for the following event:"
      : "Děkujeme za přihlášení. Přijali jsme vaši přihlášku na následující akci:",
    confirmation_payment_heading: paymentLines.length ? (lang === "en" ? "Payment details" : "Platební údaje") : "",
    confirmation_payment: paymentLines.join("\n"),
    confirmation_price: paymentLines[0] || "",
    confirmation_account: paymentLines[1] || "",
    confirmation_reference: paymentLines[2] || "",
    confirmation_note: paymentLines[3] || "",
    confirmation_due: paymentLines[4] || "",
    confirmation_additional: paymentLines[5] || "",
    confirmation_footer: lang === "en"
      ? "This email confirms receipt of your registration, not receipt of payment. If you have any questions, reply to this email."
      : "Tento email potvrzuje přijetí přihlášky, nikoli přijetí platby. V případě dotazů odpovězte na tento email.",
  };
}
