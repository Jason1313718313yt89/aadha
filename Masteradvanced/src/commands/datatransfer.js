exports.run = async(client ,message, member) => {
    const cookies = require('cookiesdb');
  const fs = require("fs");
      
 
    var { RichEmbed } = require('discord.js');

 let user = message.mentions.users.first()
        let users = message.mentions.users.last()
        if(!user) return message.channel.send(`Please specifify two users next time!`)

  let warns = JSON.parse(fs.readFileSync("./rep.json", "utf8"));
    if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };   
  warns[users.id].warns = warns[users.id].warns + warns[user.id].warns;
   warns[user.id].warns = warns[user.id].warns - warns[user.id].warns;

  fs.writeFile("./rep.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });


  let upgrade = JSON.parse(fs.readFileSync("./upgrade.json", "utf8"));
    if(!upgrade[user.id]) upgrade[user.id] = {
    upgrade: 1
  };

              const db = require("cookiesdb")
                            const dbs = require("quick.db")

const moment = require('moment')
    require('moment-duration-format')
    
    const config = require('../storages/config.json');    


          cookies.fetchCookies(`globalCredits_${user.id}`).then(pb => {
            cookies.updateCookies(`globalCredits_${user.id}`, -pb.value)
            cookies.updateCookies(`globalCredits_${users.id}`, pb.value)
                        
            message.channel.send(`Successfully removed ${user}'s stats and transfered it to ${users}'s account! `)
  

})
}
  
exports.config = {
    command: 'datatransfer',
    aliases: [],
    plevel: "Bot Owner",
    description: "Check the profile of user",
    usage: "profile",
    category: "Information"
};

exports.extra = {
    hidden: false
};