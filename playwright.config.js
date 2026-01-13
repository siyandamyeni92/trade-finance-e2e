import { defineConfig } from '@playwright/test';
export default defineConfig({
  use: {
    baseURL: 'https://portal.qa.qt.euw1-nprd.aws.sbgrp.cloud',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  }
});

//This is playwright.config.js.

//It configures how Playwright Test Runner behaves
//It allows direct Playwright tests alongside WebdriverIO
//It supports hybrid frameworks (WDIO + Playwright)