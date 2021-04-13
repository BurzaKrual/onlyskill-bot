const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('Only Skill Bot is online!')
    client.user.setActivity('Prefix is: .', { type: "Having Fun With My Dev" }).catch(console.error)
})

client.on('message' , message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message , args);
    }
    if(command === 'clear'){
        client.commands.get('clear').execute(message , args);
    }
    if(command === 'server'){
        client.commands.get('server').execute(client, Discord, message , args);
    }
    if(command === 'ticket'){
        client.commands.get('ticket').execute(message, args, client, Discord);
        
    }
    if(command === 'suggest'){
        client.commands.get('suggestions').execute(message, args, client, Discord);
        
    }
    if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } 
})



client.login('ODMxMjY5NzI2NjY2NzUyMDEy.YHSyQw.dO6ceeCdXPmh0YFegeCTDt6G7BI')