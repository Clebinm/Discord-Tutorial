const Discord = require('discord.js')//puxando o bagulho do discord

module.exports.run = async (bot, message, args) => {//exportando o comando como say
  const falar = args.join(" ") //pegando tudo que a pessoa falar depois de digitar o comando
    message.channel.send(falar) //escrevendo oque a pessoa falou
}
