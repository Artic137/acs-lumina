const Discord = require('discord.js');
const client = new Discord.Client();

var personaje = new Array(74)
var tabla_artic = new Array(74)
var tabla_solarblair = new Array(74)
var tabla_blitzex = new Array(74)
var texto = ''

// Personajes
personaje[0] = 'Mario';
personaje[1] = 'Donkey Kong';
personaje[2] = 'Link';
personaje[3] = 'Samus';
personaje[4] = 'Samus Oscura';
personaje[5] = 'Yoshi';
personaje[6] = 'Kirby';
personaje[7] = 'Fox';
personaje[8] = 'Pikachu';
personaje[9] = 'Luigi';
personaje[10] = 'Ness';
personaje[11] = 'Captain Falcon';
personaje[12] = 'Jigglypuff';
personaje[13] = 'Peach';
personaje[14] = 'Daisy';
personaje[15] = 'Bowser';
personaje[16] = 'Ice Climbers';
personaje[17] = 'Sheik';
personaje[18] = 'Zelda';
personaje[19] = 'Dr. Mario: ';
personaje[20] = 'Pichu';
personaje[21] = 'Falco';
personaje[22] = 'Marth';
personaje[23] = 'Lucina';
personaje[24] = 'Link ni\u00F1o';
personaje[25] = 'Ganondorf';
personaje[26] = 'Mewtwo';
personaje[27] = 'Roy';
personaje[28] = 'Chrom';
personaje[29] = 'Mr. Game & Watch';
personaje[30] = 'Meta Knight';
personaje[31] = 'Pit';
personaje[32] = 'Pit Sombr\u00EDo';
personaje[33] = 'Samus Zero';
personaje[34] = 'Wario';
personaje[35] = 'Snake';
personaje[36] = 'Ike';
personaje[37] = 'Entrenador Pok\u00E9mon';
personaje[38] = 'Diddy Kong';
personaje[39] = 'Lucas';
personaje[40] = 'Sonic';
personaje[41] = 'Rey Dedede';
personaje[42] = 'Olimar';
personaje[43] = 'Lucario';
personaje[44] = 'R.O.B.';
personaje[45] = 'Toon Link';
personaje[46] = 'Wolf';
personaje[47] = 'Aldeano';
personaje[48] = 'Mega Man';
personaje[49] = 'Entrenadora de Wii Fit';
personaje[50] = 'Estela y Destello';
personaje[51] = 'Little Mac';
personaje[52] = 'Greninja';
personaje[53] = 'Luchador Mii';
personaje[54] = 'Palutena';
personaje[55] = 'Pac-Man';
personaje[56] = 'Daraen';
personaje[57] = 'Shulk';
personaje[58] = 'Bowsy';
personaje[59] = 'D\u00FAo Duck Hunt';
personaje[60] = 'Ryu';
personaje[61] = 'Ken';
personaje[62] = 'Cloud';
personaje[63] = 'Corrin';
personaje[64] = 'Bayonetta';
personaje[65] = 'Inkling';
personaje[66] = 'Ridley';
personaje[67] = 'Simon';
personaje[68] = 'Richter';
personaje[69] = 'King K. Rool';
personaje[70] = 'Canela';
personaje[71] = 'Incineroar';
personaje[72] = 'Planta Pira\u00F1a';
personaje[73] = 'Joker';



client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {	
// Inicializar
  if(msg.content.startsWith("/inicializar")) {
	msg.delete();
	if (msg.author.username === 'Artic') {
	  funcion_inicializar(msg)
	}
  }

// Consultar usos de personajes
  if (msg.content.startsWith("/consulta")) {
	funcion_consultar(msg)
  }

// Añadir personaje
  if (msg.content.startsWith("/uso")) {
	funcion_uso(msg)
  }

});


