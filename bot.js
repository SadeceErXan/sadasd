const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');//https://top.gg/bot/581090432092733450

client.queue = new Map()//https://top.gg/bot/581090432092733450

const chalk = require('chalk');
const fs = require('fs');//https://top.gg/bot/581090432092733450

const Jimp = require('jimp');
const db = require('quick.db');
const Canvas = require('canvas')
const ms = require('parse-ms')
const moment = require('moment');
require('./util/eventLoader')(client);
//https://top.gg/bot/581090432092733450
/////////////https://top.gg/bot/581090432092733450

const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200)
  //response.sendFile(path.join(__dirname+'/index.html'))
});//https://top.gg/bot/581090432092733450

app.listen(process.env.PORT);
setInterval(() => { //https://top.gg/bot/581090432092733450

  http.get(`http://boşyapı.glitch.me/`);
}, 10000);
///////////
//https://top.gg/bot/581090432092733450

var prefix = ayarlar.prefix; //https://top.gg/bot/581090432092733450


const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`); //https://top.gg/bot/581090432092733450


    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    }); //https://top.gg/bot/581090432092733450

  });//https://top.gg/bot/581090432092733450


console.error(files.length + ' Komut yüklendi.Rönesans iyi kullanımlar diler.')
}); //https://top.gg/bot/581090432092733450


//https://top.gg/bot/581090432092733450


client.on("guildMemberAdd", async member => {

  if(member.bot) return

 let kanal = await db.fetch(`kayıtkanal_${member.guild.id}`)

 if(!kanal) return
 //https://top.gg/bot/581090432092733450

 let mesaj = await db.fetch(`kayıtmesaj_${member.guild.id}`)

  if(mesaj) {//https://top.gg/bot/581090432092733450
    //https://top.gg/bot/581090432092733450



let sonuc = mesaj.replace("-uye-", `${member.user.tag}`).replace("-uyetag-", `<@!${member.id}>`).replace("-üyesayı-", `${member.guild.memberCount}`)

client.channels.get(kanal).send(sonuc)

  } else {
    //https://top.gg/bot/581090432092733450


 let mesaj = `:star: <@!${member.id}>,**${member.guild.name}** Sunucumuza hoşgeldin! :star: \n\n > Seninle beraber **${member.guild.memberCount}** Kişiyiz! \n > Kayıt yetkilileri seninle ilgilenecek.`

 client.channels.get(kanal).send(mesaj)
  }
  //https://top.gg/bot/581090432092733450



})


//https://top.gg/bot/581090432092733450

//https://top.gg/bot/581090432092733450




////////////////////////
client.on('message', msg => {

if (!msg.content.startsWith(prefix)) {
    return;
  }
  //https://top.gg/bot/581090432092733450

  });


client.elevation = message => {
  if(!message.guild) {//https://top.gg/bot/581090432092733450

	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};//https://top.gg/bot/581090432092733450


client.login(ayarlar.token);//https://top.gg/bot/581090432092733450
//https://top.gg/bot/581090432092733450
