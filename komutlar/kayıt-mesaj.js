const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {

   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("kayıt mesajını ayarlamak için yeterli yetkiye sahip değilsin.");

  let mesaj = args.silice(0).join(' ');


  if(mesaj.length < 10) return message.reply('Ayarlamaya çalıştığınız mesaj çok kısa.En az **10** karakterden oluşabilir.')


  let sonuc = mesaj.replace("-uye-", `${message.member.user.tag}`).replace("-uyetag-", `${message.member.user.username}`).replace("-üyesayı-", `${message.guild.memberCount}`)



  let onay = new Discord.RichEmbed()
  .setTitle('İŞLEM DURUMU: BEKLENİYOR')
  .setDescription('Bİr üye sunucuya gelince aşağıdaki örnekteki gibi bir mesaj gidecek.Onaylıyor musunuz? \n\n `evet` / `iptal`')
  .addBlankField()
  .addField('Örnek', sonuc)
  .setFooter('SUNUCU İSİM')
  .setColor('GREEN')
  .setThumbnail(message.guild.iconURL)
  message.channel.send(onay).then(z => {



        let filtre = mes => mes.author.id === message.author.id;



   message.channel.awaitMessages(filtre, {
          max: 1,
          time: 40000,
          errors: ["time"]
        })
        .then(collected => {
 let x;
 if(collected.first().content === "evet") x = ','
 if(collected.first().content === "iptal") x = ','
 if(!x) return message.channel.send('Doğru bir seçenek girmediniz.')


   if(collected.first().content === "iptal") return message.channel.send('İptal Edildi :x:')

      if(collected.first().content === "evet") {

      collected.first().delete()

    z.edit('**Onay işlemi başarılı.! Mesaj ayarlandı**')

   db.set(`kayıtmesaj_${message.guild.id}`)




      }
   })
  })



  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-mesaj',
  description: 'taslak',
  usage: 'kayıt-mesaj'
};
