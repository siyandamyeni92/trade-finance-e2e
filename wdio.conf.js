import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.ENV || 'qa'}` });

export const config = {
    runner: 'local',
    framework: 'cucumber',
    specs: ['./test/features/*.feature'],
    services: [['playwright', { browsers: ['chromium'], headless: true }]],
    reporters: ['spec', ['allure', { outputDir: 'reports/allure-results' }]],
    cucumberOpts: { require: ['./test/step-definitions/*.js'], timeout: 120000 },
    before: async () => { await browser.maximizeWindow(); }
};


//That file is wdio.conf.js — the master execution configuration for WebdriverIO in your Trade Finance framework.

  //This is the file that ties everything together:

 // environments

 // Playwright browser

 // Cucumber BDD

  //reporting

  //hooks

  //In enterprise automation, this is the engine room.

  // What is this file?

 // wdio.conf.js tells WebdriverIO:

  //How to run tests, with which tools, against which environment, and with what reporting.