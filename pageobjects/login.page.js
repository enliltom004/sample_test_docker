const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $('[data-qa="login_email"]');
  }

  get inputPassword() {
    return $('[data-qa="login_password"]');
  }

  get signinButton() {
    return $('[data-qa="signin_button"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.signinButton.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
}

module.exports = new LoginPage();
