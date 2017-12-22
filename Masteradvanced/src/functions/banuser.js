function banuser(client, message, args) {
    var user = message.mentions.users.first() || message.guild.members.get(args[0]);
    var reason = args.slice(1).join(' ');
    var modlog = message.guild.channels.find('name', 'loggies');
	

    if (!modlog) return message.channel.send('Please make a Channel Called **mod-log** !');
    if (!user) return message.channel.send('Cant ban The User');
    if (!reason) return message.channel.send('Supply A Reason before ban.');

    modlog.send(`\nUsername**: ${user.tag}\n**Reason**: ${reason}\n**Moderator**: ** ${message.author.tag} **`);
    message.channel.send('User Has Been Banned!').then(() => message.guild.member(user).ban());
};

module.exports = banuser;
