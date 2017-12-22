exports.run = (client, message) => {
    const cookies = require('cookiesdb');
    var { RichEmbed } = require('discord.js');

    cookies.fetchCookies(message.author.id).then(c => {
        var embed = new RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle("Savings Account!")
            .setDescription(`You have ${c.value} Coins in Your Savings account! !`)
        message.channel.send({ embed })
    })
};

exports.config = {
    command: 'balance',
    aliases: ['savings'],
    plevel: "User",
    description: "Checks the amount of coins you have in your savings account.",
    usage: "balance",
    category: "Coins/Eco"
};

exports.extra = {
    hidden: false
};
