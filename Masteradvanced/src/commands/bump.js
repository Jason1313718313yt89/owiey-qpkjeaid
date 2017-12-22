exports.run = (client, message, args) => {
    const { RichEmbed, version } = require('discord.js');
    const config = require('../storages/config.json');    

    lonk = message.channel.createInvite()
        var resolvedProm = Promise.resolve(lonk);
        var thenProm = resolvedProm.then(function(value) {
            const moment = require('moment');
            let today = moment().format('l')
	var embed = new RichEmbed()
  .setColor("RANDOM")
  .setTitle("Bumped Server :smile:")
   .addField('Guilds Owner',  `${message.guild.owner.user}`)
  .addField('Bumped Link', value, true) 
  .addField('Total Channels', message.guild.channels.size.toLocaleString(), true)  
  .addField('Server Name', `${message.guild.name}`)
.setFooter(`Bumped By : ${message.author.username} Come Back `+ moment().endOf('day').fromNow() + '.' )
  .addField('Member Count',`${message.guild.memberCount} `);
  
  const cookies = require('cookiesdb');
  cookies.fetchCookies(`lastBump_${message.guild.name + message.guild.id}`).then(i => {
      if (i.text === today) return message.channel.send("Failed To Proceed... Bump Server Command Used Today Come Back " + moment().endOf('day').fromNow() + '.');
      cookies.updateText(`lastBump_${message.guild.name + message.guild.id}`, today).then(() => {
             message.channel.send(`Done Server Bumped!  Bump Command Added You 1000 Coins! :tada: <3`);
           cookies.updateCookies(message.author.id, 1000).then(c => {
              console.log(`Added ${c.value} Coins to Username : ${message.author.tag}`)
                     client.channels.get('386844196524261386').send({embed});
                });
                    });
        });
    });

            }

exports.config = {
    command: 'bump',
    aliases: ['share', 'server'],
    plevel: "Banner",
    description: "Shares Your Server With MasterAdvanced Server",
    usage: ".bump",
    category: "Admin"
};

exports.extra = {
    hidden: false
};