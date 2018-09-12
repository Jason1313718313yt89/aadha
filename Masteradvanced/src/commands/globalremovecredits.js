exports.run = (client, message, args) => {
  const user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
    var amount = args.slice(1).join(' ');
    const cookies = require('cookiesdb');

    if (!user || !user || isNaN(amount)) {
        message.channel.send('Please Mention a User or put in a value')
            .then(message => {
                message.delete(5000);
            })
        return;
    };

    cookies.updateCookies(`globalCredits_${user.id}`, -parseInt(amount)).then(pb => {
        client.channels.get('476158627791634433').send(`${message.author} Removed  <:penguboat:468566426605715483> **${amount}** Coins from **${user.tag}**`)
    })
};

exports.config = {
    command: 'remove',
    aliases: ['removecredits'],
    plevel: "Staff",
    description: "Removes Coins from People [Global] ",
    usage: "remove <@user> <amount>",
    category: "Currency"
};

exports.extra = {
    hidden: false
};