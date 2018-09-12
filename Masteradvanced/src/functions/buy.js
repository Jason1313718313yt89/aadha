        
        function buy(client, message, args) {
            var user = message.mentions.users.first();
                const cookies = require('cookiesdb');
                const { Discord, RichEmbed } = require('discord.js')
              const fs = require("fs")
               const db = require("quick.db")
const config = require('../storages/config.json');
                                          var amount = args[0]
                                           var amount2 = parseInt(args[1])
if(!amount2) {
  amount2 = 1
}

   db.fetch(`prefix10_${message.guild.id}`).then(c => {
        var prefix = c;
        
        if (!prefix) { // If c.text a.k.a prefix doesn't exist, prefix will be "!"
            prefix = config.prefix;
       
    }
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
	
                                let owner= JSON.parse(fs.readFileSync("./bait.json", "utf8"))
                                let h = JSON.parse(fs.readFileSync("./house.json", "utf8"))
                                let cash = JSON.parse(fs.readFileSync("./cash.json", "utf8"))
                                                                let car = JSON.parse(fs.readFileSync("./car.json", "utf8"))



                                   let userO = message.author
                    
            
              if(!owner[userO.id]) owner[userO.id] = {
                owner: 0
              };
                                          let upgrade = JSON.parse(fs.readFileSync("./upgrade.json", "utf8"))
           
                                      
              let userUp = message.author
              if(!upgrade[userUp.id]) upgrade[userUp.id] = {
                upgrade: 0
              };
            
            
                   
            const items = JSON.parse(fs.readFileSync('Masteradvanced/items.json', 'utf8'));
            
            if (amount.startsWith('-')) {    
              message.channel.send('...')
                        .then(message => {
                            message.delete(5000);
                        })
                    return;
                };
              
             
                
                let msg = message.content.toUpperCase();
                let cont = message.content.slice(prefix.length).split(" "); // This slices off the prefix, then stores everything after that in an array split by spaces.
            
            
                    let categories = []; 
            
                    if (!args[0]) { 
            
                        for (var i in items) { 
            
                            if (!categories.includes(items[i].type)) {
                                categories.push(items[i].type)
                            }
            
                        }
            
                   const cookie = require("cookiesdb")
            cookie.fetchCookies(`globalCredits_${message.author.id}`).then(pb => {
                console.log(pb);
                   const embed = new Discord.RichEmbed()
                            .setDescription(`Market of PenguBoat! <:penguboat:468566426605715483> ${pb.value.toLocaleString()} To spend in the shop! `)
                            .setColor("RANDOM")
            
                        for (var i = 0; i < categories.length; i++) { 
            
                            var tempDesc = '';
            
                            for (var c in items) { 
                                if (categories[i] === items[c].type) {
                                 
            
                                    tempDesc += `\`${items[c].name}\` -  <:penguboat:468566426605715483> ${items[c].price.toLocaleString()} Coins - *${items[c].desc}*\n\N Do ${prefix}buy upgrade`; // Remember that \n means newline
            
                                }
                            
                            }
            
                            embed.addField(categories[i], tempDesc);
            
                        }
            
                        return message.channel.send({
                            embed
                        }); 
            
            
                    })
            }
            
            
                    let itemName = '';
                    let itemPrice = 0;
                    let itemDesc = '';
            
              
                    for (var i in items) { 
                        if (args[0].toUpperCase() === items[i].name.toUpperCase()) { 
                            itemName = items[i].name;
                            itemPrice = items[i].price;
                            itemDesc = items[i].desc;
                        }
                    }
            
                    if (itemName === '') {
                        return message.channel.send(`Item was not found in the itemshop!`)
                    }
                cookies.fetchCookies(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                  if (c.value <= itemPrice * amount2) {
                          return message.channel.send(`**You don't have enough money for this item.**`);
                      }
          
                      cookies.updateCookies(`globalCredits_${message.author.id}`, parseInt(`-${itemPrice * amount2}`)).then((c) => {
          
                      })
                  
            if (itemName === 'bait') {
              let userO = message.author
                    
            
              if(!owner[userO.id]) owner[userO.id] = {
                owner: 0
              };
            
            
              owner[userO.id].owner = owner[userO.id].owner + amount2;

                 

              fs.writeFile("./bait.json", JSON.stringify(owner), (error) => {
                if (error) console.log(error)
                message.channel.send(`You just bought ${amount2} fishing bait :tada: \n You have ${owner[message.author.id].owner}`)
              })
                                          

                                                          }
                                                     
                    if (itemName === 'cash') {
              let userO = message.author
                    
              
            
              if(!cash[userO.id]) cash[userO.id] = {
                cash: 0
              };
            
            
              cash[userO.id].cash = cash[userO.id].cash + amount2;

                 

              fs.writeFile("./cash.json", JSON.stringify(cash), (error) => {
                if (error) console.log(error)
                message.channel.send(`You just bought ${amount2} Cash multipler!(s) Amount Recieved ! ${amount2 /4} :tada:`)
              })
                                          

                    }
                          if (itemName === 'car') {
              let userO = message.author
                    
              
            
              if(!car[userO.id]) car[userO.id] = {
                car: 0
              };
            
            
              car[userO.id].car = car[userO.id].car + amount2;

                 

              fs.writeFile("./car.json", JSON.stringify(car), (error) => {
                if (error) console.log(error)
                message.channel.send(`You just bought ${amount2} race car(s) :tada:`)
              })
                                          

                    }
                    if (itemName === 'house') {
              let userO = message.author
                    
              
            
              if(!h[userO.id]) h[userO.id] = {
                h: 0
              };
            
            
              h[userO.id].h = h[userO.id].h + amount2;

                 

              fs.writeFile("./house.json", JSON.stringify(h), (error) => {
                if (error) console.log(error)
                message.channel.send(`You just bought ${amount2} house(s) :tada:`)
              })
                                          

                    }
                                 if (itemName === 'upgrade') {
               if (c.value <= itemPrice * upgrade[message.author.id].upgrade -1 ) {
                          return message.channel.send(`**You don't have enough money for this item.**`);
                      }
                                        cookies.updateCookies(`globalCredits_${message.author.id}`, parseInt(`-${itemPrice * upgrade[message.author.id].upgrade }`)).then((c) => {

                        
                                
                            let upgrade = JSON.parse(fs.readFileSync("./upgrade.json", "utf8"))
            
               if(upgrade[message.author.id].upgrade  == 100){
                message.channel.send('Max level reached , You cannot buy upgrades!')
                   .then(message => {
                message.delete(30000);
            })
        return;
    };              
        
                                      
              let userUp = message.author
              if(!upgrade[userUp.id]) upgrade[userUp.id] = {
                upgrade: 1
              };
                                   
              upgrade[userUp.id].upgrade++;

            message.channel.send(`Upgrades Successfully bought!`)
              fs.writeFile("./upgrade.json", JSON.stringify(upgrade), (error) => {
                if (error) console.log(error)
                       
              
              
              
                                 })
              })
                                          
                           
                                                    
                                    
        
      
        
        }
                })
   })
        }                                                  
                                                                      
            module.exports = buy;
          