"use strict";

const express = require( "express" );
const router = express.Router();

router.post( '/', async ( req, res ) => {

    const data_proctoring = req;
    //Some results proctoring
    res.send('ok')
} );


module.exports = router;