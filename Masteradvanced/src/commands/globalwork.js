
exports.run = async(client, message) => {

    var cookies = require('cookiesdb')
    const moment = require('moment')
    require('moment-duration-format')
    var db = require('cookiesdb')
    const config = require('../storages/config.json');


    var lolrandom = Math.floor(Math.random() * 90);

   let user1 = message.mentions.users.first() || message.author

 let fetchedDBB = await db.fetchCookies(`customApp_${user1.id}`);
        if (!fetchedDBB.text) {
            fetchedDBB.text = `${user1.username} Ltd`
        };

            const dbs = require('quick.db');

const fs = require("fs")
  dbs.fetch(`prefix10_${message.guild.id}`).then(c => {
        var prefix = c;
        
        if (!prefix) { // If c.text a.k.a prefix doesn't exist, prefix will be "!"
            prefix = config.prefix;
       
    }
    const { RichEmbed } = require('discord.js')
const fs = require("fs")
  

  let upgrade = JSON.parse(fs.readFileSync("./upgrade.json", "utf8"));
   let userUp = message.mentions.users.first();
        if (!userUp) {
            userUp = message.author;
        }
  if(!upgrade[userUp.id]) upgrade[userUp.id] = {
    upgrade: 0
  };

  fs.writeFile("./upgrade.json", JSON.stringify(upgrade), (err) => {
    if (err) console.log(err)
  })
        
           let owner = JSON.parse(fs.readFileSync("./owner.json", "utf8"));
   let userO = message.mentions.users.first();
        if (!userO) {
            userO = message.author;
        }
  if(!owner[userO.id]) owner[userO.id] = {
  owner: 0
  };

  fs.writeFile("./owner.json", JSON.stringify(owner), (err) => {
    if (err) console.log(err)
  })
              if(upgrade[message.author.id].upgrade  == 100){
                          owner[userO.id].owner++;

          }
          if(upgrade[message.author.id].upgrade == 210){
         
                          owner[userO.id].owner++;

                                }       
        
                    if( upgrade[userO.id].upgrade == 0){
      var embed = new RichEmbed()
           .setColor('RANDOM')
           .setDescription(`You cannot work at the moment! \n You currently have 0 upgrades! Please buy a upgrade from the market \n **Usage**: \`${prefix}buy upgrade\` **NOTE: Lvl 1 Upgrade is Free**`)
                  message.channel.send(embed)
                     .then(message => {
                message.delete(30000);
            })
        return;
    };    
	let warns = JSON.parse(fs.readFileSync("./downloads.json", "utf8"))
            
            
                                      
              if(!warns[userUp.id]) warns[userUp.id] = {
                warns: 0
              };

              
   fs.writeFile("./downloads.json", JSON.stringify(warns), (error) => {
                if (error) console.log(error)
       const ms = require('parse-ms')
                         
  
   let cooldown = 120000
   
    cookies.fetchCookies(`lastWork_${message.author.id}`).then(i => {

        if (i.text !== null && cooldown - (Date.now() - i.text) > 0) {
          let timeObj = ms(cooldown - (Date.now() - i.text));
          
          return message.channel.send(`<:error:473988063001837571> Command Ratelimited! \n Available in **${timeObj.minutes} Minutes ${timeObj.seconds} seconds** `)   .then(message => {
                message.delete(8000);
            })
        }else{
                        cookies.updateText(`lastWork_${message.author.id}`, Date.now()).then(() => {

let lol = message.author.id === "293805585378574336" 
     var embed = new RichEmbed()
	    .setColor('FFFF00')
           .setAuthor(message.author.username, message.author.avatarURL)
     .setFooter("Worked Successfully!")
     .setDescription(`Level: **${upgrade[message.author.id].upgrade}** - Downloads: ${warns[message.author.id].warns}`)
.setTimestamp()
    .addField( `<a:tickg:473984512708050945> Worked Successfully!`, owner[userO.id].owner > 0 && owner[userO.id].owner < 1000?`You've Worked at ${fetchedDBB.text} and got paid **__${10 * upgrade[userUp.id].upgrade * 1.5} Coins__**\nBonus - ${warns[message.author.id].warns * 10} Coins from your app downloads`:`\n----- __You've Received : ${10 * upgrade[userUp.id].upgrade} Coins__! \nBonus - ${warns[message.author.id].warns * 10} Coins from your downloads `)
                        .setFooter(message.author.username)

     message.channel.send({embed})
         
              if(owner[userO.id].owner > 0 && owner[userO.id].owner < 1000){
  return cookies.updateCookies(`globalCredits_${message.author.id}`, 10 * upgrade[userUp.id].upgrade * 1.5)

}
             if(upgrade[userUp.id].upgrade > 0 && upgrade[userUp.id].upgrade < 500){
  return cookies.updateCookies(`globalCredits_${message.author.id}`, 10 * upgrade[userUp.id].upgrade)
                   return cookies.updateCookies(`globalCredits_${message.author.id}`, warns[message.author.id].warns * 10)


}
                          
                        })
        }
    })
})
})
}
                                                                               
                                                                               
exports.config = {
    command: 'work',
    aliases: [],
    plevel: "User",
    description: "work to recieve tips",
    usage: "work",
    category: "Currency"
};

exports.extra = {
    hidden: false
};