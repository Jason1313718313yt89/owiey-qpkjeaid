exports.run = (client, member) => {
	const cookies = require('cookiesdb');
	cookies.fetchCookies(`servgstatus_${member.guild.id}`).then(c => {
    if (member.user === client.user) return;
    if (c.text === "false") return;

    	cookies.fetchCookies(`servbye_${member.guild.id}`).then(w => {
    		cookies.fetchCookies(`servgchannel_${member.guild.id}`).then(d => {
    			if (!d.text) return;
    			var welcomeMSG = w.text.replace("{user}", member.user).replace("{code}", member.user.discriminator).replace("{members}", member.guild.memberCount).replace("{server}", member.guild.name);
    			member.guild.channels.get(d.text).send(welcomeMSG)
    		})
		})
	})
};
