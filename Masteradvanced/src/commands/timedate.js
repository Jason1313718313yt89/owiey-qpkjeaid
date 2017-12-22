exports.run = (client, message, args) => {
    const { RichEmbed, version } = require('discord.js');
    const config = require('../storages/config.json');    



    var embed = new RichEmbed()
    .setColor("RANDOM")
    .addField("Current Time-Date is", `${new Date()}`) 
    message.channel.send({ embed })
}

exports.config = {
    command: 'timedate',
    aliases: ['date', 'time'],
    plevel: "User",
    description: "Time and Date",
    usage: ".timedate",
    category: "General"
};

exports.extra = {
    hidden: false
};