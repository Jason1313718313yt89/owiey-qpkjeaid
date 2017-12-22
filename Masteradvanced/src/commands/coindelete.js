exports.run = (client, message, args) => {
    var user = message.mentions.users.first();
    var amount = args.slice(1).join(' ');
    const cookies = require('cookiesdb');

    if (!user || !user || isNaN(amount)) {
        message.channel.send('Mention A User.')
            .then(message => {
                message.delete(7000);
            })
        return;
    };

    cookies.updateCookies(user.id, -parseInt(amount)).then(c => {
        message.channel.send(`Removed **${amount}** of Coins from **${user.tag}**`)
    })
};

exports.config = {
    command: 'coinsremove',
    aliases: [],
    plevel: "Bot Owner",
    description: "Removes coins from a users account",
    usage: "coinsremove <@user> <amount of coins>",
    category: "Admin"
};

exports.extra = {
    hidden: false
};
