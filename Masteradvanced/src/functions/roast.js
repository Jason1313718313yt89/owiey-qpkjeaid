function eightball(client, message, args) {
	var sayings = ["Hahaha" , "Your Fucking Circled Head Is like my fist inside Your blank","You look like you were voted most likely to masturbate in a movie theater.","You look like you've never tried to bypass the parental controls on your computer.","Fuck that, I'm not roasting a school shooter.,you know how people do that thing where they tilt their head down block your view of your face and theirs and walk away hastily. Is that everyone who gets in a 20m radius of you?","You look like you have a collection of various lotions you use to jack off with","Hmm , Roasting oh wait nothing to roast everything is wrong with you :3"];
	
	if (!args.join(' ')) return message.channel.send('Please Mention a User.!');
	if (!args.join(' ').endsWith('')) return message.channel.send('ERROR..... Cracking the System folder/commands/MasterAdvanced.`');
	    if (message.mentions.users.size === 0) return message.reply(":no_entry_sign: Please mention a user to give the role to.\nExample: `;addrole @user Members`");
    let member = message.guild.member(message.mentions.users.first());
    if (!member) return message.reply(":no_entry_sign: **Error:** That user does not seem valid.");

	var random = sayings[Math.floor(Math.random() * sayings.length)];
	
	var { RichEmbed } = require('discord.js');
	message.delete()
	var embed = new RichEmbed()
		.setColor("#FFA500")
		.addField('Roasting:',`${message.mentions.users.first().username}`)
		.addField('The Roast Is |', random)
		.setAuthor(message.author.username, message.author.avatarURL)
	message.channel.send({ embed })
};

module.exports = eightball;