exports.run = (client, message, args) => {
    message.delete()
  const { RichEmbed, version } = require('discord.js');
  const config = require('../storages/config.json');    
  
  
    let user = message.mentions.users.first();
      if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("No Perms!");
      if (message.mentions.users.size === 0) return message.reply("Mention A User To Get Verified");
      let member = message.guild.member(message.mentions.users.first());
      if (!member) return message.reply(":no_entry_sign: **Error:** That user does not seem valid.");
      let name = message.content.split(" ").splice(2).join(" ");
      let role = message.guild.roles.find("name", 'Verified Dev(s)');
      if (!role) return message.reply(`:no_entry_sign: **Error:** ${name} isn't a role on this server! Please Create a Role Called Verified Dev(s)`);
      let rolePosition = role.position;
      member.addRole(role).catch(e => {
          return message.channel.send(`:no_entry_sign: **Error:**\n${e}`);
      });
    let guild = message.guild;
     let reason = args.slice(1).join(' ');
    let modlog = message.guild.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('I cannot find a #mod-log channel');
      message.channel.send(`Done "Verified Dev" Role Has Been Verified To Give to ${message.mentions.users.first()}`);var embed = new RichEmbed()
  .setColor("RANDOM")
       .setTimestamp()
       .setTitle('__Verified Dev__')
      .setDescription(`**Verified User ${message.mentions.users.first()} Well Done ! :tada: Check Your Roles!**`)
       .setThumbnail(`${message.mentions.users.first().displayAvatarURL}`)
       .setFooter(`Verifed By ${message.author.username} at`)
  
        message.mentions.users.first().sendMessage("✓  Congratulations You Got Verified By A Staff. Your Bot Has Perms Again ! You Unlocked New Things! :tada: ✓").catch(console.err)
      return guild.client.channels.get(modlog.id).send({embed}).then(() => message.guild.member(user).addRole(role));
    }
  
  
  exports.config = {
      command: 'vu',
      aliases: ['safe'],
      plevel: "Administrator",
      description: "Verify A user",
      usage: ".verify <bot> <user>",
      category: "Guild Owners"
  };
  
  exports.extra = {
      hidden: false
  };