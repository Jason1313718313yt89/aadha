const {Discord , RichEmbed} = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./downloads.json", "utf8"));

exports.run = async (bot, message, args) => {
    const cookies = require("cookiesdb")
  const moment = require('moment')
    require('moment-duration-format')
        const ms = require("parse-ms")
         let cooldown = 2.628e+9
      cookies.fetchCookies(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                      if (c.value <= 100 ) {
                          return message.channel.send(`**You must have 100 coins to download this app!**`);
                      }
      })
   
    cookies.fetchCookies(`lastDown_${message.author.id}`).then(i => {

        if (i.text !== null && cooldown - (Date.now() - i.text) > 0) {
          let timeObj = ms(cooldown - (Date.now() - i.text));
          
          return message.channel.send(`You have already downloaded a app!\n You cannot download any other apps! Sorry `)   .then(message => {
                message.delete(8000);
            })
        }else{
  
  let user = message.mentions.users.first();


   if (!user) {
        message.channel.send(' <:error:473988063001837571> Please Mention a user to download their app')
            .then(message => {
                message.delete(5000);
            })
        return;
    };
    if (message.author.id === user.id) {
        message.channel.send('<:error:473988063001837571> Cannont download your own app!!')
            .then(message => {
                message.delete(5000);
            })
        return;
  }
  
   
        let app = JSON.parse(fs.readFileSync("./app.json", "utf8"));
      
  if(!app[user.id]) app[user.id] = {
    app: 0
  };

  fs.writeFile("./app.json", JSON.stringify(app), (err) => {
    if (err) console.log(err)
  })
     
           if( app[user.id].app == 0){
      var embed2 = new RichEmbed()
           .setColor('RANDOM')
           .setDescription(`User does not have a app yet!!`)
                  message.channel.send(embed2)
                     .then(message => {
                message.delete(30000);
            })
        return;
    };    


  
  if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };
 


  warns[user.id].warns++;

  fs.writeFile("./downloads.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  
                  cookies.updateCookies(`globalCredits_${message.author.id}`, -100)
                        cookies.updateText(`lastDown_${message.author.id}`, Date.now()).then(() => {
message.channel.send(`Success <a:tickg:473984512708050945> You have Downloaded <@${user.id}> App!`)

                             })
        }
    })
}
exports.config = {
    command: 'download',
    aliases: ['d'],
    plevel: "User",
    description: "Rep a user",
    usage: "rep",
    category: "Currency"
};

exports.extra = {
    hidden: false
};