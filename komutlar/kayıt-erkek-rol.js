const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {


  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("erkek rolünü ayarlayabilmem için yetkili olmalısın/gerekli yetkiye sahip değilsin.");


  let rol = message.mentions.roles.first() || message.guild.roles.get(args[0])

  if(!rol) return message.reply('İşlemi devam ettirebilmem için bir rol id girmen veya rol etiketlemen gerekiyor')


    let ursonay = new Discord.RichEmbed()
  .setTitle('İŞLEM DURUMU : BAŞARILI')
  .setDescription('Kayıt erkek rolü '+rol+' olarak ayarlandı.')
  .setColor('RED')
  message.channel.send(ursonay)



  db.set(`kayıterkek_${message.guild.id}`, rol.id)





  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["erkekrol","erkekrolayarla","eayarla","erkekrolü","erkekrolu","erkek-rol-ayarla","erkek-rol"],
  permLevel: 0
};

exports.help = {
  name: 'erkek-rol',
  description: 'taslak',
  usage: 'erkek-rol'
};
