const LaunchPage = require('../../pageobjects/lauch.page')
const LoginPage = require('../../pageobjects/login.page')
const ChannelPage = require('../../pageobjects/channel.page')


describe('My Login application', () => {
  // before(async () => {
  //   await LaunchPage.open()
  //   await LaunchPage.enterWorkspace('slackdemo-tsl4163')
  //   await LaunchPage.submitButton()
  //   await LoginPage.login('enliltom@gmail.com', 'MySlack@1290')

  //   // await ChannelPage.enterText('interview','Hello team !')
  //   // await ChannelPage.saveMessage()
  // });
  beforeEach(async () => {
    await LaunchPage.open()
    await LaunchPage.enterWorkspace('slackdemo-tsl4163')
    await LaunchPage.submitButton()
    await LoginPage.login('enliltom@gmail.com', 'MySlack@1290')
  });
  it.skip('should login with valid credentials', async () => {
    // await LaunchPage.open()
    // await LaunchPage.enterWorkspace('slackdemo-tsl4163')
    // await LaunchPage.submitButton()
    // await LoginPage.login('enliltom@gmail.com', 'MySlack@1290')

    // await ChannelPage.enterText('interview','Hello team !')
    // await ChannelPage.saveMessage()
    await ChannelPage.clickSavedTab()
    await ChannelPage.validateMsg('Hello team !')
    // await expect(ChannelPage.msgSection).toBeDisplayed();
    // //let savedtext = await ChannelPage.msgSection[0].getText()
    // await expect(ChannelPage.msgSection[0]).toHaveText('Hello team !');


  })

  it('Check Saved items ',async () => {
   await ChannelPage.search('has:star')
   await ChannelPage.validateResults('Hello team !')
  //  await expect(ChannelPage.msgSection).toBeDisplayed();
  //  //let savedtext = await ChannelPage.msgSection[0].getText()
  //  await expect(ChannelPage.msgSection[0]).toHaveText('Hello team !');
  });
})
