exports.run = (client, message, args) => {
    const cookies = require('cookiesdb');
    const moment = require('moment')
   const ms = require('parse-ms')
  
    const config = require('../storages/config.json');
const { randomRange } = require('../../util/Util');
          const fishes = require('../../assets/json/fishy.json');
const fs = require("fs")            
                       const { Discord , RichEmbed} = require("discord.js")
  
             const db = require("quick.db")

    
   db.fetch(`prefix10_${message.guild.id}`).then(c => {
        var prefix = c;
        
        if (!prefix) { // If c.text a.k.a prefix doesn't exist, prefix will be "!"
            prefix = config.prefix;
       
    }
  let warns = JSON.parse(fs.readFileSync("./register.json", "utf8"));
        

  
  if(!warns[message.author.id]) warns[message.author.id] = {
    warns: 0
  };
             if( warns[message.author.id].warns == 0){
      var embed = new RichEmbed()
           .setColor('RANDOM')
           .setDescription(`You are not registered yet please register before using any economy commands!\nUsage: \`${prefix}register\`!`)
                  message.channel.send(embed)
                     .then(message => {
                message.delete(30000);
            })
        return;
    };    
       let owner = JSON.parse(fs.readFileSync("./bait.json", "utf8"));
        

  
  if(!owner[message.author.id]) owner[message.author.id] = {
    owner: 0
  };
             if( owner[message.author.id].owner == 0){
      var embed = new RichEmbed()
           .setColor('RANDOM')
           .setDescription(`You currently have no fish bait! Please buy some and use this command once again! !\nUsage: \`${prefix}buy bait\`!`)
                  message.channel.send(embed)
                     .then(message => {
                message.delete(30000);
            })
        return;
    }
       
            
   let cooldown = 60000
   
    cookies.fetchCookies(`lastDailyss_${message.author.id}`).then(i => {

        if (i.text !== null && cooldown - (Date.now() - i.text) > 0) {
          let timeObj = ms(cooldown - (Date.now() - i.text));
          
          return message.channel.send(`<:error:473988063001837571> Command Ratelimited! \n Available in :** ${timeObj.seconds} seconds** `)   .then(message => {
                message.delete(8000);
            })
        }else{

  
          var {
        RichEmbed
    } = require('discord.js');
  
            let user = message.mentions.users.first() || message.author;
	const fishID = Math.floor(Math.random() * 10) + 1;
		let rarity;
		if (fishID < 8) rarity = 'common'
else if (fishID < 10) rarity = 'uncommon';
          		else rarity = 'rare';

          		const fish = fishes[rarity];
	          		const worth = randomRange(fish.min, fish.max);
 
                                        owner[message.author.id].owner--;

            
              fs.writeFile("./bait.json", JSON.stringify(owner), (error) => {
                if (error) console.log(error)
              })
message.channel.send(`${fish.symbol}**${worth} Coins** !`)
            cookies.updateCookies(`globalCredits_${user.id}`, worth).then(pb => {
              cookies.updateText(`lastDailyss_${message.author.id}`, Date.now()).then(() => {


            })
        })
}
    })
})
}
exports.config = {
    command: 'fish',
    aliases: ['fishy'],
    plevel: "User",
    description: "Collect Daily coins every day  ",
    usage: "daily",
    category: "Currency"
};

exports.extra = {
    hidden: false
};
