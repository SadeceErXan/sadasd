const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {


  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("gerekli yetkiye sahip değilsiniz");


  let rol = message.mentions.roles.first() || message.guild.roles.get(args[0])

  if(!rol) return message.reply('İşleme devam etmek için bir rol veya rol İD belirtmen gerekiyor.')


    let ursonay = new Discord.RichEmbed()
  .setTitle('İŞLEM DURUMU : BAŞARILI')
  .setDescription('Kayıt kadın rolü '+rol+' olarak ayarlandı.')
  .setColor('RED')
  message.channel.send(ursonay)



  db.set(`kayıtkız_${message.guild.id}`, rol.id)





  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kız-rol',
  description: 'taslak',
  usage: 'kız-rol'
};
