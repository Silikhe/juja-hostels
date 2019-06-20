const p1Button = document.querySelector("#p1");
const p2Button = document.getElementById("p2");
const h1Display = document.querySelector("#display");
const h2Display = document.querySelector("#display1");
const reset = document.querySelector("#reset");
const input = document.querySelector("#number");
const p = document.querySelector("#change");

let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore ="";

p1Button.addEventListener("click", function(){

    if(!gameOver){
        p1Score++;

        if(p1Score=== winningScore){
            gameOver = true;
            h1Display.classList.add("winner");
        }
        h1Display.textContent = p1Score;
        if(gameOver== true){
            // h1Display.classList.add("over");
        }
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;

        if(p2Score=== winningScore){
            gameOver = true;
            h2Display.classList.add("winner");
        }
        h2Display.textContent = p2Score;
    }
});



reset.addEventListener("click", function(){
   reNew();

});


function reNew(){
    p1Score = 0;
    p2Score =0;
    h1Display.textContent = 0;
    h2Display.textContent = 0;
    h1Display.classList.remove("winner");
    h2Display.classList.remove("winner");
    gameOver = false;
}


input.addEventListener("change", function(){
    p.textContent = input.value;
    winningScore = Number(input.value)
});