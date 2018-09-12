const db = require('cookiesdb');
const { RichEmbed } = require('discord.js');

    
    const config = require('../storages/config.json');

    exports.run = async (client,message, args)=> {
          const keys = ['create','workname','prefix'];
        let fetchedDB = await db.fetchCookies(`customApp_${message.author.id}`);
        let statusWelcome = await db.fetchCookies(`statusWelcome_${message.guild.id}`);
        if (!fetchedDB.text) {
            fetchedDB.text = config.info
        };
        let fetchedDBBB = await db.fetchCookies(`customPrefixB_${message.author.id}`);
        if (!fetchedDBBB.text) {
            fetchedDBBB.text = config.prefix
        };
       let fetchedDBB = await db.fetchCookies(`customName_${message.author.id}`);
        if (!fetchedDBB.text) {
            fetchedDBB.text = 'Restaurants'
        };
        let daily = await db.fetchCookies(`serverDaily_${message.guild.id}`);

        if (!daily.text) {
            daily.text = "1000"
        };
     
       let currency = await db.fetchCookies(`serverCurrency_${message.guild.id}`);

        if (!currency.text) {
            currency.text = "$"
        };
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
 
      const cookies = require("cookiesdb")
      cookies.fetchCookies(`globalCredits_${message.author.id}`).then(c => {
                      if (c.value <= 10000 ) {
                          return message.channel.send(`**You must need 10k | 10000 Coins to create / rename your app!**`);
                      }
        return cookies.updateCookies(`globalCredits_${message.author.id}`, -10000)
        
        return  message.channel.send(`Successful created a app named **${reason}**`)
      })
               let app = JSON.parse(fs.readFileSync("./app.json", "utf8"));
      
  if(!app[userUp.id]) app[userUp.id] = {
    app: 0
    
  };
                    app[message.author.id].app++;


  fs.writeFile("./app.json", JSON.stringify(app), (err) => {
    if (err) console.log(err)
  })
   let reason = args.slice(1).join(' ');
if (reason.length > 10)  return message.reply('You cannot exceed 10 Characters!');

        const embed = new RichEmbed()
            .setColor(0xffff84)
            .setTitle('App Examples')
        .addField('Create' , `+app create <name_your_app>`)


            

        if (!args[0]) {
            return message.channel.send({ embed });
          
        } else {
            if (!keys.includes(args[0].toLowerCase())) return message.channel.send({ embed });
            if (args[0].toLowerCase() === 'create') {
                if (!reason) {
                    reason = this.client.config.info
                };
              
              
            

                await db.updateText(`customApp_${message.author.id}`,reason);
                 
             
            };
           
        }
    }
exports.config = {
    command: 'app',
    aliases: [],
    plevel: "User",
    description: "Sends you the Server Information",
    usage: "serverinfo",
    category: "Information"
};

exports.extra = {
    hidden: false
};