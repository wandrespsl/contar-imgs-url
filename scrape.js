const request = require('request');
const cheerio = require('cheerio');

request('https://www.pslcorp.com/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

         const kwds = $('img');
        console.log("En este sitio hay: "+ kwds.length + " imagenes");   
        // console.log(kwds.text());    
        
        // const output = kwds.find('img').length;
        // const output = kwds.children('li').length;
        // console.log(output);    
    }
});