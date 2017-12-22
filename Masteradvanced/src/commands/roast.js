exports.run = (client, message, args) => {
	var eightball = require('../functions/roast.js');
	
	eightball(client, message, args);
};

exports.config = {
    command: 'roast',
    aliases: ['fire', 'burn'],
    plevel: "User",
    description: "Roasts A Certain Member",
    usage: "roast <member>",
    category: "General"
};

exports.extra = {
    hidden: false
};