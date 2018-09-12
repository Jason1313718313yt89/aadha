const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./register.json", "utf8"));
    const { RichEmbed } = require('discord.js')

exports.run = async (bot, message, args) => {
    const cookies = require("cookiesdb")
  const moment = require('moment')
    require('moment-duration-format')
        const ms = require("parse-ms")
        let userO = message.author
                let user = message.author

      const db = require("quick.db")
  if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };
 
                    if( warns[userO.id].warns == 1){
      var embed = new RichEmbed()
           .setColor('RANDOM')
           .setDescription('You are already registered With PenguBoat Bank!')
                  message.channel.send(embed)
                     .then(message => {
                message.delete(30000);
            })
        return;
    };    
	


  warns[user.id].warns++;
  cookies.updateCookies(`globalCredits_${message.author.id}` , 50)

  fs.writeFile("./register.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });


message.channel.send(`<a:tickg:473984512708050945> Success You have registered with The PenguBoat Bank!\n__I have given you 50 Coins to start off!!__` )
bot.channels.get('477996279679549470').send(`${message.author.username} Has Registered To The PengiBoat Bank! +50 Coins!`)

}
exports.config = {
    command: 'register',
    aliases: ['reputation'],
    plevel: "User",
    description: "Rep a user",
    usage: "rep",
    category: "Currency"
};

exports.extra = {
    hidden: false
};