"use strict";


const btn_start = document.querySelector( '.btn-start' );
const page_welcome = document.querySelector( '.page-welcome' );
const page_test = document.querySelector( '.page-test' );
const page_complete = document.querySelector( '.page-complete' );


btn_start.addEventListener( 'click', async ( e ) => {
    page_welcome.style.display = 'none';
    page_test.style.display = 'block';

    const token = await fetch('https://localhost:3000/auth').then(function(response) {
        if (response.ok) return response.text();
        else throw Error('Failed to get JWT');
    });


    createExes(token)

} );

const iframe = document.querySelector('.test-frame');
async function createExes(token) {

    iframe.setAttribute('value', JSON.parse(token));
    iframe.setAttribute('src', 'https://localhost:3000/test');
}

function backHome() {
    iframe.setAttribute('src', '');
    page_welcome.style.display = 'block';
    page_test.style.display = 'none';
}

function complete() {
    iframe.setAttribute('src', '');
    page_test.style.display = 'none';
    //NEED some api for request results

    page_complete.style.display = 'block';
}




