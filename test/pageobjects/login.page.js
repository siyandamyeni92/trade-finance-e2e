import BasePage from './base.page.js';
class LoginPage extends BasePage {
  get username() { return $('#username'); }
  get password() { return $('#password'); }
  get submit() { return $('button[type="submit"]'); }
  async login(role) {
    await this.open('/');
    await this.type(this.username, process.env[`${role.toUpperCase()}_USER`]);
    await this.type(this.password, process.env[`${role.toUpperCase()}_PASS`]);
    await this.click(this.submit);
  }
}
export default new LoginPage();


//This is a LoginPage Page Object.

  // It represents ONLY the login screen of the application
  // It inherits reusable behaviour from BasePage
  //It exposes business actions, not low-level Selenium/WebdriverIO code