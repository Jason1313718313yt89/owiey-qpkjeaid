exports.run = (client, message, args) => {
  const { RichEmbed, version } = require('discord.js');
  const config = require('../storages/config.json');
  if(message.member.hasPermission("KICK_MEMBERS")) {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
   let modlog = client.channels.find('name', 'loggies');
  if (!modlog) return message.reply('I cannot find a logs channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the warning.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
    var embed = new RichEmbed()
  .setColor('RANDOM')
  .setTimestamp()
  .addField('Action:', 'Warning')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Reason', reason);
  message.channel.send(':white_check_mark: Success! I\'ve logged the warning in <#293573342999609345>.')
    return client.channels.get(modlog.id).send({embed});
};
}

exports.config = {
    command: 'warn',
    aliases: ['Warns', 'Wern'],
    plevel: "Moderation",
    description: "Warns somebody.",
    usage: "warn",
    category: "Moderation"
};

exports.extra = {
    hidden: false
};