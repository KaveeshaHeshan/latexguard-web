import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 30000,
  webServer: {
    command: "npx serve out -p 4173",
    port: 4173,
    reuseExistingServer: true,
    timeout: 60000
  },
  use: {
    baseURL: "http://localhost:4173"
  }
});
