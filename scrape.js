const request = require('request');
const cheerio = require('cheerio');

request('https://www.pslcorp.com/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        // const readClass = $('.custom-labs-case-studies');
        
        // const nImgs = $('img');
        // console.log("En este sitio hay: " + nImgs.length + " imagenes");
        // console.log(nImgs.text());    

        // const output = readClass.find('h1').next().text();
        // const output = readClass.find('h1').text();
        // const output = readClass.children('h1').length;
        // console.log(output);    

        $('.custom-insights a').each((i, el) => {
            const item = $(el).text();
            const link = $(el).attr('href');

            console.log(link);
            
        });
    }
});