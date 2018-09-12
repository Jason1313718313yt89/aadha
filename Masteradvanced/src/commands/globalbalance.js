



exports.run = (client, message,args) => {
  const cookie = require('cookiesdb');
  let prefix = "+"
  const { Discord , RichEmbed} = require("discord.js")
  var Jimp = require("jimp");
  const fs = require("fs")
  let warns = JSON.parse(fs.readFileSync("./register.json", "utf8"));
    const config = require('../storages/config.json');
 
     const user = message.author

 
             const db = require("quick.db")

    
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
           .setDescription(`${user} is not registered yet please!`)
                  message.channel.send(embed)
                     .then(message => {
                message.delete(30000);
            })
        return;
    };  

  	let dev = user.id === "293805585378574336" 

  console.log(user.id);
  cookie.fetchCookies(`globalCredits_${user.id}`).then(pb => {
    console.log(pb);
    var abbreviate = require('number-abbreviate')
let balance = abbreviate(pb.value , 2)
        var embed = new RichEmbed()
    .setColor("FFFF00")
        .setTimestamp()
    .setDescription(dev? `Developer1 <:penguboat:468566426605715483> ∞ Coins!`:`**${user}'s Balance**\n\n<:penguboat:468566426605715483> ${balance} Coins\n **Suggested Commands for Coins**\n\n- Use Command \`${prefix}fish\` For a random amount of coins!\n- Use Command \`${prefix}work\` For Some Coins! Do \`${prefix}buy upgrade\` 1st one free \n- Complete Quests \`${prefix}quests\`!`)
        .setFooter(dev? `Developer1's Balance  | ∞ Coins! `:`User Balance: ${pb.value} Coins! `)
          if (!args.join(" ")) {
            return message.channel.send(embed)
        }
  if(args[0] === 'search') {
    const sm = require('string-similarity'); // This is the primary package we will be using.
 
 
  if (!args[1]) return message.channel.send(`Please search a username / mention user or id`) // This is from the `Global Functions` episode. - This checks to see if args[0] is defined, if it's not it runs the return statement.
 
  let members = [];
  let indexes = [];
 
  // We want to run through each member in the server, and add them to those arrays
  message.guild.members.forEach(function(member){ // This function will run through each member in the guild.
    members.push(member.user.username);
    indexes.push(member.id); // This will push both the ID and username into the arrays
  });
 
  // Now, we can find the item in the array that best matches the arguments they wrote in chat.
  let match = sm.findBestMatch(args.join(' '), members); // What this does is finds the best match from 'args', when joined.
  // `match` now holds an object with the bestmatch, this object can be seen on the `string-similarity` npm page.
  let username = match.bestMatch.target; // This now holds the username of the bestmatch.
  // To get the userID of the bestmatch, we now have to access the indexes array.
 
  let member = message.mentions.users.first() || client.users.get(args[1]) || message.guild.members.get(indexes[members.indexOf(username)])
      cookie.fetchCookies(`globalCredits_${member.id}`).then(pbs => {
let balances = abbreviate(pbs.value , 2)

  var embed = new RichEmbed()
    .setColor("FFFF00")
        .setTimestamp()
    .setDescription(`**${member}'s Balance**\n\n<:penguboat:468566426605715483> ${balances} Coins\n **Suggested Commands for Coins**\n\n- Use Command \`${prefix}fish\` For a random amount of coins!\n- Use Command \`${prefix}work\` For Some Coins! Do \`${prefix}buy upgrade\` 1st one free \n- Complete Quests \`${prefix}quests\`!`)
        .setFooter(`User Balance: ${pbs.value} Coins! `)
    message.channel.send(embed)
    
      })
  }
  })
   })
}
  
exports.config = {
  command: 'bal',
  aliases: ["balance","credits","coins","money","check"],
  plevel: "User",
  description: "Currency Amount [Global]",
  usage: "+balance | +bal",
  category: "Currency"
};

exports.extra = {
  hidden: false
};