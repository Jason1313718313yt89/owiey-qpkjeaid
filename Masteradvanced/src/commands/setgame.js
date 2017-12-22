exports.run = (client, message, args) => {
    var gamemanage = require('../functions/gamemanage.js');

    gamemanage(client, message, args);
};

exports.config = {
    command: 'setgame',
    aliases: ['addgame'],
    plevel: "Bot Admin",
    description: "Sets the Bot's Playing Game",
    usage: 'setgame [Game]',
    category: 'Admin'
};

exports.extra = {
    hidden: false
}
