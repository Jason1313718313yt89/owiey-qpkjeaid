/*
    The help Command is based of Guidebot, but with less features :/
    GuideBot => https://github.com/An-Idiots-Guide/guidebot/
*/

exports.run = (client, message, args, level) => {
    const cookies = require('cookiesdb');
    const config = require('../storages/config.json');
    const {
        RichEmbed
    } = require('discord.js');


    cookies.fetchCookies(`guildConf_${message.guild.id}`).then(p => {
    	let prefix = p.text;
    	if (!prefix) {
    		prefix = config.prefix;
    	}
    if (!args[0]) {

        const myCommands = message.guild ? client.commands.filter(cmd => client.levelCache[cmd.config.plevel] <= level) : client.commands.filter(cmd => client.levelCache[cmd.config.plevel] <= level && cmd.extra.hidden !== true);
        const commandNames = myCommands.keyArray();
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);


        let currentCategory = "";
        let output = `__**${message.guild.name}**__ Help List Below!`;
        const sorted = myCommands.array().sort((p, c) => p.config.category > c.config.category ? 1 : p.config.command > c.config.command && p.config.category === c.config.category ? 1 : -1);
        sorted.forEach(c => {
            const cat = c.config.category;
            if (currentCategory !== cat) {
                output += `\n__${cat}__\n`;
                currentCategory = cat;
            }
            output += `**${prefix}${c.config.command}**: ${c.config.description}\n`;
        });

        var embed = new RichEmbed()
            .setColor("RANDOM")
            .setDescription(output)
            .setAuthor(message.author.username, message.author.avatarURL)
        message.channel.send(`Here They Are.`).then(() => message.channel.send({
            embed
        }))
    } else {
        let cmd = args[0];
        if (client.commands.has(cmd)) {
            cmd = client.commands.get(cmd);
			if (cmd.config.aliases.length === 0) {
				cmd.config.aliases = "No Aliases Set";
			}
            if (level < client.levelCache[cmd.config.plevel]) return;
            var embed = new RichEmbed()
                .setColor("RANDOM")
                .addField('Name', cmd.config.command, true)
                .addField('Description', cmd.config.description, true)
                .addField('Usage', p.text + cmd.config.usage, true)
                .addField('Different Command Names:', cmd.config.aliases, true)
            message.channel.send({
                embed
            })
        }
    }
})
};

exports.config = {
    command: 'helpchat',
    aliases: ['h'],
    plevel: "User",
    description: "Sends the Help Commands through chat",
    usage: "help [Command Name]",
    category: "Helps"
};

exports.extra = {
    hidden: false
};
