const Discord = require('discord.js');
const client = new Discord.Client();

var tabla_artic
var tabla_solarblair

client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {	
  if (msg.content.startsWith("/consulta")) {
	funcion_consultar(msg)
  }
});

function funcion_consultar(msg) {
  msg.reply('Este es el n\u00FAmero de veces que has utilizado cada personaje: \n' 
  );
};

client.login(process.env.BOT_TOKEN);



