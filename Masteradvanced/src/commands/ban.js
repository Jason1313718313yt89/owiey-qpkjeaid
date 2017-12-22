exports.run = (client, message, args) => {
    /*
        Just so you know, that i'm awesome
    */

    var banuser = require('../functions/banuser.js');

    banuser(client, message, args);
};

exports.config = {
    command: 'ban',
    aliases: ['banuser'],
    plevel: "Banner",
    description: "Ban a User!",
    usage: "ban <user> <reason>",
    category: "Moderation"
};

exports.extra = {
    hidden: false
};
