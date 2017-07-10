const snekfetch = require('snekfetch');
const Discord = require('discord.js');
exports.run = function(yumi, msg, args) {
  msg.channel.send(':x: | An error occured, API is down.')
  msg.edit(`:cat: MEOW!`).then(mes => {
  snekfetch.get("http://random.cat/meow").then(r => {
    snekfetch.get("http://catfacts-api.appspot.com/api/facts").then(res => {
    let parse = JSON.parse(res.body)
    let embed = new Discord.RichEmbed()
    .setImage(`${r.body.file}`)
    .setDescription(`**Cat Fact:** ${parse.facts[0]}`)
    .setColor(`#00800`)
    mes.edit({embed})
    }).catch(console.error);
  })
});
};