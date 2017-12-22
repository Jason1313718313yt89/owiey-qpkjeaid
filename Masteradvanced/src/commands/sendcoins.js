exports.run = (client, message, args) => {
    const cookies = require('cookiesdb');
    var {
        RichEmbed
    } = require('discord.js');
    let increase = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let sender = message.author;

    if (!increase || !user || isNaN(increase) || increase.startsWith('-') || message.author.id === user.id) {
        message.channel.send('Mention A User..!')
            .then(message => {
                message.delete(5000);
            })
        return;
    };

    cookies.fetchCookies(message.author.id).then((d) => {
        if (increase > d.value) return message.channel.send('No Users Exist..')

        cookies.updateCookies(user.id, parseInt(increase)).then((i) => {

            var embed = new RichEmbed()
                .setColor(0xfd4848)
                .setTitle('Welcome To The Bank')
                .setDescription(`${sender} sent ${increase} coins to ${user}!`)
            message.channel.send({
                embed
            })

            cookies.updateCookies(message.author.id, parseInt('-' + increase)).then((i) => {

            });


        });
    })
}

exports.config = {
    command: 'sendcoins',
    aliases: [],
    plevel: "User",
    description: "Sends your coins to a Users!",
    usage: "sendcoins <@user> <amount of coins>",
    category: "Coins/Eco"
};

exports.extra = {
    hidden: false
};
