exports.run = (client, message, args) => {
    message.delete()
  const { RichEmbed, version } = require('discord.js');
  const config = require('../storages/config.json');    
  
    let user = message.mentions.users.first();
      if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("No Perms!");
      if (message.mentions.users.size === 0) return message.reply("Mention A Bot To Get Verified");
      let member = message.guild.member(message.mentions.users.first());
      if (!member) return message.reply(":no_entry_sign: **Error:** That user does not seem valid.");
      let name = message.content.split(" ").splice(2).join(" ");
      let role = message.guild.roles.find("name", 'Verified Bots');
      if (!role) return message.reply(`:no_entry_sign: **Error:** ${name} isn't a role on this server! Please Create A Role Called Verified Bots`);
      let rolePosition = role.position;
      member.addRole(role).catch(e => {
      });
        let rrole = message.guild.roles.find("name", 'Unverified Bots');
  
      member.removeRole(role).catch(e => {
          return message.channel.send(`:no_entry_sign: **Error:**\n${e}`);
      });
    let guild = message.guild;
    let modlog = message.guild.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('I cannot find a #mod-log channel');
      message.channel.send(`Done "Verified Bots" Role Has Been Verified To Give to ${message.mentions.users.first()}`);var embed = new RichEmbed()
       
      return guild.channels.get(modlog.id).send(`${message.mentions.users.first()} has just been verified by *${message.author.username}#${member.user.discriminator}*`).then(() => message.guild.member(user).addRole(role))
  
      }
                                 
                                
  exports.config = {
      command: 'verify',
      aliases: ['add'],
      plevel: "Administrator",
      description: "Verify A Bot",
      usage: ".verify <bot>",
      category: "Guild Owners"
  };
  
  exports.extra = {
      hidden: false
  };