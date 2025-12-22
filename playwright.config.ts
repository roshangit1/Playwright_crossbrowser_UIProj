import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,
  use: {
    headless: true,                // run in headless mode by default
    screenshot: 'only-on-failure', // capture screenshots on failure
    video: 'retain-on-failure',    // record video on failure
    trace: 'retain-on-failure',    // keep trace files for debugging
  },

  projects: [
    { name: 'Chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'Firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'WebKit', use: { ...devices['Desktop Safari'] } },
  ],
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
});