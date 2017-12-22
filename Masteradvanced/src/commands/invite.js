exports.run = (client, message) => {
    message.channel.send("*Here You Go , I slided it to your dms :wink: ...*").then(() => message.author.send(`Invite me here | https://discordapp.com/oauth2/authorize?client_id=386238896327098379&scope=bot&permissions=2103801919\n|Discord Link|https://discord.gg/9HYA8vw|`));
};

exports.config = {
    command: 'bot',
    aliases: ['inv'],
    plevel: "User",
    description: "Sends the OAuth2 Invite for the Bot",
    usage: "invite",
    category: "General"
};

exports.extra = {
    hidden: false
};