const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
 
client.login(process.env.TOKEN);
 
client.on("ready", () => {
  // Cet événement s'exécutera si le bot démarre et se connecte avec succès.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity('Admin de la Ziphix Cup', { type: 'WATCHING' });
 
client.on('message', async message => {
 
  //recuperer message par "args"
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
 
  //ban
  if(message.content.startsWith(prefix + "ban")){
    let member = message.mentions.members.first() || message.guild.members.get(args[0])
      if (!message.member.hasPermission('BAN_MEMBERS')) {
        return message.channel.send(
            "Vous n'avez pas les permissions pour faire cela !"
        )};
        if(!member)
          return message.channel.send("Mentionner un utilisateur")
        if(!member.bannable)
          return message.channel.send("Je ne peux pas ban ce membre")
 
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";
        await member.ban(reason)
          .catch(error => message.reply(`Désolé, je ne peux pas ban à cause de la raison suivante: ${error}`));
        message.channel.send(`${member.user.tag} à été ban par ${message.author.tag} pour la raison suivante: ${reason}`);
  };
 
   //clear
  if(message.content.startsWith(prefix + "clear")){
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**Erreur :x:** - Vous n'avez pas les permissions pour faire cela !");
    let embed = new Discord.RichEmbed()
    .setTitle(":broom: - Entretien des salons")
    .setColor('RANDOM')
    .setDescription("Combien de message souhaite tu supprimer ?")
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setFooter(message.author.username);
    if (!args[0]) return message.channel.send(embed);
 
 
    let embedsuppr = new Discord.RichEmbed()
    .setTitle(":broom: - Entretien des salons")
    .setColor('RANDOM')
    .setDescription(`Je viens de supprimé ***${args[0]} messages*** pour vous !`)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setFooter(message.author.username);
 
    message.delete().catch();
 
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel
         .send(embedsuppr)
         .then(msg => msg.delete(5000));
    });
  }
});

 // Envoyer un message en tant que bot //
 client.on("message", message => {
  if(message.content.startsWith(prefix + "say")&& message.member.hasPermission("ADMINISTRATOR")) {
    let args = message.content.split(" ").slice(1);
    let botmessage = args.join(" ");
 
    if(!args[0]) return message.channel.send(":x: - Erreur, veuillez recommencer à l'aide de la commande say votre message");
    const embed = new Discord.RichEmbed()
    .setColor('bf3b39')
    .setTitle("** 💬 - Message**")
    .setDescription(botmessage)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setFooter(message.author.username);
    message.channel.send(embed);
    message.delete();
  }
});
