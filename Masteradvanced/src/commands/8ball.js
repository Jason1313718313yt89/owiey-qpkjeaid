exports.run = (client, message, args) => {
	var eightball = require('../functions/8ball.js');
	
	eightball(client, message, args);
};

exports.config = {
    command: '8ball',
    aliases: ['askme', 'magic8'],
    plevel: "User",
    description: "ask the magical ball something.",
    usage: "8ball <Question>",
    category: "General"
};

exports.extra = {
    hidden: false
};