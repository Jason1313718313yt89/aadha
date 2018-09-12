function isOdd(num) { 
	if ((num % 2) == 0) return false;
	else if ((num % 2) == 1) return true;
}
const db = require("quick.db")
    const config = require('../storages/config.json');

exports.run = (client, message, args) => {
        const cookies = require('cookiesdb');
db.fetch(`prefix10_${message.guild.id}`).then(c => {
        var prefix = c;
        
        if (!prefix) { // If c.text a.k.a prefix doesn't exist, prefix will be "!"
            prefix = config.prefix;
       
    }
  
    let colour = args[0];
    let money = parseInt(args[1]);   
  let money2 = args[1];

  const ms = require('parse-ms')
                         const fs = require("fs")            
                       const { Discord , RichEmbed} = require("discord.js")
  
                   
  
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
   if (money2.startsWith('-')) {
        message.channel.send(' <:error:473988063001837571> Gambling Negative Numbers Now .. You Failed.')
            .then(message => {
                message.delete(5000);
            })
        return;
    };
   
    if (!money) return message.channel.send("Error: Incorrect Usage!\n+roulette [black_green_red] [100]"); //help
    if (money > 2000) money = 2000;

     cookies.fetchCookies(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                      if (c.value <= money ) {
                          return message.channel.send(`**Insufficient Amount!** __**You Dont Have ${money} Coins to bet!**__\n__You have ${c.value} Coins to bet!__`);
                      }
       
    if (!colour)  return message.channel.send("You can only bet on\nBlack Return of(2x)\nRed Return of(2x)\nGreen Return of(14x).");
    colour = colour.toLowerCase()
    
    if (colour == "b" || colour.includes("black")) colour = 0;
    else if (colour == "r" || colour.includes("red")) colour = 1;
    else if (colour == "g" || colour.includes("green")) colour = 2;
    else return message.channel.send("You can only bet on\nBlack Return of(2x)\nRed Return of(2x)\nGreen Return of(14x).");
        let cooldown = 60000

        cookies.fetchCookies(`lastRoulette_${message.author.id}`).then(i => {

        if (i.text !== null && cooldown - (Date.now() - i.text) > 0) {
          let timeObj = ms(cooldown - (Date.now() - i.text));
          
          return message.channel.send(`<:error:473988063001837571> Command Ratelimited! \n Available in :** ${timeObj.seconds} seconds** `)   .then(message => {
                message.delete(8000);
            })
        }else{
                        cookies.updateText(`lastRoulette_${message.author.id}`, Date.now()).then(() => {
  
    let random = Math.floor(Math.random() * 37);
   
   
    if (random == 0 && colour == 2) { // Green
        money *= 14
        cookies.updateCookies(`globalCredits_${message.author.id}`, money )
        message.channel.send(`**Landed on ${random}  (Green) (Even)**\n**JACKPOT** You won ${money} Coins :tada: and you kept your bet of (${money2})__`)
        console.log(`${message.author.tag} Won the jackpot`)
    } else if (isOdd(random) && colour == 1) { // Red
        money = parseInt(money * 1.5)
        cookies.updateCookies(`globalCredits_${message.author.id}`, money)
        message.channel.send(`**Landed on ${random} (Red) (Odd)**\n__Congratulations You won ${money} Coins :tada: and you kept your bet of (${money2})__`)
    } else if (!isOdd(random) && colour == 0) { // Black
        money = parseInt(money * 1.5)
        cookies.updateCookies(`globalCredits_${message.author.id}`, money )
        message.channel.send(`**Landed on ${random} (Black) (Even)**\n__Congratulations You won ${money} Coins :tada: and you kept your bet of (${money2})__`)
    } else { // Wrong
        cookies.updateCookies(`globalCredits_${message.author.id}`, -money)
        message.channel.send(`You sadly lost ${money} Coins! :(`)
    }
  })
}
    })
     })
})
}
exports.config = {
    command: 'roulette',
    aliases: ['rt'],
    plevel: "User",
    description: "Role Information",
    usage: "ri / roleinfo <role>",
    category: "Information"
};

exports.extra = {
    hidden: false
};