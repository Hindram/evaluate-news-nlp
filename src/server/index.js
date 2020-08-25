const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const aylienText = require("aylien_textapi");
const cors = require('cors');
const bodyParser = require('body-parser');

// Aylien API credentials
const textapi = new aylienText({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

const app = express()

// url encoder
app.use(bodyParser.urlencoded({ extended: false }));
// json
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'))

//console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/addRecord', (req, res) => {
    textapi.sentiment({ 
        url: req.body.url,
        mode: 'document'
}, function (error, response) {
        console.log(response);
        res.send(response);
    });
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


