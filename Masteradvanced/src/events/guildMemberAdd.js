exports.run = (client, member) => {
	const cookies = require('cookiesdb');
	cookies.fetchCookies(`servstatus_${member.guild.id}`).then(c => {
    if (member.user === client.user) return;
    if (c.text === "false") return;

    	cookies.fetchCookies(`servwelcome_${member.guild.id}`).then(w => {
    		cookies.fetchCookies(`servwchannel_${member.guild.id}`).then(d => {
                if (!d.text) return;
    			var welcomeMSG = w.text.replace("{user}", member.user).replace("{code}", member.user.discriminator).replace("{members}", member.guild.memberCount).replace("{server}", member.guild.name);
    			member.guild.channels.get(d.text).send(welcomeMSG)
    		})
		})
	})
	cookies.fetchCookies(`autorole_${member.guild.id}`).then(a => {
		cookies.fetchCookies(`astats_${member.guild.id}`).then(b => {
			if (b.text === "false") return;
				var arole = member.guild.roles.find('name', a.text);
				member.addRole(arole)
		})
	})
};
