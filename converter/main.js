// array
var myMenu =[
{
    foodImage: "",
    h3 :"buffed chicken",
    description :"",
    cost :350,
    add: true
},
{
    foodImage :"image url",
    h3 :"buffed chicken",
    description :"delicious",
    cost: 350,
    add: true
},
{
    foodImage :"image url",
    h3 :"buffed chicken",
    description: "delicious",
    cost: 350,
    add: true
},
{
    foodImage: "image url",
    h3: "buffed chicken",
    description: "delicious",
    cost: 350,
    add: true
}
];




const addFood = myMenu.filter(function(){
    if(add = true){
        function addAll(...food){
            let total = 0;
            food.forEach((num) => {
                total += num;;
            });

            return total;
        }
    }
});




// let placeOrder = document.querySelector('place-order')



// placeOrder.addEventListener('submit', addItem);

// function addItem(e){
//     e.preventDefault();

// };

// console.log(placeOrder);


// let output = "";

// for(let i = 0;i < myMenu.lenth; i++){
//     output += '<li>'+myMenu[i].cost+'</li>';
// }

// document.querySelector('#people').innerHTML = output;



// const person = {
//     name
// }






