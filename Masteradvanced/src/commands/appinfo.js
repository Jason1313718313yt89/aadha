exports.run = async(client ,message, member) => {
    const cookies = require('cookiesdb');
  const fs = require("fs");
      
 
    var { RichEmbed } = require('discord.js');

   let user = message.mentions.users.first();
        if (!user) {
            user = message.author;
        }

  
  let upgrade = JSON.parse(fs.readFileSync("./upgrade.json", "utf8"));
    if(!upgrade[user.id]) upgrade[user.id] = {
    upgrade: 1
  };

              const db = require("cookiesdb")
                            const dbs = require("quick.db")

const moment = require('moment')
    require('moment-duration-format')
    
    const config = require('../storages/config.json');    

  let fetchedDB = await db.fetchCookies(`customApp_${user.id}`);
        let statusWelcome = await db.fetchCookies(`statusWelcome_${message.guild.id}`);
        if (!fetchedDB.text) {
            fetchedDB.text = "No Apps! `+app create BotInc`"
        };
    let fetchedDBBadge = await db.fetchCookies(`customPrefixs_${user.id}`);
        let statusWelcomes = await db.fetchCookies(`statusWelcome_${message.guild.id}`);
        if (!fetchedDBBadge.text) {
            fetchedDBBadge.text = config.badges
        };
  let fetchedDBBadges = await db.fetchCookies(`customPrefixss_${user.id}`);
        let statusWelcomess = await db.fetchCookies(`statusWelcome_${message.guild.id}`);
        if (!fetchedDBBadges.text) {
            fetchedDBBadges.text = config.badges2
        };
   let slot3 = await db.fetchCookies(`customPrefixsss_${user.id}`);
        if (!slot3.text) {
            slot3.text = config.badge3
        };
  
let warns = JSON.parse(fs.readFileSync("./downloads.json", "utf8"))
            
            
                                      
              let userUp = message.author
              if(!warns[userUp.id]) warns[userUp.id] = {
                warns: 0
              };

              
  
                       
                                     
    cookies.fetchCookies(message.guild.id).then(s => {
          cookies.fetchCookies(`globalCredits_${user.id}`).then(pb => {
  
let lol = user.id === "200598766804271104" 
let lol2 = user.id === "145689417045114881" 
let user3 = user.id === "293805585378574336" 

        var embed = new RichEmbed()
            .setColor("RANDOM")
            .setAuthor(user.username , user.avatarURL)
            .setTimestamp()
            .setThumbnail( `${user.displayAvatarURL}`)
            .addField(`App name` , `${fetchedDB.text}`)
            .addField(`Downloads` , warns[user.id].warns == 0? `0 Downloads`:`${warns[user.id].warns} Downloads`)
         
    			message.channel.send(embed)

          })
    })


}
  
exports.config = {
    command: 'appinfo',
    aliases: [],
    plevel: "User",
    description: "Check the profile of user",
    usage: "profile",
    category: "Information"
};

exports.extra = {
    hidden: false
};