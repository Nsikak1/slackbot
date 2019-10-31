const SlackBot = require('slackbots');
const axios = require('axios');
const dotenv = require('dotenv')

dotenv.config()

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'Botty - ojet'
})

bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
    }

    bot.postMessageToUser("christophernsikak1", 'Hello world!', params)

});
bot.on('error', (err) => {
    console.log(err);
})
