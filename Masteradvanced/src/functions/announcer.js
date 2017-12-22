function announcer(client, message, args) {
    var channel = message.guild.channels.get(args[0]) || message.mentions.channels.first(); // It gets the Channel of a Specified Channel ID or Just Mention the Channel
    var messages = args.slice(1).join(' '); // Slices of the Channel ID or Name and joins the String

    if (!channel) return message.channel.send('Please Specify a Channel ID or Name!');
    if (!messages) return message.channel.send('Please Specify a Message!'); // For Preventing the Discord.js Cannot send an empty message Error

    channel.send(messages); // Sends your Message to the Specified Channel
};

module.exports = announcer;