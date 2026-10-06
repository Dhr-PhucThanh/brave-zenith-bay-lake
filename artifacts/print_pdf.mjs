import { chromium } from "playwright-core";
import path from "node:path";
import { pathToFileURL } from "node:url";

const html = pathToFileURL("/workspace/artifacts/chung_lu.html").href;
const pdf = "/workspace/artifacts/Chung_Lu_Truyen_Dao_Tap_18_Luan.pdf";
const exe =
  "/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell";

const browser = await chromium.launch({
  executablePath: exe,
  args: ["--no-sandbox", "--disable-gpu"],
});
const page = await browser.newPage();
await page.goto(html, { waitUntil: "networkidle" });
await page.pdf({
  path: pdf,
  format: "A4",
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate: `<div></div>`,
  footerTemplate: `<div style="font-size:9px;width:100%;text-align:center;color:#5c4033;font-family:serif;">Chung Lữ Truyền Đạo Tập · 18 luận · <span class="pageNumber"></span> / <span class="totalPages"></span></div>`,
  margin: { top: "16mm", bottom: "18mm", left: "14mm", right: "14mm" },
});
await browser.close();
console.log("pdf", pdf);
