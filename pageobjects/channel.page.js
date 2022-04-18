const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ChannelPage extends Page {
  /**
   * define selectors using getter methods
   */

  get channel() {
    return $(`[data-qa="channel_sidebar_name_${this.name}"]`)
  }

  get btnSubmit() {
    return $('[data-qa="submit_team_domain_button"]')
  }

  get textField() {
    return $('[data-qa="message_input"]').$('div')
  }

  get btnTextSend() {
    return $('[data-qa="texty_send_button"]')
  }
  get msgSection() {
    return $$('[data-qa="message-text"]')
  }

  get sandwitchButton() {
    return $('[data-qa="more_message_actions"]')
  }

  get saveButton() {
    return $('[data-qa="save_message"]')
  }

  get savedTab() {
    return $('[data-sidebar-link-id="Psaved"]')
  }

  get msgText() {
    return $('[data-qa="block-kit-renderer]')
  }
  get searchTab() {
    return $('[data-qa="top_nav_search"]')
  }
  get searchInput() {
    return $('[data-qa="focusable_search_input"]').$('div')
  }

  get emptyResult() {
    return $('[data-qa="empty_state_wrapper"]')
  }

  get searchResultSection() {
    return $('[data-qa="search_message_group"]')
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async getChannel(value) {
    await $(`[data-qa="channel_sidebar_name_${value}"]`).waitForDisplayed({
      timeoutMsg: `Team ${value} is not loaded within 20s`,
    })
    await $(`[data-qa="channel_sidebar_name_${value}"]`).click()
  }

  async enterText(team, textvalue) {
    await this.getChannel(team)
    await this.textField.setValue(textvalue)
    await this.btnTextSend.click()
  }
  async saveMessage() {
    let size = await this.msgSection.length
    await this.msgSection[size - 1].moveTo()
    await this.saveButton.click()
  }

  async clickSavedTab() {
    await this.savedTab.waitForDisplayed({
      timeoutMsg: 'Saved Tab is not visible within 10s',
    })
    await this.savedTab.click()
  }
  async search(text) {
    await this.searchTab.click()
    await this.searchInput.waitForDisplayed()
    await this.searchInput.setValue(text)
    await browser.keys('Enter')
  }

  async validateMsg(msg) {
    await expect(this.msgSection).toBeDisplayed()
    await expect(this.msgSection[0]).toHaveText(msg)
  }

  async checkSearchText(text) {
    await this.searchResultSection.waitForDisplayed({
      timeoutMsg: 'Search tab is not visible within 10s',
    })
    await this.validateMsg(text)
  }
  async validateResults(result) {
    let isVisible = await this.emptyResult.isDisplayed()
    if (!isVisible) {
      await this.checkSearchText(result)
    } else {
      await browser.refresh()
      try {
        await this.checkSearchText(result)
      } catch (error) {
        throw " Search doesn't show any results"
      }
    }
  }

  /**
   * overwrite specific options to adapt it to page object
   */
}

module.exports = new ChannelPage()
