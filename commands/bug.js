const discord = require("discord.js");

module.exports.run = async (Client, message, args) => {

    //message.delete();

    var text = args || `Fout.`;

    let bug = args.join(" ").slice(4);

    var bugKanaal = message.member.guild.channels.cache.get("724582341795774514");

    if (!bugKanaal) return message.channel.send("Kan de bug channel niet vinden.")


    const embed = new discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ size: 4096 })}`)
        .setColor("#0d8579")
        .setDescription(bug)



    message.channel.send(embedVerzonden);
    var bugKanaal = message.guild.channels.cache.find(ch => ch.name === "bugs");
    if (!bugKanaal) return message.guild.send("Kan het kanaal niet vinden");

    bugKanaal.send(embed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });

    var embedVerzonden = new discord.MessageEmbed()
        .setDescription("U bug is succesvol verzonden!");

}

module.exports.help = {
    name: "bug"
}