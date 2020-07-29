// let count = document.getElementById("count");

// let counter = 0;
// let timeLeft = 60;

// function convertSec(){
//     let mins  = Math.floor(counter/60);
//     let secs = counter % 60;

//     return  mins + ":"+ secs;
// }

// function setup(){

//     count.textContent =convertSec(timeLeft-counter);


//     function timeIt(){
//         counter++;
//         count.textContent = convertSec(timeLeft-counter);
//     }

//     setInterval(timeIt, 1000);

// }

// setup()
// console.log(convertSec())    ;


// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
// console.log("Your number is the square root of " +
// theNumber * theNumber);
// }

let theNumber = prompt("Pick a number");
alert("Your number is the square root of " +
theNumber * theNumber);