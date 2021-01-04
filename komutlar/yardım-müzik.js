const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('RANDOM') 
.setAuthor(`HUNTER Müzik Komutları`, client.user.avatarURL())
.setDescription(` HUNTER botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Müzik Oynat__`,`<a:cds:791974934091268096> \`${prefix}çal\` İstediğiniz Şarkıyı Başlatır`,true)
.addField(`__Müziği Duraklat__`,`<a:cds:791974934091268096> \`${prefix}duraklat\` Şarkıyı Durdurur`,true)
.addField(`__Müziği Devam Ettir__`,`<a:cds:791974934091268096> \`${prefix}devam\` Şarkıyı Devam Ettirir`,true)
.addField(`__Müziği kapatır__`,`<a:cds:791974934091268096> \`${prefix}kapat\` Şarkıyı Atlar`,true)
.addField(`__Müzik sıra__`,`<a:cds:791974934091268096> \`${prefix}sıra\` Şarkı Kuyruğunu Gösterir`,true)
.addField(`__Ses Seviyesi__`,`<a:cds:791974934091268096> \`${prefix}ses\` Ses Seviyesini Ayarlarsınız`,true)
.addField(`__Bilgilendirme__`,`<a:bklnyr:788769183194284072> \`${prefix}davet\` | HUNTER'i Sunucunuza Davet Edersiniz\n<a:bklnyr:788769183194284072>\`${prefix}i\` | Botun İstatistiklerini Gösterir \n <a:bklnyr:788769183194284072> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/788154323565150228/792128869229920287/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "müzik",
  aliases: []
}
