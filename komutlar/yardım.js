const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

    let yardım = new Discord.RichEmbed()
  .setAuthor('Yardım Menüsü', client.user.avatarURL)
  .setDescription('**DM** kutunu kontrol et!')
  .setColor('GREEN')
  message.channel.send(yardım)


  let prefix = ayarlar.prefix


  let urs = new Discord.RichEmbed()
  .setTitle(client.user.username +' Yardım Menüsü')
  .addField(':book: Komutlar:', `${prefix}yardım | Yardım menüsünü atar.\n${prefix}kız | Kız kaydı yapmanızı sağlar\n${prefix}erkek | erkek kaydı yapmanızı sağlar \n${prefix}erkek-rol | Kayıt erkek rolünü ayarlamanızı sağlar.\n${prefix}kız-rol | Kayıt kız rolünü ayarlamanızı sağlar.\n${prefix}kayıt-kanal | Sunucuya biri geldiğinde mesaj göndereceği kanal \n ${prefix}kayıt-mesaj| Sunucuya biri geldiğinde belirlediğiniz kanala,belirttiğiniz mesajı atar.\n${prefix}kayıt-kayıtcı | kayıt işlemlerini yapacak rolü seçersiniz \n ${prefix}isim | kayıdı yapılan kullanıcının ismini düzenler.`)
  .setFooter('')
  .setColor('RANDOM')
  message.author.send(urs)

  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'taslak',
  usage: 'yardım'
};
