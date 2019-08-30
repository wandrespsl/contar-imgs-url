const request = require("request");
const cheerio = require("cheerio");
const url =
  "https://www.pslcorp.com/comprehensive-outsourcing-quality-assurance-support";

request(url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

         const imgs = $('img');
        console.log("En este sitio hay: "+ imgs.length + " imagenes");
    }
});

