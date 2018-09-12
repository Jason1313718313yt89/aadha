  const { RichEmbed, version } = require('discord.js');
    const config = require('../storages/config.json');    
  
module.exports.run = async (client, message, args) => {

let embed = new RichEmbed()
.setColor("FFFF00")
.setDescription(`React! below`)

message.channel.send(embed).then(embed => {
        embed.react(`🎉`)
       client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "✅") {
    console.log(reaction.emoji.users);
      message.author.send(`You just reacted!`)
        }
       })
       
    });

}
  
                                              
exports.config = {
    command: 'giveaway',
    aliases: ['freegiveaway','free'],
    plevel: "Staff",
    description: "Checks the API Latency for Discord!",
    usage: "ping",
    category: "ヅ General ヅ"
};

exports.extra = {
    hidden: false
};