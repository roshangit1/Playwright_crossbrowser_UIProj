import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,
  use: {
    baseURL: "https://playwright.dev",
    headless: true,                // run in headless mode by default
    screenshot: 'on', // capture screenshots on failure
    video: 'on',    // record video on failure
    trace: 'on',    // keep trace files for debugging
  },

  projects: [
    { name: 'Chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'Firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'WebKit', use: { ...devices['Desktop Safari'] } },
  ],
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
});