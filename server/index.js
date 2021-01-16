"use strict";

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require( "body-parser" );
const fs = require('fs');
const https = require('https');
const cookieParser = require('cookie-parser');

app.use( cookieParser() );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../src')));




//API
app.use( '/auth', require( './api/auth' ) );
app.use( '/data', require( './api/results' ) );
app.use( '/test', require( './api/send_test' ) );
//


app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../src/index.html'));
});




const httpsOptions = {
    key: fs.readFileSync(path.resolve( 'server','security', 'cert.key')),
    cert: fs.readFileSync(path.resolve( 'server','security', 'cert.pem'))
};///Local certificate for https



const server = https.createServer(httpsOptions, app)
    .listen(3000, () => {
        console.log('server running at ' + 3000)
    });