
let checks = document.querySelectorAll(".check");

const btn = document.getElementById("return");

btn.addEventListener("click", function(){
    for(let i = 0;  i<checks.length; i++){


        let h1 = document.getElementById("chekers");
        // checks[i].style.backgroundColor = colors[i];
        if(checks[i].checked === true){

            if(checks[0].checked === true){
                h1.innerHTML = "edited"
            }
            if(checks[1].checked === true){
                h1.innerHTML = "update"
            }
            if(checks[2].checked === true){
                h1.innerHTML = "create"

            }
            if(checks[3].checked === true){
                h1.innerHTML = "delete"

            }

        }
    }
});


