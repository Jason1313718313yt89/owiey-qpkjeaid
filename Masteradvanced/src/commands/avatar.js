exports.run = (client, message, args) => {
const { RichEmbed, version } = require('discord.js');
const config = require('../storages/config.json');    


let user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('Mention a user for profile picture :D').catch(console.error);

var embed = new RichEmbed()
.setColor("RANDOM")
     .setTimestamp()
     .setTitle(message.author.username)
     .setImage( `${message.mentions.users.first().displayAvatarURL}`)
     .setFooter("Avatar Command Used At |")
    
     message.channel.send({embed});
}
exports.config = {
    command: 'avatar',
    aliases: ['profile', 'Image'],
    plevel: "User",
    description: "View An Image of A Users Proflie Picture",
    usage: "avatar <user>",
    category: "General"
};

exports.extra = {
    hidden: false
};