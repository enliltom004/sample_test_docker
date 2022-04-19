const LaunchPage = require('../../pageobjects/lauch.page')
const LoginPage = require('../../pageobjects/login.page')
const ChannelPage = require('../../pageobjects/channel.page')
const testData = require('../../data/testData')

describe('Test Slack ', () => {
  before(async () => {
    await LaunchPage.open()
    await LaunchPage.enterWorkspace(testData.workspce)
    await LaunchPage.submitButton()
    await LoginPage.login(
      testData.loginCreds.username,
      testData.loginCreds.password
    )
  })
  it('Validate if Messages Can be Saved ', async () => {
    await ChannelPage.enterText(testData.team, testData.textMsg)
    await ChannelPage.saveMessage()
    await ChannelPage.clickSavedTab()
    await ChannelPage.validateMsg(testData.textMsg)
  })

  it('Validate Search Functionality', async () => {
    await ChannelPage.search(testData.searchText)
    await ChannelPage.validateResults(testData.textMsg)
  })
})
