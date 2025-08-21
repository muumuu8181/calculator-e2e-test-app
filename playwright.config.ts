import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  retries: 1,
  reporter: [['json', { outputFile: 'pw-report.json' }], ['html', { open: 'never' }], ['list']],
  use: {
    baseURL: process.env.PW_BASE_URL || 'http://localhost:8000',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    locale: 'ja-JP'
  },
  webServer: {
    command: 'python -m http.server 8000',
    port: 8000,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['iPhone 12'] } },
    { name: 'tablet', use: { ...devices['iPad Pro'] } }
  ]
});