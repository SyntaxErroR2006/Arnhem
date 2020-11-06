const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "728563729599430656";

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(embedPermission);

    if (message.channel.parentID == categoryID) {
        message.channel.delete();
    } else {

        message.channel.send("Gelieve dit commando te doen bij een ticket!");

    }

    var embedPermission = new discord.MessageEmbed()
        .setDescription("U heeft de permissie __KICK_MEMBERS__ niet.")
}

module.exports.help = {
    name: "close"
}