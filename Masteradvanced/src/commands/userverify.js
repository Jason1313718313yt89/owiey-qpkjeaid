exports.run = (client, message, args) => {
    const { RichEmbed, version } = require('discord.js');
    const config = require('../storages/config.json');    
    
    
      let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Mention a user!').catch(console.error);
      let guild = message.guild;
      let modlog = message.guild.channels.find('name', 'mod-log');
      if (!modlog) return message.reply('I cannot find a #mod-log channel');
                   return client.channels.get(modlog.id).send(`${message.mentions.users.first()} Has Been Declined By *${message.author.username}*`).then(() => message.guild.member(user).kick());
      
    }
    
    exports.config = {
        command: 'decline',
        aliases: ['unverify'],
        plevel: "Administrator",
        description: "unverify a bot",
        usage: ".decline <bot>",
        category: "Guild Owners"
    };
    
    exports.extra = {
        hidden: false
    };