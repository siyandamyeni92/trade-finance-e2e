export default class BasePage {
  async open(path = '') {
    await browser.url(`${process.env.BASE_URL}${path}`);
  }
  async click(el) { await el.waitForClickable(); await el.click(); }
  async type(el, value) { await el.waitForDisplayed(); await el.setValue(value); }
}

//That BasePage is a core foundation class used in Page Object Model (POM) automation frameworks (like WebdriverIO + Playwright/Selenium).

//It exists to centralize common browser actions so that all page classes can reuse them instead of duplicating code.