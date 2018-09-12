exports.run = async (client, message ,args) => {
  const ms = require("ms");
   
  
    const { RichEmbed, version } = require('discord.js');
    const config = require('../storages/config.json');

    let increase = args[1];
  const user = message.mentions.users.first() || client.users.get(args[0]);
    let sender = message.author;
          const cookies = require('cookiesdb');
            const db = require('quick.db');

const fs = require("fs")
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
 if (!user) {
        message.channel.send(' <:error:473988063001837571> Mention a user - E.G <@200598766804271104>')
            .then(message => {
                message.delete(5000);
            })
        return;
    };
 
    if (!increase) {
        message.channel.send(' <:error:473988063001837571> Please Enter an Amount! E.G 100')
            .then(message => {
                message.delete(5000);
            })
        return;
    };
  if (increase.startsWith('-')) {
        message.channel.send(' <:error:473988063001837571> Sending Negative Numbers Now .. You Failed.')
            .then(message => {
                message.delete(5000);
            })
        return;
    };
   if (user.bot) {
        message.channel.send(' <:error:473988063001837571> You cannot send money to a bot')
            .then(message => {
                message.delete(5000);
            })
        return;
    };
    cookies.fetchCookies(`globalCredits_${message.author.id}`).then((d) => {
        if (increase > d.value) {
         message.channel.send('<:error:473988063001837571> You do not have enough to send that amount!')
      .then(message => {
                message.delete(5000);
            })
        return;
    };
   
if (isNaN(increase)) {
        message.channel.send(' <:error:473988063001837571> Please Enter a correct amount.')
            .then(message => {
                message.delete(5000);
            })
        return;
    };
  if (message.author.id === user.id) {
        message.channel.send('<:error:473988063001837571> Cannont send yourself cash!')
            .then(message => {
                message.delete(5000);
            })
        return;
  }
      const fs = require("fs")
    let upgrades = JSON.parse(fs.readFileSync("./quests.json", "utf8"));
   let userUps = message.mentions.users.first();
        if (!userUps) {
            userUps = message.author;
        }
  if(!upgrades[message.author.id]) upgrades[message.author.id] = {
    upgrade: 0
  };
                                       upgrades[message.author.id].upgrades++;

  fs.writeFile("./quests.json", JSON.stringify(upgrades), (err) => {
    if (err) console.log(err)
  })
     let collector = message.channel.createMessageCollector(m => m.author == message.author, {time: 45000});
let collector2 = message.channel.createMessageCollector(m2 => m2.author == message.author, {time: 60000});
      var embed = new RichEmbed() 
      .setColor("RANDOM")
      .addField(`${message.author.tag} Sends` , `${increase} Coins!`)
      .addField(`${user.tag} Gets` , `${parseInt(increase / 1.1111111111)} Coins After (10% Tax.)`)
      .setDescription(`${message.guild.owner} Gets ${parseInt(increase / 6)} Coins`)
      .setFooter(`TYPE ${prefix}confirm or ${prefix}cancel To Proceed Transfer || Deletes in 45 Seconds`)
      message.channel.send(embed).then(message => {
                message.delete(60000);
            })
						collector2.on("collect", m2 => {
							collector2.stop();
							if (m2.content.toLowerCase() == `${prefix}cancel`) {
								m2.channel.send("Canceled transfer. <:error:473988063001837571>").then(message => {
                message.delete(5000);
            })
								return;
              }else if (m2.content.toLowerCase() == `${prefix}confirm`) {
              
								m2.channel.send("Transfer Complete! <:tick:473829452632031255>").then(message => {
                message.delete(5000);
            })
                
								return  cookies.updateCookies(`globalCredits_${message.author.id}`, parseInt('-' + increase)).then((pb) => {
                  return cookies.updateCookies(`globalCredits_${user.id}`, parseInt(increase / 1.1111111111)).then((pbs) => {
                    								let newbal = cookies.fetchCookies(`globalCredits_${message.author.id}`)


      
 let mute = "3s";
increase = parseInt(increase)
    message.channel.send(`<a:tickg:473984512708050945> Success please wait while we are transfering coins to account <a:tickg:473984512708050945>`)
    var embed = new RichEmbed()
    .setColor("RANDOM")
    .setAuthor(user.username , user.avatarURL)
    .addField('<a:tickg:473984512708050945> Transfer Sent' , `Your new balance ${parseInt(pb.value + '-' + increase)} (**${parseInt(increase)}**) Coins <:descrease:487773204253900818>\n${user.username}'s New Balance ${pbs.value}(**${parseInt(increase / 1.1111111111)}**) Coins <:increase:487773169692704778> `)

      console.log(`You have sent <:penguboat:468566426605715483> **$${increase}** Credits to ${user} ( ${user.username}#${user.discriminator} `)
setTimeout(function(){
      message.channel.send({embed})
                                      
    }, ms(mute))
                                    return cookies.updateCookies(`globalCredits_${message.guild.owner.id}`, parseInt(increase / 6))

                          let key = JSON.parse(fs.readFileSync("./key.json", "utf8"));
   let userK = message.mentions.users.first();
        if (!userK) {
            userK = message.author;
        }
                                                key[message.author.id].key++;

  if(!key[userK.id]) key[userK.id] = {
    key: 0
  };
        fs.writeFile("./key.json", JSON.stringify(key), (error) => {
                if (error) console.log(error)
               if(key[message.author.id].key  == 1){
           message.channel.send('Weekly quest complete!')
               }
        })
                   
                })
              })
              }
            })
    })
  })
}
     
                    
   
    
exports.config = {
    command: 'transfer',
    aliases: ['send'],
    plevel: "User",
    description: "Sends Coins to Users! [Global]",
    usage: "transfer <@user> <amount>",
    category: "Currency"
};

exports.extra = {
    hidden: false
};