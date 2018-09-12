const db = require('cookiesdb');
const { RichEmbed } = require('discord.js');

    
    const config = require('../storages/config.json');

    exports.run = async (client,message, args)=> {
      const fs = require("fs")
          let cash = JSON.parse(fs.readFileSync("./cash.json", "utf8"));
        let user = message.author
        const db = require("cookiesdb")

             const dbs = require("quick.db")

    
   dbs.fetch(`prefix10_${message.guild.id}`).then(c => {
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
  
  if(!cash[user.id]) cash[user.id] = {
  cash: 1
  };
            
     
             if( cash[message.author.id].cash == 0){
      var embed = new RichEmbed()
           .setColor('RANDOM')
           .setDescription(`You do not have any cash multiplers therefore you cannot use ${prefix}loot yet!\nUsage: \`${prefix}buy cash\`!`)
                  message.channel.send(embed)
                     .then(message => {
                message.delete(30000);
            })
        return;
    };
  
            
            
              fs.writeFile("./cash.json", JSON.stringify(cash), (error) => {
                if (error) console.log(error)
              })
     let cooldown = 30000
   const ms =require("parse-ms")
    db.fetchCookies(`lastCash_${message.author.id}`).then(i => {

        if (i.text !== null && cooldown - (Date.now() - i.text) > 0) {
          let timeObj = ms(cooldown - (Date.now() - i.text));
          
          return message.channel.send(`<:error:473988063001837571> Command Ratelimited! \n Available in :** ${timeObj.seconds} seconds** `)   .then(message => {
                message.delete(8000);
            })
        }else{

      var embed = new RichEmbed()
.setColor(`FFFF00`)
      .setTimestamp()
      .setAuthor(message.author.tag , message.author.avatarURL)
      .setDescription(`${parseInt(5 * cash[user.id].cash / 4)} Coins Was added to your account!`)
      .setFooter(`With A cash multipler of x${cash[user.id].cash / 4}`)
      message.channel.send(embed)
        db.updateCookies(`globalCredits_${user.id}`, `${parseInt(5 * cash[user.id].cash / 4)}` )
                        db.updateText(`lastCash_${message.author.id}`, Date.now()).then(() => {

    })
        }
    })
   })
    }
exports.config = {
    command: 'loot',
    aliases: ['cash'],
    plevel: "User",
    description: "Sends you the Server Information",
    usage: "serverinfo",
    category: "Information"
};

exports.extra = {
    hidden: false
};