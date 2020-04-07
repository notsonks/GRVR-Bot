const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();

const token = process.env.token || fs.readFileSync('token', 'utf8');


bot.on('ready', () =>{
    console.log('# Bot online!\n####################################################');
    bot.user.setPresence({ activity: { name: '' }, status: 'online' });

    console.log(bot.guilds);
    console.log(bot.channels);
});

bot.on('guildMemberAdd', async member=> {
    
    var welcomeChannel = bot.channels.resolve('687548393870196738');

    welcomeChannel.send('Welcome <@' + member.user.id + '> to the server! *~meow*');
    
});

bot.login(token);