const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');
dotenv.config();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.TOKEN);
client.on('message', message => {
	if (message.content === '!ping') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	}
});