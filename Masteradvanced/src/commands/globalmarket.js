exports.run = (client, message, args) => {
	

    const cookies = require('cookiesdb');
  const Discord = require("discord.js")
  const fs = require("fs")
const items = JSON.parse(fs.readFileSync('Masteradvanced/items.json', 'utf8'));

 

            
                            let upgrade = JSON.parse(fs.readFileSync("./upgrade.json", "utf8"))
            
            
                                      
              let userUp = message.author
              if(!upgrade[userUp.id]) upgrade[userUp.id] = {
                upgrade: 1
              };
                                   
              fs.writeFile("./upgrade.json", JSON.stringify(upgrade), (error) => {
                if (error) console.log(error)
                      
                     
                                     
       const cookie = require("cookiesdb")
cookie.fetchCookies(`globalCredits_${message.author.id}`).then(pb => {
    console.log(pb);
       const embed = new Discord.RichEmbed()
       .setFooter(`Some items are for flexing and some are for good money! // Thanks for using this command`)
                .setDescription(`Market of PenguBoat! <:penguboat:468566426605715483> ${pb.value.toLocaleString()} To spend in the shop! `)
                .setColor("FFFF00")
.addField("Upgrade" , upgrade[message.author.id].upgrade == 100? `You cannot buy anymore upgrades`:`${75 *  upgrade[message.author.id].upgrade} Coins \nNext Upgrade costs ${75 *  upgrade[message.author.id].upgrade + 75} coins`)
      .addField("Fishing Bait 🐟" , "15 Coins Per Bait ! ~~100%~~ Off | Lifetime!")
             .addField("Houses 🏡" , "10,000 Coins Per House ! ~~150%~~ Off | Lifetime!")
             .addField("Car 🏎" , "2,000 Coins Per Car ! Good for reputation lol!")
       .addField("Cash Multiplier 💸" , "1,000 Coins Per x0.25 Multiplier(1 Coin) | Available for `loot` command!")
       .addField("How to buy?" , "Here are some items examples you can buy!\n `buy cash <amount_if_you_want>` For Cash Multiplier\n`buy house <amount_if_you_want>` For General Items\n`buy upgrade` For work cmd!\n`buy car <amount_if_you_want>` For the show off!")
 message.channel.send(embed)
})
              })
}
exports.config = {
    command: 'market',
    aliases: ['store','shop'],
    plevel: "User",
    description: "Views the items in the market ",
    usage: "market",
    category: "Currency"
};

exports.extra = {
    hidden: false
};