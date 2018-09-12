exports.run = async(client ,message, member) => {
    const cookies = require('cookiesdb');
  const fs = require("fs");
      let warns = JSON.parse(fs.readFileSync("./rep.json", "utf8"));
    var { RichEmbed } = require('discord.js');

   let user = message.mentions.users.first();
        if (!user) {
            user = message.author;
        }
  
  let owner = JSON.parse(fs.readFileSync("./bait.json", "utf8"));
        

  
  if(!owner[user.id]) owner[user.id] = {
    owner: 0
  };
            
            
            
              fs.writeFile("./bait.json", JSON.stringify(owner), (error) => {
                if (error) console.log(error)
              })
    let h = JSON.parse(fs.readFileSync("./house.json", "utf8"));
        

  
  if(!h[user.id]) h[user.id] = {
  h: 0
  };
            
            
            
              fs.writeFile("./house.json", JSON.stringify(h), (error) => {
                if (error) console.log(error)
              })
    let cash = JSON.parse(fs.readFileSync("./cash.json", "utf8"));
        

  
  if(!cash[user.id]) cash[user.id] = {
  cash: 0
  };
            
            
            
              fs.writeFile("./cash.json", JSON.stringify(cash), (error) => {
                if (error) console.log(error)
              })
     let car = JSON.parse(fs.readFileSync("./car.json", "utf8"));
        

  
  if(!car[user.id]) car[user.id] = {
  car: 0
  };
            
            
            
              fs.writeFile("./car.json", JSON.stringify(car), (error) => {
                if (error) console.log(error)
              })
              
              const db = require("cookiesdb")
const moment = require('moment')
    require('moment-duration-format')
    
    const config = require('../storages/config.json');    

 
    cookies.fetchCookies(message.guild.id).then(s => {
          cookies.fetchCookies(user.id).then(pb => {
  
let lol = user.id === "200598766804271104" 
let lol2 = user.id === "145689417045114881" 

        var embed = new RichEmbed()
            .setColor("FFFF00")
        .setAuthor(user.tag , user.avatarURL)
            .addField(`Fish Inventory` , `Fish Bait 🐟 - ${owner[user.id].owner}`)
        .addField(`General Items` , `Houses 🏡 - ${h[user.id].h} , Car :race_car: - ${car[user.id].car}`)
        .addField(`Command Multipliers` , ` 💴 Loot Cmd Multiplier - x${cash[user.id].cash / 4}`)
        .setFooter(`// This is beta`)
    			message.channel.send(embed)

          })
    })

}
exports.config = {
    command: 'inventory',
    aliases: ['inv'],
    plevel: "User",
    description: "Check the profile of user",
    usage: "profile",
    category: "Information"
};

exports.extra = {
    hidden: false
};