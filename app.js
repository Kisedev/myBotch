const Discord = require('discord.js');
const client = new Discord.Client();
let myBotchName

//Bot start
client.login('NTcxODQ2NDYzMDcyNTAxNzYw.XMTwLg.nYVJCCozlFNrKeAVIqccgJSs5PY')
client.on('ready', () => {
    myBotchName = client.user.tag.slice(0, client.user.tag.indexOf("#"));
    console.log(`${client.user.tag} says: I'm ready to serve Senpai`)
})

// - Core -
// Dialogues
// *Criar metodo para pegar uma fala random*
const speeches = {
    greetings: ["Hello!"]
}

// Functions
function sayMyName(msg) {
    return msg.startsWith(`!${myBotchName}`)
}

client.on('message', async msg => {
    // Me chamou senpai?
    if (sayMyName(msg.content)) {
        speech = msg.content.slice(myBotchName.length + 1).trim()
        console.log(`-${speech}`)

        if (speech == "hi") {
            msg.reply(speeches.greetings[0])
        }
    }
})