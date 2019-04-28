const Discord = require('discord.js')
const client = new Discord.Client()

client.login('NTcxODQ2NDYzMDcyNTAxNzYw.XMTwLg.nYVJCCozlFNrKeAVIqccgJSs5PY')
client.on('ready', () => {
    console.log(`${client.user.tag} says: I'm ready to serve Senpai`)
})