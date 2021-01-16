"use strict";
require('dotenv').config();

const express = require( "express" );
const router = express.Router();
const path = require('path');

router.get( '/', async ( req, res ) => {

    res.sendFile(path.resolve(__dirname, '../../src/tests-pages/test.html'));
} );


module.exports = router;