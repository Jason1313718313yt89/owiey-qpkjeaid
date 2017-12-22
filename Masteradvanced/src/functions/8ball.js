function eightball(client, message, args) {
	var sayings = ["It is certain","It is decidedly so","Without a doubt","Yes, definitely","You may rely on it","Yep.","Most likely","Nope.","Yes","Signs point to yes","Haha No.","Ask again later","Better not tell you now","Cannot predict it now | Confused","Concentrate and ask again","Don't count on it","My reply is no","My Magical Ball say no","Fuck No.","Fuck Yes."];
	
	if (!args.join(' ')) return message.channel.send('Please Supply a Question!');
	if (!args.join(' ').endsWith('')) return message.channel.send('ERROR..... Cracking the System folder/commands/MasterAdvanced.`');
	
	var random = sayings[Math.floor(Math.random() * sayings.length)];
	
	var { RichEmbed } = require('discord.js');
	message.delete()
	var embed = new RichEmbed()
		.setColor("RANDOM")
		.addField('Question:', args.join(' '))
		.addField('The Magical Balls Answer is', random)
		.setAuthor(message.author.username, message.author.avatarURL)
	message.channel.send({ embed })
};

module.exports = eightball;