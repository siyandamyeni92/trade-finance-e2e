import { When, Then } from '@wdio/cucumber-framework';
import LCPage from '../pageobjects/trade/lc.page.js';
import { getLcStatus } from '../api/trade.api.js';

When('checker approves the LC', async () => {
  if (!global.lcId) throw new Error('lcId not found. Run capturer/maker first.');
  await LCPage.approveAsChecker(global.lcId);
});

Then('LC status should be {string}', async (expectedStatus) => {
  if (!global.lcId) throw new Error('lcId not found.');
  const status = await getLcStatus(global.lcId);
  expect(status).toBe(expectedStatus);
});
