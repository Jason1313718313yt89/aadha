exports.run = (client, message, args) => {
  const { RichEmbed, version } = require('discord.js');
    const config = require('../storages/config.json');    
message.channel.fetchMessages({ limit: 99 }).then(messages => {
messages = messages.filter(m => m.author.id === client.user.id).array().slice(0, 99);
    message.channel.bulkDelete(messages).catch(err => console.error(err));
});

  
}
exports.config = {
    command: 'cb',
    aliases: [],
    plevel: "Cleaner",
    description: "Clears Bots",
    usage: ".clean",
    category: "Built In Commands"
};

exports.extra = {
    hidden: false
};