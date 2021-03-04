const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {


  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Gerekli yetkiye sahip değilsiniz");


  let rol = message.mentions.roles.first() || message.guild.roles.get(args[0])

  if(!rol) return message.reply('İşlemi devam ettirebilmem için bir rol id girmen veya rol etiketlemen gerekiyor')


    let ursonay = new Discord.RichEmbed()
  .setTitle('İŞLEM DURUMU : BAŞARILI')
  .setDescription('Kayıtcı rolü '+rol+' olarak ayarlandı.')
  .setColor('RED')
  message.channel.send(ursonay)



  db.set(`kayıtcırol_${message.guild.id}`, rol.id)





  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kayıtcı-rol',
  description: 'taslak',
  usage: 'kayıtcı-rol'
};
