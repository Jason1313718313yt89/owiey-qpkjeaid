exports.run = (client, message, args) => {
    var user = message.mentions.users.first();
    var amount = args.slice(1).join(' ');
    const cookies = require('cookiesdb');

    if (!user || !user || isNaN(amount) || amount.startsWith('-')) {
        message.channel.send('Mention A user.')
            .then(message => {
                message.delete(5000);
            })
        return;
    };

    cookies.updateCookies(user.id, parseInt(amount)).then(c => {
        message.channel.send(`Added **${amount}** to **${user.tag}**'s Account.`)
    })
};

exports.config = {
    command: 'addcoins',
    aliases: [],
    plevel: "Bot Owner",
    description: "Add A certain amount to a users balance.",
    usage: "addcoins <@user> <amount of coins>",
    category: "Admin"
};

exports.extra = {
    hidden: false
};
