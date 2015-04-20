var http = require('http');
var contadorUsuario = 0;
var puerto = 8081;
http.createServer(function (request, response)
{
    if(request.url !== '/favicon.ico')
    {
	    console.log('Nueva conexión de usuario');
	    contadorUsuario++;
	    response.writeHead(200, {'Content-Type': 'text/plain'});
	    response.write('Hola!\n');
	    response.write('Tenemos '+contadorUsuario+' visitantes en este momnto!\n');
	    response.end();
	}
}).listen(puerto);
console.log('Servidor a través dek puerto: ' + puerto);