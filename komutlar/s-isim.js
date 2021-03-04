const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
    
let rol = await db.fetch(`kayıtcırol_${message.guild.id}`)  

if(!rol) return message.reply('Kayıtcı rolü ayarlanmamış.')
  
if(!message.member.roles.has(rol)) {
  
  
  
  let hata = new Discord.RichEmbed()
  .setTitle(':x: Hata!')
  .setDescription('Bu komutu kullanmak için **'+message.guild.roles.get(rol).name+'** Rolüne sahip olmalısın.')
  .setThumbnail(message.author.avatarURL)
  .setColor('RED')
  message.channel.send(hata).then(s => s.delete(15000))
  return
  }  
  
 let user = message.mentions.users.first() 
 let name = args.slice(1).join(' '); 
  
  
  
  if(!user) return message.reply('Lütfen isim kaydı yapılacak kullanıcıyı belirt.').then(s => s.delete(15000))
  if(!name) return message.reply('Lütfen **'+user.username+'** adlı kullanıcıyı hangi isimle kaydedeceğinizi belirtin.').then(s => s.delete(15000))
  
  
    
 let tamamdır = new Discord.RichEmbed()
 .setAuthor(user.username, user.avatarURL) 
 .setDescription(`${user} Başarıyla **${name}** ismiyle kaydedildi!`) 
 .setColor('RANDOM') 
 .setThumbnail(message.guild.iconURL) 
 .setFooter(client.user.username + ' Kayıt Sistemi') 
message.channel.send(tamamdır).then(s => {
  
  message.delete(300)
  message.guild.members.get(user.id).setNickname(name)
  s.delete(25000)
  
  
  
  
  
  
  
})
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'isim',
  description: 'taslak', 
  usage: 'isim'
};
