const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry jij kan dit niet doen, als dit een fout is neem contact op met de Bot Developer.");

    var embed = new discord.MessageEmbed()
        .setDescription(`${message.author.username} heeft dit ticket geclaimed!`)
    return message.channel.send(embed);
}

module.exports.help = {
    name: "claim"
}