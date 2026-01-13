import { When, Then } from '@wdio/cucumber-framework';
import LCPage from '../pageobjects/trade/lc.page.js';
import { getLcStatus } from '../api/trade.api.js';

/**
 * Capturer captures the LC as a DRAFT (not submitted yet).
 * Saves lcId to global so later roles can use it.
 */

When('capturer captures an LC draft', async () => {
  global.lcId = await LCPage.captureDraftLC({
    amount: '250000',
    currency: 'USD'
  });
});

Then('LC status should be {string}', async (expectedStatus) => {
  if (!global.lcId) throw new Error('lcId not found (draft not captured).');
  const status = await getLcStatus(global.lcId);
  expect(status).toBe(expectedStatus);
});
