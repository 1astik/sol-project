"use strict";
require('dotenv').config();

const express = require( "express" );
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get( '/', async ( req, res ) => {
    const  payload = {
        "iat": 1610776759,
        "exp": 1610819959,
        "username": "f3b55610-9a9c-441f-8c26-3e83c4ce63f5",
        "nickname": "Dwayne1 Johnson",
        "template": "default",
        "id": "cea35233-8363-4767-8171-a89b266403b5",
        "subject": "JSDoc: Tutorial: proctoring",
        "tags": [
            "Dwayne1 Johnson"
        ],
        "timeout": 234123109879778,
        "api": "https://localhost:3000/data",
        "url": "https://localhost:3000/test"
    };

    const accessToken = jwt.sign(JSON.stringify(payload), process.env.ACCESS_TOKEN_SECRET, { header: {
            "alg": "HS256",
            "typ": "JWT"
        }
    });
    res.setHeader("Set-Cookie", "<cookie-name>=<cookie-value>; SameSite=None; Secure");
    res.setHeader("Content-Security-Policy", "frame-src https://*.proctoring.online");
    res.json(accessToken);
} );


module.exports = router;