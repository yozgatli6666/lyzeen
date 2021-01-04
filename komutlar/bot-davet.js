const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("#ffd100")
.setAuthor(`HUNTER Linkler`, client.user.avatarURL())
.setDescription('**• [HUNTER`i Ekleyin.](https://discord.com/oauth2/authorize?client_id=754040174236925952&scope=bot&permissions=8)**\n\n**• [Destek sunucusu](https://discord.gg/eFGK8HUNKT)**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };