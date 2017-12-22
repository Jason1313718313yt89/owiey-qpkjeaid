exports.run = (client, message) => {
    const moment = require('moment');
    require('moment-duration-format');
    const { RichEmbed, version } = require('discord.js');
    var user = message.mentions.users.first();
	var member = message.guild.member(user);
    const config = require('../storages/config.json');
    const uptime = moment.duration(client.uptime).format(' D [days], H [hours], m [mins], s [secs]');
    var embed = new RichEmbed()
	.setColor('RANDOM')
    .setThumbnail( `${message.author.displayAvatarURL}`)
	.addField('Total Server Members', `${message.guild.memberCount} Members`, true)
	.addField('Total Channels', message.guild.channels.size.toLocaleString(), true)
	.addField('Guild Owner', message.guild.owner.user, true)
	.addField('Server ID', message.guild.id, true)
	.addField('Total Bots in this Server', `${message.guild.members.filter(m=>m.user.bot).size} bots`, true)
	.addField('Created At', message.guild.createdAt.toLocaleString(), true)
    .addField('Number Of Roles', message.guild.roles.size, true)
	    message.channel.send({ embed })
}

exports.config = {
    command: 'serverinfo',
    aliases: ['sinfo', 'sstats'],
    plevel: "User",
    description: "Sends you the Server Information",
    usage: "serverinfo",
    category: "General"
};

exports.extra = {
    hidden: false
};