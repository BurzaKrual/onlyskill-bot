module.exports = {
    name: 'ping',
    destcription:'this is a ping command',
    execute(message, args){
        message.channel.send('Pong!')
    }
}