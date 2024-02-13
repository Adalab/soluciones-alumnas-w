'use strict';

let dogYears = document.querySelector('.js-dog-years').value;

const text = document.querySelector('.text');

 if (dogYears == 1) {
     text.innerHTML ='Your dog is' + (parseInt(dogYears) + 15) + ' human years old.';
    
 } else if (dogYears == 2) {
     text.innerHTML ='Your dog is' + ' ' + ((parseInt(dogYears) + 15) + 9 + ' human years old.');
 } else if (dogYears >= 3) {
    text.innerHTML ='Your dog is' + ' ' + ((15 + 9) + (5 * (parseInt(dogYears) - 2))) + 'human years old.';
 }
//console.log(dogYears);