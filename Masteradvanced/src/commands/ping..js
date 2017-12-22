exports.run = (client, message) => {
   
    message.channel.send("*Pinging...*").then(m => m.edit(`Pong!:stopwatch: Took: \`\n${m.createdTimestamp - message.createdTimestamp}ms\`\ API \`\n${Math.round(client.ping)}ms\`\ `)); return message.react("😂");
};


exports.config = {
    command: 'ping',
    aliases: ['pong'],
    plevel: "User",
    description: "Checks the API Latency for Discord!",
    usage: "ping",
    category: "General"
};

exports.extra = {
    hidden: false
};