/**
 * LCPage
 * - Contains UI actions for Capturer/Maker/Checker/Approver
 * - Replace selectors with the real ones from your portal.
 */
 //This code is a Page Object called LCPage.
  //Its purpose is to automate all UI actions related to a Letter of Credit (LC) for Capturer, Maker, Checker, and Approver roles in your Trade Finance system.

class LCPage {
  // ====== Navigation / Search ======
  get tradeMenu() { return $('#trade-menu'); }
  get lcMenu() { return $('#menu-lc'); }

  get searchBox() { return $('#search'); }
  get searchBtn() { return $('#searchBtn'); }
  get openFirstResult() { return $('.results-table tbody tr:first-child'); }

  // ====== LC Create / Draft ======
  get createBtn() { return $('#create-lc'); }
  get amount() { return $('#amount'); }
  get currency() { return $('#currency'); }

  get saveDraftBtn() { return $('#save-draft'); }
  get submitBtn() { return $('#submit'); }

  // Somewhere your system shows LC id after save/submit
  get lcIdLabel() { return $('#lcId'); }

  // ====== Checker / Approver Buttons ======
  get checkerApproveBtn() { return $('#checker-approve'); }
  get approverAuthorizeBtn() { return $('#approver-authorize'); }

  // ====== Helpers ======
  async openLCModule() {
    // optional navigation flow (only if your portal requires menu navigation)
    if (await this.tradeMenu.isExisting()) {
      await this.tradeMenu.click();
      await this.lcMenu.click();
    }
  }

  async openTradeById(lcId) {
    await this.openLCModule();

    await this.searchBox.waitForDisplayed({ timeout: 20000 });
    await this.searchBox.setValue(lcId);
    await this.searchBtn.click();

    // Open first result row (or click the matching row in your real app)
    await this.openFirstResult.waitForClickable({ timeout: 20000 });
    await this.openFirstResult.click();
  }

  async readLcId() {
    await this.lcIdLabel.waitForDisplayed({ timeout: 20000 });
    const id = await this.lcIdLabel.getText();
    if (!id) throw new Error('LC ID not found on screen.');
    return id.trim();
  }

  // ====== CAPTURER ======
  async captureDraftLC({ amount, currency }) {
    await this.openLCModule();

    await this.createBtn.waitForClickable({ timeout: 20000 });
    await this.createBtn.click();

    await this.amount.waitForDisplayed({ timeout: 20000 });
    await this.amount.setValue(amount);

    // currency might be input or dropdown; adjust as needed
    if (await this.currency.isExisting()) {
      await this.currency.setValue(currency);
    }

    await this.saveDraftBtn.waitForClickable({ timeout: 20000 });
    await this.saveDraftBtn.click();

    return await this.readLcId();
  }

  // ====== MAKER ======
  async submitLC(lcId) {
    await this.openTradeById(lcId);

    await this.submitBtn.waitForClickable({ timeout: 20000 });
    await this.submitBtn.click();
  }

  // ====== CHECKER ======
  async approveAsChecker(lcId) {
    await this.openTradeById(lcId);

    await this.checkerApproveBtn.waitForClickable({ timeout: 20000 });
    await this.checkerApproveBtn.click();
  }

  // ====== APPROVER ======
  async approveAsApprover(lcId) {
    await this.openTradeById(lcId);

    await this.approverAuthorizeBtn.waitForClickable({ timeout: 20000 });
    await this.approverAuthorizeBtn.click();
  }
}

export default new LCPage();
