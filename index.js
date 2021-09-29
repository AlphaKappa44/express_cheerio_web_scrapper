const PORT = 8000;

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

// Use axios to pick html
const url = 'https://www.theguardian.com/uk';
axios(url)
    .then(response => {
        const html = response.data;
        console.log(html);
    });

app.listen(PORT, () => console.log(`the server is running on ${PORT}`));