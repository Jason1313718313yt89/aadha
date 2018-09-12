const slotItems = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍑", "🍓", "🍒"];
	const config = require('../storages/config.json');
  const {Discord , RichEmbed} = require("discord.js")
exports.run = (client, message, args) => {

  const cookies = require('cookiesdb');
const fs = require("fs")            
                       const { Discord , RichEmbed} = require("discord.js")
  
        const db = require("quick.db")
  let warns = JSON.parse(fs.readFileSync("./register.json", "utf8"));
        db.fetch(`prefix10_${message.guild.id}`).then(c => {
        var prefix = c;
        
        if (!prefix) { // If c.text a.k.a prefix doesn't exist, prefix will be "!"
            prefix = config.prefix;
       
    }

  
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
    let money = parseInt(args[0]);
    if (!money) return message.channel.send("```css\nError: Incorrect Usage``` +slots (amount) //MAX AMOUNT 100`"); //help
    if (money > 1000) money = 1000;
    let win = false;
  const ms = require('parse-ms')

cookies.fetchCookies(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                      if (c.value <= money - 1 ) {
                          return message.channel.send(`**Sorry, you are betting more than you have!\nYou have ${c.value} to bet!**`);
                      }
    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { // All 3 the same! 10/1000 or 1% (10 items)
        money *= 20
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { // 2 are the same! 100/1000 or 10%
        money *= 1.5
        win = true;
    }
   let cooldown = 20000

        cookies.fetchCookies(`lastSlots_${message.author.id}`).then(i => {

        if (i.text !== null && cooldown - (Date.now() - i.text) > 0) {
          let timeObj = ms(cooldown - (Date.now() - i.text));
          
          return message.channel.send(`<:error:473988063001837571> Command Ratelimited! \n Available in :** ${timeObj.seconds} seconds** `)   .then(message => {
                message.delete(8000);
            })
        }else{
                        cookies.updateText(`lastSlots_${message.author.id}`, Date.now()).then(() => {
    if (win) {
        let slotsEmbed = new RichEmbed()
            .setDescription(`\`\`\`\css\nThe Pengi Casino\`\`\`\n${slotItems[number[0]]} ${slotItems[number[1]]} ${slotItems[number[2]]} ⬅\nYou won ${money} Coins!`)
            .setColor("RANDOM")
                .setTimestamp()
           .setAuthor(message.author.username, message.author.avatarURL)
                   .setFooter(message.author.username, message.author.avatarURL)

        message.channel.send({embed: slotsEmbed})
        cookies.updateCookies(`globalCredits_${message.author.id}`, money)
    } else {
        let slotsEmbed = new RichEmbed()

                   .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
            .setDescription(`\`\`\`\css\nThe Pengi Casino \`\`\`\n${slotItems[number[0]]} ${slotItems[number[1]]} ${slotItems[number[2]]} ⬅\nYou lost ${money} Coins!`)
            .setColor("RANDOM")
           .setFooter(message.author.username, message.author.avatarURL)

        message.channel.send({embed: slotsEmbed})
        cookies.updateCookies(`globalCredits_${message.author.id}`, -money)
    }
})
};
        })
})
} )
}
    
exports.config = {
    command: 'slots',
    aliases: ['slot'],
    plevel: "User",
    description: "Role Information",
    usage: "ri / roleinfo <role>",
    category: "Information"
};

exports.extra = {
    hidden: false
};