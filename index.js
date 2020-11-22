const Discord = require ('discord.js')
const    client = new Discord.Client();




var prefix = "="


client.login("NzgwMDE1Njg2NTc1MDYzMTAw.X7o8Nw.FjemleQVmvn-Opxw6E5HkVF3-m8")

client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame("Go to the space")
});

 client.on('message', message => { 
 

})
