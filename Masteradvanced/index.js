/*
    This file just contains the stuff to run the bot
*/

const Discord = require("discord.js");
const client = new Discord.Client();
const penis = require('./penis.json');
const fs = require("fs");

const config = require("./src/storages/config.json");
client.permconfig = require("./src/storages/permlevelhandler.js");


client.on("ready", guild =>  {
client.user.setGame(".helpdm|.bump|BugFixes", "https://www.twitch.tv/ladjayyt"); 
});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.on('message' , message => {
});

const prefix = config.prefix;
client.on("message", message => {
if(message.content.startsWith(prefix + 'penis')) {
let user = message.mentions.users.first();
      message.reply(`${penis[Math.floor(Math.random() * penis.length)]}`)
  }
});
  
client.on("guildCreate", guild => {
  console.log(`${guild.name}`)
    const defaultChannel = guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES"));
        defaultChannel.send(`Hello ${guild.name} Im Your New Bot MasterAdvanced{}.`);    
});

fs.readdir('./src/commands/', (err, files) => { // This reads the directory of the commands folder.
    if (err) console.error(err); // This, sends an error message if it gets an error calling the commands,

    var jsfiles = files.filter(f => f.split('.').pop() === 'js'); // This checks if the file extension is 'js', or the text after the . is 'js'.
    if (jsfiles.length <= 0) {
        return console.log('No commands found...')
    } // This returns & sends to the console that no commands were found in the folder.
    else {
        console.log(jsfiles.length + ' commands found.')
    } // This tells how many commands it found.

    jsfiles.forEach((f, i) => { // This, loops through each file and runs the following code.
        var cmds = require(`./src/commands/${f}`); // This gets every js file in the chosen folder.
        console.log(`Command ${f} loading...`); // This logs to the console that the command <name> is loading.
        client.commands.set(cmds.config.command, cmds);
        cmds.config.aliases.forEach(alias => {
            client.aliases.set(alias, cmds.config.command);
        });
    })
	
	
});

client.levelCache = {};
for (let i = 0; i < client.permconfig.permLevels.length; i++) {
    const thisLevel = client.permconfig.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
};

client.permlevel = message => {
    let permlvl = 0;

    const permOrder = client.permconfig.permLevels.slice(0).sort((p, c) => p.level < c.level ? 1 : -1);

    while (permOrder.length) {
        const currentLevel = permOrder.shift();
        if (message.guild && currentLevel.guildOnly) continue;
        if (currentLevel.check(message)) {
            permlvl = currentLevel.level;
            break;
        }
    }
    return permlvl;
};

fs.readdir("./src/events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`./src/events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

client.login(config.token);
