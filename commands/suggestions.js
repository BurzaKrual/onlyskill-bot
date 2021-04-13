const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion'],
    permissions: [],
    description: 'creates a suggestion!',
    execute(message, args,client, Discord){
        const channel = '826548663328702482';
        let messageArgs = args.join(' ');
        const embed = new MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('✅');
            msg.react('❌');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}