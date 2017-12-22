exports.run = (client, message, args) => {
    const cookies = require('cookiesdb');
    const moment = require('moment');

    let today = moment().format('l')

    cookies.fetchCookies(`lastDaily_${message.author.id + message.guild.id}`).then(i => {

        if (i.text === today) return message.channel.send('**Daily Coins Has Been Collected Please Come Back Later.**');

        cookies.updateText(`lastDaily_${message.author.id + message.guild.id}`, today).then(() => {

            message.channel.send(`You Have recieved \`\n550\`\ coins! Come back tomorrow To collect more!`)

            cookies.updateCookies(message.author.id, 550).then(c => {
                console.log(`Added ${c.value} Coins to Username : ${message.author.tag}`)
            })
        })

    })
};

exports.config = {
    command: 'daily',
    aliases: ['daily'],
    plevel: "User",
    description: "Collect Daily coins every day  ",
    usage: "daily",
    category: "Coins/Eco"
};

exports.extra = {
    hidden: false
};
