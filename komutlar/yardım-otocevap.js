const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('RANDOM') 
.setAuthor(`HUNTER Oto Cevap Komutları`, client.user.avatarURL())
.setDescription(`<a:emoji_22:768687331334029372> HUNTER botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Oto Cevap Ekle__`,`<a:settings:788769237782626364> \`${prefix}otocevap-ekle\` Sunucunuza Özel Komut Eklemenize Yarar.`,true)
.addField(`__Oto Cevap Liste__`,`<a:settings:788769237782626364> \`${prefix}otocevap-liste\` Sunucunuzdaki Özel Komutların Listesini Gösterir.`,true)
.addField(`__Oto Cevap Sil__`,`<a:settings:788769237782626364>\`${prefix}otocevap-sil\` unucunuzdaki Özel Komutu Siler.`,true)
.addField(`__Bilgilendirme__`,`<a:bklnyr:788769183194284072>\`${prefix}davet\` | HUNTER'i Sunucunuza Davet Edersiniz\n<a:bklnyr:788769183194284072> \`${prefix}i\` | Botun İstatistiklerini Gösterir \n <a:bklnyr:788769183194284072>\`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/788154323565150228/792128869229920287/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "otocevap",
  aliases: []
}
