exports.run = (client, message, args) => {
    var goodbye = require('../functions/goodbyemsg.js');

    goodbye(client, message, args);
};

exports.config = {
    command: 'goodbye',
    aliases: ['cya', 'byemsg'],
    plevel: "Administrator",
    description: "Make your own goodbye  Message!",
    usage: "goodbye <#channel> <true/false> <Message>",
    category: "Admin"
};

exports.extra = {
    hidden: false
};
