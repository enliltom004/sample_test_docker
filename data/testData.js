require('dotenv').config();
const testData = {
    loginCreds : {username:'enliltom@gmail.com',password:`${process.env.PASSWORD}`},
    workspce:'slackdemo-tsl4163',
    team:'interview',
    textMsg:'Hello team !',
    searchText:'has:star'
}
module.exports = testData;