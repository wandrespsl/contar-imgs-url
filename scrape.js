const http = require('http');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const url = 'https://www.pslcorp.com/comprehensive-outsourcing-quality-assurance-support';

request(url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

         const kwds = $('img');
        console.log("En este sitio hay: "+ kwds.length + " imagenes");   
    }
});

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.end(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(3002, () => {
    console.log("El servidor está en escucha en el puerto 3002");
});