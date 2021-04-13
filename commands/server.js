const util = require('minecraft-server-util');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'server',
    description: "Gets Information About Our Server!",
    execute(Discord, client, message, args) {
        util.status('onlyskill.club')
        .then((response) => {
            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('ONLYSKILL NETWORK SERVER STATUS')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version}
            )
            .setFooter('Made by BurzaKrual');
            message.channel.send(embed);
        })
        .catch((error) => {
            console.error(error);
        })
    }
 
 } 