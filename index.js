const PORT = 8000;

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

// Use axios to extract html
const url = 'https://www.theguardian.com/uk';
axios(url)
    .then(response => {
        const html = response.data;
        // console.log(html);

        // use cheerio to pick one element
        const $= cheerio.load(html);
        // build an array
        const articles = [];

        $('.fc-item__title', html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        });
        console.log(articles);
    }).catch(err => console.log(err));

app.listen(PORT, () => console.log(`the server is running on ${PORT}`));