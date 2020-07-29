let numSquares = 6;
// let colors = generateRandomColor(numSquares);
let colors = [];
// let pickColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let h1 = document.querySelector("h1");
let msg = document.getElementById("message");
let resetBtn = document.querySelector("#reset");
// let easyBtn = document.querySelector("#easyBtn");
// let hardBtn = document.querySelector("#hardBtn");
let modeBtn = document.querySelectorAll(".mode");
let coun = document.querySelector(".count");


init()

function init(){
    for(let i = 0; i < modeBtn.length; i++){

        modeBtn[i].addEventListener("click", function(){

            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
               if(this.textContent === "Easy"){
                   numSquares =  3;
               }else{
                   numSquares = 6;
               }

            reset();

        });
    }

for(let i = 0; i < squares.length; i++){
    // squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            msg.textContent = "Corrrect";
            resetBtn.textContent = "PLAY AGAIN?"
            changeColor(clickedColor);
            h1.style.background = pickedColor;
        }else{
            this.style.background = "#232323";
                msg.textContent = "Try Again";
        }
    });
}

reset();

}

// for(let i = 0; i < modeBtn.length; i++){

//     modeBtn[i].addEventListener("click", function(){

//         modeBtn[0].classList.remove("selected");
//         modeBtn[1].classList.remove("selected");
//         this.classList.add("selected");
//            if(this.textContent === "Easy"){
//                numSquares =  3;
//            }else{
//                numSquares = 6;
//            }

//         reset();

//     });
// }

function reset(){
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    resetBtn.textContent = "NEW COLOR"
    msg.textContent = "";


    for(let i = 0; i < squares.length; i++){

        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }

    h1.style.background = "steelblue"
}



// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(let i = 0; i < squares.length; i++){
//        if(colors[i]){
//            squares[i].style.background = colors[i];
//        }else{

//            squares[i].style.display = "none";
//        }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(let i = 0; i < squares.length; i++){

//            squares[i].style.background = colors[i];

//            squares[i].style.display = "block";

//     }

// });

resetBtn.addEventListener("click", function(){
    // colors = generateRandomColor(numSquares);
    // pickedColor = pickColor();
    // colorDisplay.textContent = pickedColor;

    // for(let i = 0; i < squares.length; i++){
    //     squares[i].style.background = colors[i];
    // }

    // h1.style.background = "steelblue"
    // msg.textContent = "";
    // this.textContent = "RESET";
    // count.style.display = "block";
    // coun.style.display = "block";
    // time()

        reset()
});

// pickedColor = pickColor();
// colorDisplay.textContent = pickedColor;
// count.style.display = "none";
// coun.style.display = "none";


// for(let i = 0; i < squares.length; i++){
//     squares[i].style.backgroundColor = colors[i];

//     squares[i].addEventListener("click", function(){
//         clickedColor = this.style.backgroundColor;

//         if(clickedColor === pickedColor){
//             msg.textContent = "Corrrect";
//             resetBtn.textContent = "PLAY AGAIN?"
//             changeColor(clickedColor);
//             h1.style.background = pickedColor;
//         }else{
//             this.style.background = "#232323";
//                 msg.textContent = "Try Again";
//         }
//     });
// }

function changeColor(colors){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.background = colors;
    }
}


function pickColor(){
  let random =  Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generateRandomColor(num){
    let arr = [];

    for(let i = 0; i < num; i++){
      arr.push(randomColor())
    }

    return arr;
}

function randomColor(){
    // red
  let r =  Math.floor(Math.random() * 256);
    // green
   let g = Math.floor(Math.random() * 256);
    // blue
   let b = Math.floor(Math.random() * 256);

   return "rgb(" + r + ", " + g + ", " + b + ")";
}



function time(){

let count = document.getElementById("count");

let counter = 0;
let timeLeft = 60;

function convertSec(){

    let mins  = Math.floor(counter/60);
    let secs = counter % 60;
    return  mins + ":"+ secs;
}

function setup(){

    count.textContent =convertSec(timeLeft-counter);

    function timeIt(){
        counter++;
        count.textContent = convertSec(timeLeft-counter);
    }

    setInterval(timeIt, 1000);
}

setup()
console.log(convertSec())    ;
}

time();