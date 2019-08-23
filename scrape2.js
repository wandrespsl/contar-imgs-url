const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const WriteStream = fs.createWriteStream('result.txt');
// const WriteStream = fs.createWriteStream('result.csv');

//write Headers
WriteStream.write(`Title,Link \n`);

request('https://www.pslcorp.com/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        $('.accordionplus .panel-default').each((i, el) => {
            const title = $(el)
                .find('h3 a')
                .text();

            const link = $(el)
                .find('.panel-default a')
                .attr('href');

            //write txt
            WriteStream.write(`${title}, ${link} \n`);

            // console.log(title, link);

        });
        console.log('Scraping Done...');
    }
});

// https://gist.github.com/bradtraversy/7b68f19b0c502f1fbd0aa9bc4cfe793d#file-node_cheerio_scraping-js