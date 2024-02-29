'use strict'

/*

ejercicio 1

    - URL base de la API : https://swapi.py4e.com/api/

    - ¿necesita autenticación? No.

    - método HTTP que deben usar las peticiones a este API - Solo GET.

    - URL para acceder a la info del personaje 'Luke Skywalker' - https://swapi.py4e.com/api/people/1
    
    - URL para acceder a la info de la película 'A new hope' - https://swapi.py4e.com/api/films/1/

    - A qué otros recursos puedo acceder desde el API además de personajes y peli - vehículos, naves, especies y planetas

    - URL para acceder al listado de personajes, ¿está paginada? - Sí. /api/people/?page=3

    - cómo puedo buscar personajes mediante la URL - https://swapi.py4e.com/api/people/?search=r2

    - cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee - https://swapi.py4e.com/api/planets/1/?format=wookiee
*/ 

const button = document.querySelector('.js-button');
const input = document.querySelector('.js-input');
const list = document.querySelector('.js-list');


function renderCharacter(characters){
   for(let character of characters){
    list.innerHTML += `<li>${character.name} (${character.gender})</li>`;
   }
}

const handleClick = (event) => {
    event.preventDefault();
   let inputName = input.value;

   
    fetch (`https://swapi.py4e.com/api/people/?search=${inputName}`)
        .then((response) => response.json()) 
        .then((data) => {
           const characters = data.results;
           console.log(characters);
           renderCharacter(characters);
    });
}

button.addEventListener('click', handleClick);



   
