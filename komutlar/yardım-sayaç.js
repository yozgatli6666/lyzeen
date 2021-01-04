 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`HUNTER Sayaç Komutları`, client.user.avatarURL())
.setColor('RANDOM')
.setDescription(``,`<a:emoji_22:768687331334029372> HUNTER botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Sayaç Ayar__`,`<a:settings:788769237782626364>\`${prefix}sayaç-ayarla\` Sunucunuzda Sayacı Ayarlar.`,true)
.addField(`__Oto Cevap hg__`,`<a:settings:788769237782626364> \`${prefix}sayaç-hg-mesaj\` Sunucunuzdaki Sayacın Hoş Geldin Mesajını Ayarlar.`,true)
.addField(`__Oto Cevap bb__`,`<a:settings:788769237782626364> \`${prefix}sayaç-bb-mesaj\` Sunucunuzdaki Sayacın Görüşürüz Mesajını Ayarlar.`,true)
.addField(`__Bilgilendirme__`,`<a:bklnyr:788769183194284072>\`${prefix}davet\` | HUNTER'i Sunucunuza Davet Edersiniz\n<a:bklnyr:788769183194284072> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:bklnyr:788769183194284072> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/788154323565150228/792128869229920287/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "sayaç",
  aliases: []
}