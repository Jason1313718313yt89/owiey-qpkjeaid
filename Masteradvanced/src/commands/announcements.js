exports.run = (client, message, args) => {
    var announcer = require('../functions/announcer.js');

    announcer(client, message, args);
};

exports.config = {
    command: 'announce',
    aliases: ['announcement'],
    plevel: "Administrator",
    description: "Announces Something on a Channel",
    usage: "announce <Message>",
    category: "Moderation"
};

exports.extra = {
    hidden: false
};