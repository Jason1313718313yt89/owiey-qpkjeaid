exports.run = (client, msg, args) => {
	const cookies = require('cookiesdb');

	cookies.fetchCookies(`autorole_${msg.guild.id}`).then(a => {
		cookies.fetchCookies(`astats_${msg.guild.id}`).then(b => {
			b.text = args[0];

			if (args[0] !== "true" && args[0] !== "false")
				return msg.channel.send('Enable/disabled not found.');

			if (args[0] === "false") {
				cookies.updateText(`astats_${msg.guild.id}`, args[0]).then(d => {
					msg.channel.send(' Setrole System : false.')
				})
			}

			if (args[0] === "true") {
				if (!msg.guild.roles.find('name', args.slice(1).join(' ').trim())) return msg.channel.send('Please specify a Proper Role name!');
				cookies.updateText(`autorole_${msg.guild.id}`, args.slice(1).join(' ').trim()).then(c => {
					cookies.updateText(`astats_${msg.guild.id}`, b.text).then(z => {
						msg.channel.send(`Set the Autorole to **${args.slice(1).join(' ').trim()}**`)
					})
				})
			}
		})
	})
};

exports.config = {
    command: 'setrole',
    aliases: ['setauto'],
    plevel: "Administrator",
    description: "Sets the guild setrole",
    usage: "setrole <disable/enable> <role name>",
    category: "Moderation"
};

exports.extra = {
    hidden: false
};
