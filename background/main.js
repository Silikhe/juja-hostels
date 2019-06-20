const btn = document.querySelector("button");

let isPurple = false;

btn.addEventListener("click", function (){

   // alert("clicked!!")
     if(isPurple){
          document.body.style.background = "blue";
     }else{
      document.body.style.background = "purple";
     }

     isPurple = !isPurple;

});