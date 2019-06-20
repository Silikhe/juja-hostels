
// DOM var

let addMenu = document.querySelector('#add-menu');
let imageUrl = document.querySelector('#image-url');
let addBtn = document.querySelector('add-btn');
let myForm = document.querySelector('#my-form');
let msg = document.querySelector('.msg');
let foodMenu = document.querySelector('.food');
let newFood = document.querySelector('.new');

// let addMen = document.querySelector('.add-menu');



// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const add = document.querySelector('addFood');

// When the user clicks on the button, open the modal
btn.onclick = () => modal.style.display = "block";


// btn.onclick = () => myForm.style.display = 'none';


// When the user clicks on <span> (x), close the modal
span.onclick = () =>   modal.style.display = "none";


// When the user clicks anywhere outside of the modal, close it
window.onclick = (e) => {

  if (e.target == modal) {

    modal.style.display = "none";

  }
}






// myForm.addEventListener('submit', onsubmit);


// function onsubmit(e){

//   e.preventDefault();


//   if(imageUrl.value===''){

//         msg.classList.add('error');

//        msg.innerHTML = 'please fill';

//      setTimeout(() => msg.remove(), 3000);


//   } else{
//        addMenu.style.display = 'none';

//       let createFood = document.createElement('div');

//       let newMenu =document.createElement('div');

// createFood.style = 'ingridients'

//     newMenu.appendChild(document.setAtrribute(''));

//      newFood.appendChild(newMenu);

//      imageUrl.value = '';


// //   }

// }

let checks = document.querySelectorAll(".check");

let price = document.querySelector("#price");

let h2 = document.querySelector("#come");


let item = document.querySelector(".item");


btn.addEventListener("click", function(){

  for(let i = 0;  i<checks.length; i++){

        checks[i].addEventListener("click", function(){
          console.log(item);
        });
  }
});