///////////////////////
///// Inicializar /////
///////////////////////
function funcion_inicializar(msg) {
  for (var i = 0; i < personaje.length; i++) {
	tabla_artic[i] = 0;
	tabla_solarblair[i] = 0;
	tabla_blitzex[i] = 0;
  }
  msg.reply('has inicializado los usos de personajes de todos los jugadores.');
};


///////////////////////
/////// Consulta //////
///////////////////////
function funcion_consultar(msg) {
  var tabla_aux = new Array(74)
  var contador = 0
  msg.delete();
  if (msg.author.username === 'Artic') tabla_aux = tabla_artic;
  if (msg.author.username === 'Solarblair') tabla_aux = tabla_solarblair;
  if (msg.author.username === 'Blitzex') tabla_aux = tabla_blitzex;

  for (var i = 0; i < personaje.length; i++) {
	if (tabla_aux[i] != 0) contador++;
  }
  
  if (contador != 0) {
  for (var i = 0; i < personaje.length; i++) {
	if (tabla_aux[i] != 0 && tabla_aux[i] != 5)
	  texto = texto + personaje[i] + ': ' + tabla_aux[i] + '\n';
        if (tabla_aux[i] === 5)
	  texto = texto + personaje[i] + ': ' + tabla_aux[i] + '. \u00A1No puedes utilizar a ' + personaje[i] + ' m\u00E1s veces! \n';
  }
  msg.reply('este es el n\u00FAmero de veces que has utilizado cada personaje: \n' + texto);
  }

  else {msg.reply('no has a\u00F1adido ning\u00FAn personaje. Utiliza el comando /' + 'uso de la siguiente manera: \n' + '/' + 'uso Personaje \n' + 'Deja un espacio entre el comando y el personaje. Escribe el nombre del personaje con la primera letra en may\u00FAscula.');}
  texto = '';
};


///////////////////////
///////// Uso /////////
///////////////////////
function funcion_uso(msg) {
  var pjn = ''
  var indice = null;
  var texto = '"';
  var aux = true;

  msg.delete();

  pjn = msg.content.substr(5);
  for (var i = 0; i < personaje.length; i++) {
	if (pjn === personaje[i]) indice = i;
  }

  if (indice != null) {
	if (msg.author.username === 'Artic' && tabla_artic[indice] <= 5) tabla_artic[indice]++;
	if (msg.author.username === 'Artic' && tabla_artic[indice] === 6) {
		msg.reply('No puedes a\u00F1adir m\u00E1s usos de ' + personaje[indice]);
		tabla_artic[indice]--;
		aux = false;
	 }

	if (msg.author.username === 'Solarblair' && tabla_solarblair[indice] <= 5) tabla_solarblair[indice]++;
	if (msg.author.username === 'Solarblair' && tabla_solarblair[indice] === 6) {
		msg.reply('No puedes a\u00F1adir m\u00E1s usos de ' + personaje[indice]);
		tabla_solarblair[indice]--;
		aux = false;
	 }

	if (msg.author.username === 'Blitzex' && tabla_blitzex[indice] <= 5) tabla_blitzex[indice]++;
	if (msg.author.username === 'Blitzex' && tabla_blitzex[indice] === 6) {
		msg.reply('No puedes a\u00F1adir m\u00E1s usos de ' + personaje[indice]);
		tabla_solarblair[indice]--;
		aux = false;
	 }

	if(aux) msg.reply('has a\u00F1adido un uso de ' + pjn + '.');
	
  }
  else {
	for (var i = 0; i < personaje.length; i++) {
	  if (i === 73) texto = texto + personaje[i] + '".';
	  else {texto = texto + personaje[i] + '", "';}
	}
	msg.reply('has escrito mal el nombre del personaje. Los nombres exactos que debes utilizar se indican a continuaci\u00F3n. Debes escribir los espacios y tildes que correspondan sin las comillas: \n' + texto);
  }
  
};

// Token para método por Github
client.login(process.env.BOT_TOKEN);
