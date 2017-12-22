exports.run = (client, message) => {
	if (message.author.bot || message.author === client.user || message.channel.type !== "text") return;
	const cookies = require('cookiesdb');
	const config = require('../storages/config.json');
	cookies.fetchCookies(`guildConf_${message.guild.id}`).then(p => {
	let prefix = p.text;
	if (!p.text) {
		prefix = config.prefix;
	}

        if (message.content === `<@${client.user.id}> prefix`) {
        message.channel.send(`This Server prefix is \`\n${prefix}\`\ `)
    }

    if (!message.content.startsWith(prefix)) return;

    const level = client.permlevel(message);

    const args = message.content.split(' ').slice(1); // Arguments :)
    const command = message.content.split(' ')[0].replace(prefix, ''); // For the Custom Prefix

    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command)); // Gets either the Bot Name or the Alias

    if (!cmd) return; // If the command typed doesn't exist, return

    if (level < client.levelCache[cmd.config.plevel]) {
            return message.channel.send(`You do not have permission to use this command.
  Your permsLevel is **${level} (${client.permconfig.permLevels.find(l => l.level === level).name})**
  This command needs **Level ${client.levelCache[cmd.config.plevel]} (${cmd.config.plevel})**`);
    }

    message.author.permLevel = level;

    message.flags = [];
    while (args[0] && args[0][0] === "-") {
        message.flags.push(args.shift().slice(1));
    }

    cmd.run(client, message, args, level);

 })
};
