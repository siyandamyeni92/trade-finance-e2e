import { Given } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import OtpPage from '../pageobjects/otp.page.js';

Given('user logs in as {string}', async (role) => {
  await LoginPage.login(role);
  await OtpPage.verify(role);
});
