const Discord = require('discord.js');
const client = new Discord.Client();
let myBotchName

//Bot start
client.login('NTcxODQ2NDYzMDcyNTAxNzYw.XMcJ1w.BIFVoJMmLdNXHI2Z-TPkeR1tZd4')
client.on('ready', () => {
    myBotchName = client.user.tag.slice(0, client.user.tag.indexOf("#"));
    console.log(`${client.user.tag} says: I'm ready to serve Senpai`)
})

// - Core -
// *Ensinar mais palavras/assuntos ao Botch*
// Dialogues
const speeches = {
    greetings: ["Olar", "Oe", "Turo bom?", "Eaí", "Relou", "8"]
}

// Functions
function sayMyName(msg) {
    return msg.startsWith(`!${myBotchName}`)
}
function sortRandomSpeech(list) {
    return list[Math.ceil(Math.random() * (list.length))]; 
}
function getSentence(msg) {
    return msg.slice(myBotchName.length + 1).trim();
}
function decode(msg) {
    return getSentence(msg).toLowerCase().split(" ");
}

client.on('message', async msg => {
    // Me chamou senpai?
    if (sayMyName(msg.content)) {
        console.log(`${msg.author} says: ${getSentence(msg.content)}`)
        let words = decode(msg.content)
        console.log(words)

        // (não faça isso crianças)
        if (
        words.includes("oi") || 
        words.includes("olá") ||
        (words.includes("tudo") && words.includes("bem?")) ||
        (words.includes("oi") && words.includes("você") && words.includes("bem?")) ||
        words.includes("eaí")
        ) {
            msg.reply(sortRandomSpeech(speeches.greetings));
        }
    }
})