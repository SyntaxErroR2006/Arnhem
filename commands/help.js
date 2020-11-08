const discord = require("discord.js"); 
const prefix = require("../botconfig.json");

module.exports.run = async(client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setTitle("Help Systeem Arnhem")
    .setDescription(`De prefix voor deze server is: ${botConfig.prefix}`)
    .addField("Commands", "`suggestie`, `bug`, `help`, `groepen`, `leden`, `botinfo`")
    .addField("Mod", "`ban`, `kick`, `training`, `lock`, `unlock`, `giveaway`")
    .addField("Tickets", "`ticket`, `claim`, `close`")
    .addField("Andere", "`ping`, `whois`, `serverinfo`")
    .setThumbnail(message.guild.iconURL({ size: 1024 }))
    .setFooter(`Aangevraagd door: ${message.author.username}`)
    .setColor("#2075d6")
    .setFooter("Arnhem", "https://cdn.discordapp.com/icons/424654006187720724/82457b8b6806f9d7a239b9e3ac96b0ac.webp?size=1024")
    return message.channel.send(embed);
}

module.exports.help = {
    name: "help"
}