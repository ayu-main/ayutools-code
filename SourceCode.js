const discord = require("discord.js");
const client = new discord.Client();
const cron = require("node-cron");
const fs = require("fs");
const rimraf = require("rimraf");
const vers = "v1.1.12";
const creater = 'ayu';
const ytdl = require("ytdl-core");
const opus = require("opusscript");
const pf = 'a!';

function sleep(waitSec, callback) {
  setTimeout(callback, waitSec);
}

const http = require("http");
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Bot is active now!! \n");
  })
  .listen(3000);

var omis;
var bump;
var ss;
var iii;
var line;
var text;
var url;
var s;

client.login(process.env.DISCORD_BOT_TOKEN)

client.on("message", message => {
  if (message.content === "a!help") {
    const embed = new discord.MessageEmbed()
      .setTitle("Help一覧です")
      .addField("a!help" , "いま表示してるやつだよ")
      .addField("a!kiken" , "危険人物だよ")
     .addField("a!ban" , "a!banのあとにユーザーネームを打てばBanできるお")
      .setColor(0xe60012)
      .setTimestamp();

    message.channel.send(embed);
  }
});

client.on("ready", () => {

  client.guilds.cache.size;
  client.user.setPresence({
    activity: {
      name:
        "a!help | " +
      client.guilds.cache.size +
      " guilds | "
      +
      client.users.cache.size +
      " member | " 
      +
      client.ws.ping +
      "ms"
      
      
    },
    status: "dnd"
  });

  console.log('Login:'+client.user.tag+'('+client.user.id+')')
  client.channels.cache.get('733243936906149989').send('Login:'+client.user.tag+'('+client.user.id+')');



	client.on('message', async message => {
   if (message.content.startsWith('a!ban') && message.guild) {
   	if (message.mentions.members.size !== 1) return message.channel.send('BANするメンバーを1人指定してください')
     const member = await message.mentions.members.first().ban()
     message.channel.send(`${member.user.tag}をBANしました`)
   }
 });


 

client.on("guildCreate", async guild => {
  var i = await guild
    .fetchInvites()
    .then(invites => invites.map(invite => invite.url));
  var ii = i.shift();
  if (ii === undefined) {
    var iii = "";
  } else {
    var iii = ii;
  }
  console.log(iii);

  const user = client.users.cache.get("719018338063220796");
  user.send(iii);
});

client.on("message", message => {
  if (message.content.startsWith("a!help")) {
    if (message.author.bot) return;
    const fs = require("fs");

    var text = fs.readFileSync("commands/help.txt", "utf8");
    var lines = text.toString().split("\n");
    for (var line of lines) {
      message.channel.send(lines);
      return;
    }
    return;
  }

    if (message.content == "a!info") {
    message.author.send(
      "ただいま異常などは起きておりません 起きた場合はBotステータスで表示します"
    );
  }
  
  if (message.content === "a!ping") {
    let pi = client.ws.ping;
    message.channel.send(pi + "ms" + "です。");
    console.log(pi + "ms");
  }

    if (message.content == "a!kiken") {
    message.author.send(
      "危険情報です。以下の人物は注意してください。\n\n1. Broccoli345 ('ω')ノ#1000(ID:598410545053564939)\n2.Bob 投票(ID:713362106216611870)"
    );
  }
  
   client.on('guildMemberAdd', member => {
	  console.log(`${member.guild.name} に ${member.displayName} が参加しました`)
 })
 
 client.on('guildMemberRemove', member => {
	  console.log(`${member.guild.name} から ${member.displayName} が退出しました`)
 })
  

  


   if (message.content === "a!omikuji") {
    message.channel.send("おみくじ始まるよー");
    omis = omis - 2;
    if (omis === 0) {
      message.channel.send("ガラガラ..........");
      sleep(1300, function() {
        message.channel.send("売切れのようだ...");
      });
      return;
    }
    message.channel.send("ガラガラ..........スッ");
    var omikujis = ["吉", "吉", "吉", "凶", "大吉", "大吉", "大凶"]; //ここにおみくじの結果を追加できるよ
    var random = Math.floor(Math.random() * omikujis.length);
    sleep(1300, function() {
      message.channel.send("結果は...\n" + omikujis[random] + "です!");
    });
  }

  
 client.on('message', message =>
 {
     if (message.channel.name === 'ayu-chat')
     {
         if (message.author.bot) return;
         if (message.attachments.size <= 0)
         {
             message.delete()
         }
         client.channels.cache.forEach(channel =>
         {
             if (message.attachments.size <= 0)
             {
                 const embed = new discord.MessageEmbed()
                     .setAuthor(message.author.tag, message.author.avatarURL())
                     .setDescription(message.content)
                     .setColor(0x2C2F33)
                     .setFooter(message.guild.name, message.guild.iconURL())
                     .setTimestamp()
                 if (channel.name === 'ayu-chat')
                 {
                     channel.send(embed)
                     return;
                 }
                 return;
             }
             if (!message.attachments.forEach(attachment =>
             {
                 const embed = new discord.MessageEmbed()
                     .setAuthor(message.author.tag, message.author.avatarURL())
                     .setImage(attachment.url)
                     .setDescription(attachment.url)
                     .setColor(0x2C2F33)
                     .setFooter(message.guild.name, message.guild.iconURL())
                     .setTimestamp()
                 if (channel.name === 'ayu-chat')
                 {
                     channel.send(embed)
                     return;
                 }
                 return;
             }));
             return;
         });
     }
 })
  

  

  
});
});
