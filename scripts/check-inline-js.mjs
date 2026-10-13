import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const match = html.match(/<script>([\s\S]*?)<\/script>/);
assert.ok(match, "index.html must contain the app script");
new Function(match[1]);

for (const required of [
  'data-view="pos"',
  'data-view="kitchen"',
  'data-view="menu"',
  'data-view="reports"',
  'data-view="settings"',
  'Dine-in',
  'Takeaway',
  'Delivery',
  'Asia/Kuwait',
  'KWD',
  'draftContext',
  'localStorage',
  'Card terminal (test)'
]) {
  assert.ok(html.includes(required), "missing expected POS UI feature: " + required);
}

console.log("PASS: inline JavaScript parses and required prototype views/settings exist.");
console.log("NOTE: This is a static syntax/smoke check; it does not verify live hardware, backend, sync or payment integration.");
