               exports.run = async(client ,message, args) => {

const cookies = require('cookiesdb');
  const fs = require("fs");
      
 
    var { RichEmbed } = require('discord.js');

   let user = message.mentions.users.first();
        if (!user) {
            user = message.author;
        }
  let warns = JSON.parse(fs.readFileSync("./rep.json", "utf8"));
    if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };
  let upgrade = JSON.parse(fs.readFileSync("./upgrade.json", "utf8"));
    if(!upgrade[user.id]) upgrade[user.id] = {
    upgrade: 0
  };

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
                            const dbs = require("quick.db")
                            Date.daysBetween = function(date1, date2) {
  var one_day = 1000 * 60 * 60 * 24;
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();
  var difference_ms = date2_ms - date1_ms;
  return Math.round(difference_ms / one_day);
};
let created = new Date(message.author.createdAt);
let days = new Date(created.getFullYear(), created.getMonth(), created.getDate());
Date.daysBetween(created, new Date())
const moment = require('moment')
    require('moment-duration-format')
    
    const config = require('../storages/config.json');    

  let fetchedDB = await db.fetchCookies(`customPrefix_${user.id}`);
        let statusWelcome = await db.fetchCookies(`statusWelcome_${message.guild.id}`);
        if (!fetchedDB.text) {
            fetchedDB.text = config.info
        };
    let fetchedDBBadge = await db.fetchCookies(`customBadge1_${user.id}`);
        let statusWelcomes = await db.fetchCookies(`statusWelcome_${message.guild.id}`);
        if (!fetchedDBBadge.text) {
            fetchedDBBadge.text = config.badges
        };
  let fetchedDBBadges = await db.fetchCookies(`customBadge2_${user.id}`);
        let statusWelcomess = await db.fetchCookies(`statusWelcome_${message.guild.id}`);
        if (!fetchedDBBadges.text) {
            fetchedDBBadges.text = config.badges2
        };
   let slot3 = await db.fetchCookies(`customBadge3_${user.id}`);
        if (!slot3.text) {
            slot3.text = config.badge3
        };
  
let color = await db.fetchCookies(`customColor_${user.id}`);
        if (!color.text) {
            color.text = "696969"
        };
                   if(args[0] === 'color') { 
       let color = args[1]

        if (!/^[0-9A-F]{6}$/i.test(args[1].toString())) return message.channel.send('Invalid hex color!');
       if (!color) {
                    color = "696969"
                };

                await db.updateText(`customColor_${user.id}`, color);
                message.channel.send(`Color set to **#${color}**`)
    }else{
  if (args[0] === 'info') {
     let reason = args.slice(1).join(' ');
if (reason.length > 25)  return message.reply('You cannot exceed 25 Characters!');
                if (!reason) {
                    reason = this.client.config.info
                };
                let upgrade = JSON.parse(fs.readFileSync("./quest.json", "utf8"))
            
            
                                      
              let userUp = message.author
              if(!upgrade[userUp.id]) upgrade[userUp.id] = {
                upgrade: 0
              };

              
              upgrade[userUp.id].upgrade++;
              fs.writeFile("./quest.json", JSON.stringify(upgrade), (error) => {
                if (error) console.log(error)
    if(upgrade[message.author.id].upgrade  == 1){
           message.channel.send('Weekly quest complete!')

  return cookies.updateCookies(`globalCredits_${message.author.id}`, 500)
    }
              })

                await db.updateText(`customPrefix_${message.author.id}`,reason);
                message.channel.send(`Updated Info on profile command! **${reason}**`)
            };
    cookies.fetchCookies(message.guild.id).then(s => {
          cookies.fetchCookies(`globalCredits_${user.id}`).then(pb => {
  
let lol = user.id === "200598766804271104" 
let lol2 = user.id === "145689417045114881" 
let user3 = user.id === "293805585378574336" 

        var embed = new RichEmbed()
            .setColor(color.text)
            .setAuthor(user.username , user.avatarURL)
            .setTimestamp()
            .setThumbnail( `${user.displayAvatarURL}`)
            .addField(`User ID` , `${user.id}`)
          .addField(`Account Creation` , `${user.createdAt.toDateString()} (Rounded ${Date.daysBetween(created, new Date())} Days ago)`)
            .addField(`Reps` , warns[user.id].warns == 0? `0`:`${warns[user.id].warns}`)
            .addField(`Current Coins`, user3? `∞`:`Balance: **${pb.value.toLocaleString()}** Coins`)
            .addField(`Work Level` , upgrade[user.id].upgrade ==100? `${upgrade[user.id].upgrade}/100 Maxed Level 🥇`:`${upgrade[user.id].upgrade}/100`,true)
            .addField(`Info 📝` , fetchedDB.text)
            .addField(`Top (3) Badges` , `**${fetchedDBBadge.text}** **${fetchedDBBadges.text}** **${slot3.text}**`)
            .addField(`Inventory 💰` , `🐟 x ${owner[user.id].owner}, 🏡 x ${h[user.id].h} , 💸 x ${cash[user.id].cash / 4} , :race_car: x ${car[user.id].car}`)

          if (!args.join(" ")) {
            return message.channel.send(embed)
        }


  })
    })
               }
               }
      
exports.config = {
    command: 'profile',
    aliases: [],
    plevel: "User",
    description: "Check the profile of user",
    usage: "profile",
    category: "Information"
};

exports.extra = {
    hidden: false
};