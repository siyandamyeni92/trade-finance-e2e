import { When, Then } from '@wdio/cucumber-framework';
import LCPage from '../pageobjects/trade/lc.page.js';
import { getLcStatus } from '../api/trade.api.js';

/**
 * Maker submits the LC.
 * Assumes global.lcId exists (captured earlier) OR creates a new draft if not present.
 */

When('maker submits the LC', async () => {
  if (!global.lcId) {
    // fallback: create draft if you run maker alone
    global.lcId = await LCPage.captureDraftLC({ amount: '250000', currency: 'USD' });
  }
  await LCPage.submitLC(global.lcId);
});

Then('LC status should be {string}', async (expectedStatus) => {
  if (!global.lcId) throw new Error('lcId not found.');
  const status = await getLcStatus(global.lcId);
  expect(status).toBe(expectedStatus);
});
