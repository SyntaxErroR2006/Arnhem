const discord = require("discord.js"); 

module.exports.run = async(client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setTitle("Help Systeem")
    .setDescription("De prefix voor deze server is: `-`")
    .addField("💡Algemeen", "`suggestie`, `bug`, `help`, `groepen`, `leden`, `botinfo`")
    .addField("📍Moderatie", "`ban`, `kick`, `training`, `lock`, `unlock`, `giveaway`")
    .addField("📑 Tickets", "`new`, `claim`, `close`")
    .addField("📁 Overig", "`ping`, `whois`, `serverinfo`")
    .setThumbnail(message.guild.iconURL({ size: 1024 }))
    .setTimestamp()
    .setColor("#2075d6")
    .setFooter("Arnhem", "https://cdn.discordapp.com/icons/424654006187720724/82457b8b6806f9d7a239b9e3ac96b0ac.webp?size=1024")
    return message.channel.send(embed);
}

module.exports.help = {
    name: "help"
}