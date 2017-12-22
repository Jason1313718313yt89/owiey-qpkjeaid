exports.run = (client, message) => {
    const moment = require('moment');
    require('moment-duration-format');
    const { RichEmbed, version } = require('discord.js');
    const config = require('../storages/config.json');
    const uptime = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
    var embed = new RichEmbed()
        .setColor("RANDOM")
        .setFooter('Owners | Lad | Wolfie')
        .setTimestamp()
        .setThumbnail(`${message.author.displayAvatarURL}`)
        .setAuthor(`${client.user.username} Stats`, client.user.avatarURL)
        .addField('Bot Version', 'v' + config.version, true)
        .addField('Uptime', uptime, true)
		.addField('Guilds', client.guilds.size.toLocaleString(), true)
		.addField('Shard Count','[0/4](https://discord.gg/9HYA8vw)', true)
        .addField('Members', client.users.size.toLocaleString(), true)
        .addField('Discord.js V', `11.2.1`, true)

    message.channel.send({ embed })
}

//client.users.size.toLocaleString()
//client.guilds.size.toLocaleString()
exports.config = {
    command: 'info',
    aliases: ['botinfo', 'stats'],
    plevel: "User",
    description: "Sends you the Bot Information",
    usage: "info",
    category: "General"
};

exports.extra = {
    hidden: false
};
