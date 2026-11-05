const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const { test } = require("node:test");
const ts = require("typescript");

// Exercise the actual TypeScript configuration without adding a test runtime.
function loadSource(relativePath) {
  const filename = path.join(__dirname, "..", relativePath);
  const source = ts.transpileModule(readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const sourceModule = { exports: {} };
  const sourceRequire = (name) => {
    if (name.startsWith("@/")) return loadSource(`src/${name.slice(2)}.ts`);
    return require(name);
  };
  new Function("require", "module", "exports", source)(sourceRequire, sourceModule, sourceModule.exports);
  return sourceModule.exports;
}

const { getConfirmationParams } = loadSource("src/lib/registration-confirmation.ts");
const { registrations } = loadSource("src/data/registrations.tsx");

test("different registrations receive their own payment reference and price", () => {
  const wreath = getConfirmationParams("vence", "Přihláška na Vyrábění adventních věnců", "cs", { email: "test@example.com" });
  const mountains = getConfirmationParams("hory", "Hory", "cs", { email: "test@example.com" });
  assert.match(wreath.confirmation_payment, /2606/);
  assert.equal(wreath.subject, "Potvrzení přijetí přihlášky: Vyrábění adventních věnců");
  assert.match(wreath.confirmation_payment, /350 Kč/);
  assert.equal(wreath.confirmation_account, "Číslo účtu: 366538139/0300");
  assert.equal(wreath.confirmation_reference, "Variabilní symbol: 2606");
  assert.match(wreath.confirmation_due, /22\. 11\. 2026/);
  assert.doesNotMatch(wreath.confirmation_account, /2606/);
  assert.doesNotMatch(wreath.confirmation_note, /22\. 11\. 2026/);
  assert.match(mountains.confirmation_payment, /2701/);
  assert.match(mountains.confirmation_payment, /1 950 Kč/);
  assert.doesNotMatch(mountains.confirmation_payment, /2606/);
});

test("English confirmation and guardian-only registrations are supported", () => {
  const params = getConfirmationParams("hory", "Registration for Runway Goes to the Mountains 2027", "en", { representativeEmail: " guardian@example.com " });
  assert.equal(params.email, "");
  assert.equal(params.representativeEmail, "guardian@example.com");
  assert.equal(params.subject, "Registration received: Runway Goes to the Mountains 2027");
  assert.match(params.confirmation_payment, /Bank account/);
});

test("events without verified payment instructions omit the payment block", () => {
  const params = getConfirmationParams("dramaticky-klub", "Drama", "cs", { email: "test@example.com" });
  assert.equal(params.confirmation_payment, "");
  assert.equal(params.confirmation_payment_heading, "");
});

test("missing or malformed recipient prevents submission", () => {
  for (const email of ["", "not-an-email", "a@b", "a@example.com\nother@example.com"]) {
    assert.throws(() => getConfirmationParams("vence", "Věnce", "cs", { email }));
  }
});

test("every published form has a required email and a matching event identity", () => {
  for (const registration of registrations) {
    for (const [lang, data] of Object.entries(registration.translations)) {
      assert.equal(data.slug, registration.slug, `${registration.slug}/${lang}: event identity`);
      assert.ok(data.elements.some((field) => ["email", "representativeEmail"].includes(field.name) && field.required), `${registration.slug}/${lang}: required recipient`);
    }
  }
});
