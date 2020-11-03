const discord = require("discord.js");

module.exports.run = async (Client, message, args) => {

    //message.delete();



    var text = args || `Fout.`;

    let suggestie = args.join(" ").slice(10);

    var suggestieKanaal = message.member.guild.channels.cache.get("724582313920430181");

    if (!suggestieKanaal) return message.channel.send("Kan de suggestie channel niet vinden.")


    const embed = new discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ size: 4096 })}`)
        .setColor("#15214d")
        .setDescription(suggestie)



    message.channel.send("Je suggestie is succesvol verzonden!");
    var suggestieKanaal = message.guild.channels.cache.find(ch => ch.name === "suggestie");
    if (!suggestieKanaal) return message.guild.send("Kan het kanaal niet vinden");

    suggestieKanaal.send(embed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });

}

module.exports.help = {
    name: "suggestie"
}