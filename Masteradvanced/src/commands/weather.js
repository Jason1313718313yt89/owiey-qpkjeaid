exports.run = (client, message, args) => {
    const { RichEmbed, version } = require('discord.js');
    const config = require('../storages/config.json');    
}

      exports.config = {
        command: 'weather',
        aliases: ['snow', 'cloud'],
        plevel: "User",
        description: "Weather of a certain area",
        usage: ".weather <area>",
        category: "General"
    };
    
    exports.extra = {
        hidden: false
    };