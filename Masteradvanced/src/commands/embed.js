     exports.run = (client, message, args) => {

        let messageToSay = args.join(" ");
		
      var { RichEmbed } = require('discord.js');
	message.delete()
	var embed = new RichEmbed()
		.setColor("RANDOM")
		.setAuthor(message.author.username, message.author.avatarURL)
		.addField(`${message.author.username} Told Me to say :`, messageToSay )
	message.channel.send({ embed })
};
   
      exports.config = {
    command: 'embed',
    aliases: ['say', 'embeded'],
    plevel: "Moderation",
    description: "Embed a something u want to say",
    usage: "embed <message>",
    category: "Admin"
};

exports.extra = {
    hidden: false
};