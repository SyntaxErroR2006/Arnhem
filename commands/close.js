const discord = require("discord.js");  

module.exports.run = async(client, message, args) => {
    
    const  categoryID = "728563729599430656";

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry jij kan dit niet doen, als dit een fout is neem contact op met de Bot Developer.");

    if(message.channel.parentID == categoryID) { 
        message.channel.delete();
    } else {

        message.channel.send("Gelieve dit commando te doen bij een ticket!");

    }
    
}

module.exports.help = {
    name: "close"
}