const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LaunchPage extends Page {
  /**
   * define selectors using getter methods
   */

  get workspace() {
    return $('[data-qa="signin_domain_input"]')
  }

  get btnSubmit() {
    return $('[data-qa="submit_team_domain_button"]')
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  async enterWorkspace(workspace) {
    await this.workspace.setValue(workspace)
  }

  async submitButton() {
    await this.btnSubmit.click()
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open('client')
  }
}

module.exports = new LaunchPage()
