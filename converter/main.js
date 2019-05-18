// array
// var myMenu =[
// {
//     foodImage: "",
//     h3 :"buffed chicken",
//     description :"",
//     cost :350,
//     add: true
// },
// {
//     foodImage :"image url",
//     h3 :"buffed chicken",
//     description :"delicious",
//     cost: 350,
//     add: true
// },
// {
//     foodImage :"image url",
//     h3 :"buffed chicken",
//     description: "delicious",
//     cost: 350,
//     add: true
// },
// {
//     foodImage: "image url",
//     h3: "buffed chicken",
//     description: "delicious",
//     cost: 350,
//     add: true
// }
// ];




// const addFood = myMenu.filter(function(){
//     if(add = true){
//         function addAll(...food){
//             let total = 0;
//             food.forEach((num) => {
//                 total += num;;
//             });

//             return total;
//         }
//     }
// });




// // let placeOrder = document.querySelector('place-order')



// // placeOrder.addEventListener('submit', addItem);

// // function addItem(e){
// //     e.preventDefault();

// // };

// // console.log(placeOrder);


// // let output = "";

// // for(let i = 0;i < myMenu.lenth; i++){
// //     output += '<li>'+myMenu[i].cost+'</li>';
// // }

// // document.querySelector('#people').innerHTML = output;



// // const person = {
// //     name
// // }


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



