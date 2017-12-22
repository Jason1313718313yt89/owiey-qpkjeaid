function welcomemsg(client, msg, args) {
    const cookies = require('cookiesdb');
    const config = require('../storages/config.json');
    cookies.fetchCookies(`guildConf_${msg.guild.id}`).then(p => {
    if (!p.text) {
        p.text = config.prefix;
    }
    const { RichEmbed } = require('discord.js');
    let channelid;

    const embed = new RichEmbed()
        .setColor("FFA500")
        .setDescription(`Example is | Welcome {user} to {server}`);

    cookies.fetchCookies(`servgstatus_${msg.guild.id}`).then(s => {
        cookies.fetchCookies(`servgchannel_${msg.guild.id}`).then(c => {
            cookies.fetchCookies(`servbye_${msg.guild.id}`).then(w => {
                s.text = args[1];
                c.text = msg.mentions.channels.first();
                w.text = args.slice(2).join(' ');

                if (!c.text) return msg.channel.send({ embed });
                else channelid = msg.mentions.channels.first().id;

                if (args[1] !== "true" && args[1] !== "false") return msg.channel.send('Error not found..');

                if (args[1] === "false"){
                	cookies.updateText(`servgstatus_${msg.guild.id}`, args[1]).then(s => {
                		msg.channel.send('Goodbye Message Has Been Set To : false.!');
                		if (!w.text) return;
                	})
                };


                if (args[1] === "true") {
                    if (!w.text) return msg.channel.send({ embed });
                                
                cookies.updateText(`servgstatus_${msg.guild.id}`, args[1]).then(s => {
                    cookies.updateText(`servgchannel_${msg.guild.id}`, channelid).then(c => {
                        cookies.updateText(`servbye_${msg.guild.id}`, args.slice(2).join(' ')).then(w => {
                            var embed2 = new RichEmbed()
                                .setColor("FF3333")
                                .setDescription(`System Changed | Goodbye Message is Now Set to : true :\n\`\`\`\n${w.text}\`\`\`\n\n**Sending to**: ${msg.guild.channels.get(channelid)}\n**Status**: ${s.text}`)
                            msg.channel.send({ embed: embed2 })
                            })
                        })
                    })
            		}	
                })
            })
        })
    })
};

module.exports = welcomemsg;
