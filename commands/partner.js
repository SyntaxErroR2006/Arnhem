const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

var tagRole = "751180272967352481"
var tagRoleP = "772064857461620756"

    var embed = new discord.MessageEmbed()
        .setTitle("Partnerschap aanvragen")
        .setDescription(`**Geachte speler,** \n\n*Wat leuk dat u partner wilt worden, echter zitten hier een paar voorwaarden aan verbonden. Laat even weten of u voldoet aan deze eisen, \nindien dit van toepassing is komt iemand van @Marketing & Communicatie Mederwerker u zo spoedig mogelijk helpen.*`)
        .addField("Voorwaarden", "-Er mogen geen pings in het bericht zitten (Indien wel handmatig verwijderen) \n -Minimaal 50 leden \n -Partner aanvrager mag geen warns hebben.")

    return message.channel.send(tagRole, tagRoleP, embed)



}

module.exports.help = {
    name: "partner"
}