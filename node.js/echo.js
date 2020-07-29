// function echo(str, num){
//     for(let i=0; i<num; i++){
//         console.log(str);
//     }
// }

// echo("sila", 20)

scores =[90,98,89,100,86,94]

// function avarage(scores){
// return Math.round(scores.reduce((a, b) => a+b, 0)/scores.length)
// }


// console.log(avarage(scores))

function avarage(scores){
    // return Math.round(score.reduce((a, b) => a+b, 0)/scores.length)
    let total = 0;
    scores.forEach(score => {
        score += total;
    });
    let avg = total/scores.lenght;
    let sum = Math.round(avg);
    return sum;
    }
console.log(avarage(scores))

//     avarage()