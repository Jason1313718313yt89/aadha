exports.run = (client, message, args) => {
    const cookies = require('cookiesdb');
    const config = require('../storages/config.json');
    const { RichEmbed, version } = require('discord.js');

               const db = require("quick.db")

    
   db.fetch(`prefix10_${message.guild.id}`).then(c => {
        var prefix = c;
        
        if (!prefix) { // If c.text a.k.a prefix doesn't exist, prefix will be "!"
            prefix = config.prefix;
       
    }
const fs = require("fs")
        const embed = new RichEmbed()
            .setColor(0xffff84)
            .setTitle(`Help Categories ! Choose a number from 1-4! PREFIX: ${prefix}`)
      .setDescription(`**1|** Economy Commands <a:yellow:473603217209688065> Stable \n **2|**Music Commands  <a:green:473603173592858634> Operational \n**3|**Information Commands  <a:green:473603173592858634> Operational\n**4|** User Config <a:yellow:473603217209688065> Stable \n TYPE: __${prefix}help <number>__`)

            

        if (!args[0]) {
            return message.channel.send(embed)
        }
  if(args[0] === '1') {
      var embed1 = new RichEmbed()
  .setColor("RANDOM")
      .setTitle(`Help Economy Commands | Status  <a:yellow:473603217209688065> Stable | Prefix : ${prefix}`)
      .setDescription(`**${prefix}register** - ** Important Command ** Register Your Account! *Usage : ${prefix}register*.\n **${prefix}loot** - Loot some coins from your Loot Cmd Multipler *Usage : ${prefix}loot*. \n **${prefix}slots** - Gamble game slots *Usage : ${prefix}slots <amount> //Max Bet 1000*. \n **${prefix}roulette** - Gamble game *Usage : ${prefix}roulette black_red_green <amount>*. \n **${prefix}search** - Searches through your messages *Usage : ${prefix}search*. \n **${prefix}badges** - Views Badge Shop *Usage : ${prefix}badges*. \n **${prefix}bbuy** - Buy a badge in the shop *Usage : ${prefix}bbuy <badge_name>*. \n **${prefix}daily** - Collect User Daily *Usage : ${prefix}daily <user>*. \n **${prefix}slots** - Gamble Your Pengu Coins! *Usage : ${prefix}slots <amount>*. \n **${prefix}bal** - Views Peoples Balances or Authors With Image *Usage : ${prefix}bal <user>*. \n**${prefix}fish** - Catch a fish! *Usage : ${prefix}fish* \n**${prefix}market** - View Whats in the default item shop! *Usage: ${prefix}market* \n **${prefix}rep** - Give someone a rep point! *Usage: ${prefix}rep <user>*\n **${prefix}transfer** - Transfer Coins To A user 10% Tax! *Usage: ${prefix}transfer <user> <amount>*\n **${prefix}work** - Work To gain credits! *Usage: ${prefix}work* \n **${prefix}workstats** - View Your Workstats! *Usage: ${prefix}workstats* \n  **${prefix}buy** - Buy a item from the shop! *Usage: ${prefix}buy <item_name>* \n <a:yellow:473603217209688065> Commands Are Stable`)
return message.channel.send(embed1)

  
    }else{
      if(args[0] === '2') {
      var embed3 = new RichEmbed()
  .setColor("RANDOM")
      .setTitle(`Help Music Commands | Status <a:green:473603173592858634> Operational | Prefix : ${prefix}`)
      .setDescription(`**${prefix}play** - Play a song of your choice! *Usage : ${prefix}play <search_link>*. \n**${prefix}pause** -  Please the Music! *Usage : ${prefix}pause* \n**${prefix}resume** - resumes the music!*Usage: ${prefix}resume* \n **${prefix}queue** -  views the queue of list of music *Usage: ${prefix}queue* \n **${prefix}stop** - bot disconnects from VC *Usage : ${prefix}stop*. \n **${prefix}skip** - skips a song and plays next in queue *Usage : ${prefix}skip*. \n Commands Are Operating`)
return message.channel.send(embed3)

    
   
   
    
       }else{


             if(args[0] === '3') {
      var embed5 = new RichEmbed()
  .setColor("RANDOM")
      .setTitle(`Help Information Commands | Status  <a:green:473603173592858634> : Operational | Prefix : ${prefix}`)
      .setDescription(`**${prefix}inventory** - Displays your items *Usage : ${prefix}inventory*. \n**${prefix}invite** - View Invite Details *Usage : ${prefix}invite*. \n **${prefix}support** - View support Details *Usage : ${prefix}support*. \n **${prefix}help** - View Help Details *Usage : ${prefix}help*. \n **${prefix}userinfo** -  Fetches User Information *Usage : ${prefix}userinfo <user>* \n**${prefix}serverinfo** - Views server information *Usage: ${prefix}serverinfo* \n **${prefix}botinfo** - Fetches Bot Information *Usage: ${prefix}botinfo* \n **${prefix}profile** - Fetches User Stats Rep  *Usage : ${prefix}profile <user>*. \n Commands Are Operating`)
return message.channel.send(embed5)

           
             
     }else{


  


             if(args[0] === '4') {
      var embed5 = new RichEmbed()
  .setColor("RANDOM")
      .setTitle(`Help User Settings Commands | Status : <a:green:473603173592858634> Operational | Prefix : ${prefix}`)
      .setDescription(`**${prefix}pset info** - Sets Your Profile Info/Bio \n **${prefix}app create <whatever>** - Create a application that links up with work command , each download =  1:24 // Costs 10K\n**${prefix}download** - Download users apps // Costs 100 Coins to download. Only 1 app you can download!`)
return message.channel.send(embed5)

           
            

  }
  }
}
  }
    })
}

exports.config = {
    command: 'help',
    aliases: ['assistance','helper'],
    plevel: "User",
    description: "Sends the Help Commands through chat",
    usage: "help [Command Name]",
    category: "Helper"
};

exports.extra = {
    hidden: false
};
