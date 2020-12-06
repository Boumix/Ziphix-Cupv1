const Discord = require("discord.js") 
const bot = new Discord.Client();
const prefix = ".";



bot.on('ready', async => {
    console.log("Go Pub bande de saloppe !")
})

bot.on('message', message => {

    let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);
             if (cmd === prefix + "mp"){
        if(message.author.id != "TON ID") return;
                if(message.channel.type === "dm") return;
                if(message.deletable) message.delete();

                let MpMessage = args.slice(0).join(" ");

                message.guild.members.forEach(member => {
                    member.send(`${MpMessage}`)
                

	})
            
            }
})



bot.login("TOKEN BOT").catch(err=> console.log("Token Incorrect"));

