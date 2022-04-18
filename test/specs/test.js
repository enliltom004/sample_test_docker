const LaunchPage = require('../../pageobjects/lauch.page')
const LoginPage = require('../../pageobjects/login.page')
const ChannelPage = require('../../pageobjects/channel.page')
const testData = require('../../data/testData')

describe('My Login application', () => {
  before(async () => {
    await LaunchPage.open()
    await LaunchPage.enterWorkspace(testData.workspce)
    await LaunchPage.submitButton()
    await LoginPage.login(
      testData.loginCreds.username,
      testData.loginCreds.password
    )
  })
  it('should login with valid credentials', async () => {
    await ChannelPage.enterText(testData.team, testData.textMsg)
    await ChannelPage.saveMessage()
    await ChannelPage.clickSavedTab()
    await ChannelPage.validateMsg(testData.textMsg)
  })

  it('Check Saved items ', async () => {
    await ChannelPage.search(testData.searchText)
    await ChannelPage.validateResults(testData.textMsg)
  })
})
