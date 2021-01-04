  
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`HUNTER Genel Komutlar`, client.user.avatarURL())
.setDescription(`<a:hypesquad:788769138486804551> HUNTER botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Komut Sayısı__`,`<a:hypesquad:788769138486804551> \`${prefix}komutlar\` Botun Komut Sayısını Gösterir`,true)
.addField(`__Davet Et__`,`<a:hypesquad:788769138486804551>\`${prefix}davet\` Botumuzu Davet Edersiniz`,true)
.addField(`__Bot Bilgi__`,`<a:hypesquad:788769138486804551> \`${prefix}i\` Botumuzun İstatistikleri`,true)
.addField(`__Profil__`,`<a:hypesquad:788769138486804551>\`${prefix}profil\` Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Oylama__`,`<a:hypesquad:788769138486804551> \`${prefix}oylama\` Sunucuda Oylama Başlatır`,true)
.addField(`__Duyuru__`,`<a:hypesquad:788769138486804551> \`${prefix}duyuru\` Sunucuda Duyuru Yapar`,true)
.addField(`__Bilgilendirme__`,`<a:bklnyr:788769183194284072>\`${prefix}davet\` | HUNTER'i Sunucunuza Davet Edersiniz\n<a:bklnyr:788769183194284072> \`${prefix}i\` | Botun İstatistiklerini Gösterir \n <a:bklnyr:788769183194284072>\`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/788154323565150228/792128869229920287/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel",
  aliases: []
}
