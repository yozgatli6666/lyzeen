 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`HUNTER Yardım Menüsü`, client.user.avatarURL())
.setColor('RANDOM')
.setDescription(` HUNTER botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:emoji_22:768687331334029372> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,` <a:emoji_22:768687331334029372>\`${prefix}moderasyon\` `,true)
.addField(`__Müzik Komutları__`,` <a:emoji_22:768687331334029372>\`${prefix}müzik\` `,true)
.addField(`__Prefix Değiştir__`,`<a:emoji_22:768687331334029372> \`${prefix}prefix\` `,true)
.addField(`__Hata Bildir__`,`<a:emoji_22:768687331334029372> \`${prefix}rapor\` Hata Bildirirsiniz`,true)
.addField(`__Bilgilendirme__`,`<a:bklnyr:788769183194284072>\`${prefix}davet\` |HUNTER' i Sunucunuza Davet Edersiniz\n<a:bklnyr:788769183194284072> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n<a:bklnyr:788769183194284072>  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/788154323565150228/792128869229920287/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: ["help"]
}