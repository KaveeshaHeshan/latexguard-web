import { test, expect } from "@playwright/test";

const ROUTES = [
  "/",
  "/scope/",
  "/methodology/",
  "/technologies/",
  "/milestones/",
  "/downloads/",
  "/about/"
];
const EXTRA_WIDTHS = [360, 430, 1024, 1280, 1440];

test.describe("Extra viewport overflow check", () => {
  for (const route of ROUTES) {
    for (const width of EXTRA_WIDTHS) {
      test(`${route} no horizontal overflow at ${width}px`, async ({ page }) => {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(route);
        await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
        const { scrollWidth, clientWidth } = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth
        }));
        expect(scrollWidth, `${route} @ ${width}px overflows`).toBeLessThanOrEqual(clientWidth + 1);
      });
    }
  }

  test("Home @ 1440x900 light + dark screenshots", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.documentElement.setAttribute("data-theme", "light"));
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await page.screenshot({ path: "e2e/screenshots/home-1440x900-light.png" });
    await page.evaluate(() => document.documentElement.setAttribute("data-theme", "dark"));
    await page.waitForTimeout(2500);
    await page.screenshot({ path: "e2e/screenshots/home-1440x900-dark.png" });
  });

  test("Mobile menu drawer screenshot", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await page.getByRole("button", { name: /open main navigation menu/i }).click();
    await page.waitForTimeout(2200);
    await page.screenshot({ path: "e2e/screenshots/mobile-drawer-390x844.png" });
  });

  test("View Demo modal screenshot", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await page.getByRole("button", { name: /view demo/i }).click();
    await page.waitForTimeout(2200);
    await page.screenshot({ path: "e2e/screenshots/view-demo-modal-390x844.png" });
  });
});
