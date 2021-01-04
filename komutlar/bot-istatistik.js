


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(``)
.addField("__**Bot Verileri**__", `<a:hypesquad:788323183055863838> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:hypesquad:788323183055863838> **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:hypesquad:788323183055863838> **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", ` \n<a:hypesquad:788323183055863838>\  **Bot Sahibi**  <@!552923721246048268> \n  \n`)
.addField("__**Sürümler**__", `<a:hypesquad:788323183055863838>**Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:hypesquad:788323183055863838> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:hypesquad:788323183055863838> **${client.ws.ping}** ms`,true)
    .setImage(`https://cdn.discordapp.com/attachments/788154323565150228/792128869229920287/standard.gif`)
.setColor("RANDOM")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi,sunucuhack",
aliases: ["i","sunucuhack"]
}