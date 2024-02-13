'use strict';

let title = document.querySelector('.js-title');
const message = document.querySelector('.js-message');
const container = document.querySelector('.js-container');
const warning = document.querySelector('.warning');


if(container.classList.contains('warning')){
    title.innerHTML = 'AVISO';
    message.innerHTML = 'Tenga cuidado.';
}else if(container.classList.contains('error')){
    title.innerHTML = 'ERROR';
    message.innerHTML = 'Ha surgido un error.'
}else if(container.classList.contains('success')){
    title.innerHTML = 'CORRECTO';
    message.innerHTML = 'Los datos son correctos.'
}


console.log(warning)