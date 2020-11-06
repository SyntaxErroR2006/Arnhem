const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(embedPermission);

    var embed = new discord.MessageEmbed()
        .setDescription(`Goededag, \n\n U word geholpen door ${message.author.username} van het staff-team. Wat kunnen wij voor u betekenen? \n\n U heeft 2 uur de tijd in te reageren.`)
    message.channel.send(embed);

    var embedPermission = new discord.MessageEmbed()
    .setDescription("U heeft de permissie __MANAGE_MESSAGES__ nodig.");
}

module.exports.help = {
    name: "claim"
}