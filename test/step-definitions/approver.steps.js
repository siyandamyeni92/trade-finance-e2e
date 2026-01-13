import { When, Then } from '@wdio/cucumber-framework';
import LCPage from '../pageobjects/trade/lc.page.js';
import { getLcStatus } from '../api/trade.api.js';

When('approver authorizes the LC', async () => {
  if (!global.lcId) throw new Error('lcId not found. Run capturer/maker/checker first.');
  await LCPage.approveAsApprover(global.lcId);
});

Then('LC status should be {string}', async (expectedStatus) => {
  if (!global.lcId) throw new Error('lcId not found.');
  const status = await getLcStatus(global.lcId);
  expect(status).toBe(expectedStatus);
});


//This is a Cucumber Step Definition file.

//It connects Gherkin steps (When, Then)
//To UI actions (Page Objects)
//And backend validations (API checks)

