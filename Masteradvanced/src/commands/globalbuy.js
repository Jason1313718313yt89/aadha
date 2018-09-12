exports.run = (client, message, args) => {
	var buy = require('../functions/buy.js');
	
	buy(client, message, args);
};

	
exports.config = {
    command: 'buy',
    aliases: [],
    plevel: "User",
    description: "buy items in the market",
    usage: "buy",
    category: "Currency"
};

exports.extra = {
    hidden: false
};