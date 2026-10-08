import { test, expect, type Page } from "@playwright/test";

const ROUTES = [
  "/",
  "/scope/",
  "/methodology/",
  "/technologies/",
  "/milestones/",
  "/downloads/",
  "/about/"
];

const WIDTHS = [320, 390, 768];

async function setTheme(page: Page, theme: "light" | "dark") {
  await page.evaluate((t) => {
    document.documentElement.setAttribute("data-theme", t);
    try {
      localStorage.setItem("latexguard-theme", t);
    } catch {
      /* ignore */
    }
  }, theme);
}

test.describe("Mobile responsiveness audit", () => {
  for (const route of ROUTES) {
    for (const width of WIDTHS) {
      test(`${route} has no horizontal overflow at ${width}px`, async ({ page }) => {
        await page.setViewportSize({ width, height: 844 });
        await page.goto(route);
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(2000); // let staggered Reveal entrance animations settle

        const { scrollWidth, clientWidth } = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth
        }));
        expect(scrollWidth, `${route} @ ${width}px overflows horizontally`).toBeLessThanOrEqual(
          clientWidth + 1
        );
      });

      test(`${route} interactive elements are >= 44px at ${width}px`, async ({ page }) => {
        await page.setViewportSize({ width, height: 844 });
        await page.goto(route);
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(2000); // let staggered Reveal entrance animations settle

        const smallTargets = await page.evaluate(() => {
          const selector = 'a, button, input, [role="button"], [role="tab"]';
          const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
          return elements
            .filter((el) => {
              const style = getComputedStyle(el);
              if (style.display === "none" || style.visibility === "hidden") return false;
              const rect = el.getBoundingClientRect();
              // Skip visually-hidden (sr-only) elements that only become sized on focus,
              // e.g. a skip-to-content link.
              if (rect.width <= 2 && rect.height <= 2) return false;
              return rect.width < 44 || rect.height < 44;
            })
            .map((el) => el.outerHTML.slice(0, 120));
        });
        expect(smallTargets, `${route} @ ${width}px has undersized tap targets`).toEqual([]);
      });
    }
  }

  for (const route of ROUTES) {
    for (const theme of ["light", "dark"] as const) {
      test(`screenshot ${route} @ 390x844 ${theme}`, async ({ page }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await page.goto(route);
        await setTheme(page, theme);
        await page.waitForLoadState("networkidle");
        const slug = route === "/" ? "home" : route.replace(/\//g, "");
        await page.screenshot({
          path: `e2e/screenshots/${slug}-390x844-${theme}.png`,
          fullPage: true
        });
      });
    }
  }
});
