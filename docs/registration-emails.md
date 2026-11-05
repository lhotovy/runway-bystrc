# Potvrzovací emaily přihlášek

## Bezplatné nastavení EmailJS

Zůstávají dvě šablony a stávající Gmail služba. Registrační šablona
`template_ioei8ib` dál posílá údaje organizátorům. V záložce Auto-Reply má jako
Linked Template připojenou `template_l0x7752`.

Šablona `template_l0x7752` má dvě větve podle přítomnosti `title`:

- S `title`: potvrzení přihlášky na `email`, případně `representativeEmail`.
  Kopie organizátorům je prázdná. Odpovědi chodí na info@runway-bystrc.cz.
- Bez `title`: kontaktní zpráva pro původní organizátory. Kontaktní formulář
  proto nesmí posílat parametr `title`. Registrační formulář ho musí posílat.

Předmět: `{{subject}}{{^subject}}Zpráva z webu{{/subject}}`.

To Email:
`{{#title}}{{email}}{{^email}}{{representativeEmail}}{{/email}}{{/title}}{{^title}}info@runway-bystrc.cz{{/title}}`

From Name: `{{#title}}Runway Bystrc{{/title}}{{^title}}{{name}}{{/title}}`.

Reply To: `{{#title}}info@runway-bystrc.cz{{/title}}{{^title}}{{email}}{{/title}}`.

From Email používá výchozí adresu připojené služby. Bcc je prázdné.
Cc obsahuje původní další příjemce kontaktního formuláře, uzavřené do
`{{^title}}…{{/title}}`, aby se nezobrazovali v potvrzeních účastníkům.
Jejich adresy spravujte přímo v EmailJS.

HTML obsah je uložen v `docs/email-templates/contact-and-confirmation.html`.
Při úpravě vložte obsah přes Edit Content → Code Editor, Apply Changes a Save.
Používáme dvojité závorky, aby EmailJS escapoval předané texty.
Cena, účet, variabilní symbol, poznámka a splatnost jsou předávány samostatnými
parametry `confirmation_price`, `confirmation_account`, `confirmation_reference`,
`confirmation_note` a `confirmation_due` a vykreslují se jako jednotlivé odstavce.
`confirmation_payment` zapíná platební blok; `confirmation_additional` je volitelný
další odstavec. Nespoléháme na zalomení řádků v jednom textovém parametru.

## Změna platebních údajů

Upravte `src/data/registration-payments.ts`. Klíč je slug akce, například `hory`.
Každá akce má vlastní `account`, `reference`, překlady `price`, `note`
a volitelné `due` (splatnost) a `additional` (další pokyny).
Formulář i email čerpají ze stejné funkce `getPaymentLines`. Po změně nasaďte web.
Údaje v samostatném popisu akce (`activities.tsx`) jsou nadále spravované zvlášť.

Ověřené pokyny jsou vyplněné pro věnce, hory, dovolenou 2026, výchovu teenagerů
a víkendovku Youth. U akcí bez záznamu se odešle potvrzení bez platební části;
chybějící účet nebo variabilní symbol se neodhaduje. Zejména Challenge Camp
má v původním formuláři zmínku o záloze, ale nemá uvedený účet a VS. Před
znovuotevřením přihlášek je potřeba doplnit jeho ověřené platební pokyny.

Částka za rodinu se automaticky nepočítá. Email obsahuje ceník a pokyny.
Externí přihlášky (například Google Forms) toto propojení nepoužívají.

## Limity a ověření

Bezplatný tarif má 200 požadavků za měsíc. Přihláška s potvrzením spotřebuje
dva, kontaktní zpráva jeden. Při vyčerpání kvóty se nové požadavky neodešlou.
Úspěch EmailJS znamená přijetí požadavku službou, nikoli důkaz doručení do inboxu.
Při částečném selhání propojené šablony zkontrolujte Email History před ručním
opakováním; web neodesílá samostatný druhý požadavek ani automatický retry.

Kontroly: `node --test tests/registration-confirmation.test.cjs` a `npx tsc --noEmit`.
Při změně šablony otestujte v EmailJS Test It potvrzení s `email`, potvrzení
pouze s `representativeEmail` a kontaktní větev bez `title`. Používejte syntetická
data a zřetelně označené testy. Příjemce a Cc zkontrolujte v Email History.

## Stav nastavení (5. 11. 2026)

Obě šablony jsou uložené a propojené v EmailJS. Potvrzení s běžným emailem
i pouze s emailem zákonného zástupce bylo úspěšně doručeno. Test přihlášky
věnců z lokálního produkčního buildu prošel přes původní registrační šablonu
a doručil propojené potvrzení s oddělenými platebními odstavci. Potvrzení mělo
prázdné Cc a Reply-To na info@runway-bystrc.cz.

Úpravy šablon v EmailJS jsou účinné ihned. Starší nasazený web neposílá nové
platební parametry a dostane obecné potvrzení bez platebního bloku. Pro plné
potvrzení s platebními údaji je potřeba nasadit tuto změnu webu.
