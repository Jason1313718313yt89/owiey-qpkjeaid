function kickuser(client, message, args) {
    var user = message.mentions.users.first() || message.guild.members.get(args[0]);
    var reason = args.slice(1).join(' ');
    var modlog = message.guild.channels.find('name', 'loggies');

    if (!modlog) return message.channel.send('Please make a Channel Called **mod-log** !');
    if (!user) return message.channel.send('Cannot kick That User!');
    if (!reason) return message.channel.send('Supply A Reason');

    modlog.send(`\nUser**: ${user.tag}\n**Reason**: ${reason}\n**Admin**: ${message.author.tag}`);
    message.channel.send('User Has Been Kicked!').then(() => message.guild.member(user).kick());
};

module.exports = kickuser;
