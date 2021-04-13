const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'reactionrole',
    destcription:'Sets up a Reaction Role Message',
    execute(message, args, Discord, client){
        const channel = '831431041684078643';
        const Test1 = message.guild.roles.cache.find(role => role.name === "TEST1");
        const Test2 = message.guild.roles.cache.find(role => role.name === "TEST2");
 
        const Test1Emoji = '⚫';
        const Test2Emoji = '🔴';
 
        let embed = new MessageEmbed()
            .setColor('#e42643')
            .setTitle('TEST!')
            .setDescription('Test!\n\n'
                + `${Test1Emoji} for Test1 role\n`
                + `${Test2Emoji} for Test2 role`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(Test1Emoji);
        messageEmbed.react(Test2Emoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === Test1Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Test1);
                }
                if (reaction.emoji.name === Test2Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Test2);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === Test1Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Test1);
                }
                if (reaction.emoji.name === Test2Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Test2);
                }
            } else {
                return;
            }
        });
    }
 
}   