exports.run = (client, message, args) => {
    /*
        Just so you know, that i'm awesome
    */

    var kickuser = require('../functions/kickuser.js');

    kickuser(client, message, args);
};

exports.config = {
    command: 'kick',
    aliases: ['usermyfoot'],
    plevel: "Kicker",
    description: "Kicks a User!",
    usage: "kick <user> <reason>",
    category: "Moderation"
};

exports.extra = {
    hidden: false
};
