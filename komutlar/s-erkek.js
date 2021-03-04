const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {


 let kızrol = await db.fetch(`kayıterkek_${message.guild.id}`)

 if(!kızrol) return message.reply('Kayıt erkek rolü ayarlanmamış.')




let rol = await db.fetch(`kayıtcırol_${message.guild.id}`)

if(!rol) return message.reply('Kayıtcı rolü ayarlanmamış.')

if(!message.member.roles.has(rol)) {



  let hata = new Discord.RichEmbed()
  .setTitle('İŞLEM DURUMU : BAŞARISIZ')
  .setDescription('Bu komutu kullanmak için **'+message.guild.roles.get(rol).name+'** Rolüne sahip olmalısın.')
  .setThumbnail(message.author.avatarURL)
  .setColor('RED')
  message.channel.send(hata).then(s => s.delete(15000))
  return
  }




let kanal = await db.fetch(`kayıtkanal_${message.guild.id}`)

if(!kanal) return message.reply('Kayıt kanalı ayarlanmamış!')

 if(message.channel.id !== kanal) {



  let hata = new Discord.RichEmbed()
  .setTitle('İŞLEM DURUMU : BAŞARISIZ')
  .setDescription('Bu komut sadece kayıt kanalında; <#!'+kanal+'> Kanalında kullanılabilir.')
  .setThumbnail(message.author.avatarURL)
  .setColor('RED')
  message.channel.send(hata).then(s => s.delete(15000))
  return
  }



  let user = message.mentions.users.first()


  if(!user) return message.channel.send('**Kaydı Yapılacak** erkek üyeyi belirtin!').then(x => x.delete(10000))

  if(user.bot) return message.channel.send('Belirttiğiniz kişi bir bot.').then(x => x.delete(10000))


 if(message.guild.members.get(user.id).roles.has(kızrol)) return message.reply('Bu kullanıcı zaten erkek olarak kaydedilmiş.')


 let tamamdır = new Discord.RichEmbed()
 .setAuthor(user.username, user.avatarURL)
 .setDescription(`${user} Başarıyla erkek olarak kaydedildi!`)
 .setColor('BLUE')
 .setThumbnail(message.guild.iconURL)
 .setFooter(client.user.username + ' Kayıt Sistemi')
message.channel.send(tamamdır).then(s => {


  message.delete()
  s.delete(25000)

  message.guild.members.get(user.id).addRole(kızrol)
  user.send(`:tada: **${message.guild.name}** Sunucusunda erkek olarak kayıt edildiniz.!`)
})
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'erkek',
  description: 'taslak',
  usage: 'erkek'
};
