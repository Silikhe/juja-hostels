let colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(225, 0, 255)"
]

let squares = document.querySelectorAll(".square");

let colorDisplay = document.getElementById("colorDisplay");

pickedColor = colors[3];

colorDisplay.textContent = pickedColor;


for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            alert("correct");
        }else{
            this.style.background = "#232323";
        }
    });
}

