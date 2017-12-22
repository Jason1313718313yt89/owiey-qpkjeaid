function gamemanage(client, message, args) {
    var gameresult = args.join(' ');

    if (gameresult.startsWith(`<@${client.user.id}>`)) {
		gameresult = `@${client.user.username} ${args.slice(1).join(' ')}`
	}

    client.user.setGame(gameresult)
    message.channel.send(`System Playing Status Changed :  **${gameresult}**`)
};

module.exports = gamemanage;
