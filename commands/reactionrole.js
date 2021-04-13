module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '831431041684078643';
        const role1 = message.guild.roles.cache.find(role => role.name === "TEST1");
        const role2 = message.guild.roles.cache.find(role => role.name === "TEST2");
 
        const role1Emoji = '🧙‍♂️';
        const role2Emoji = '🦴';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Test Title!')
            .setDescription('Choose A role!\n\n'
                + `${role1Emoji} for TEST1\n`
                + `${role2Emoji} for TEST2`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(role1Emoji);
        messageEmbed.react(role2Emoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === role1Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role1);
                }
                if (reaction.emoji.name === role2Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role2);
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
                if (reaction.emoji.name === role1Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role1);
                }
                if (reaction.emoji.name === role2Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role2);
                }
            } else {
                return;
            }
        });
    }
 
}   