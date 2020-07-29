const data-previous = document.querySelector("#data-data-previous");
const current = document.querySelector("#data-current");
const data = document.querySelectorAll (".data-operation");
const datax = document.querySelectorAll (".data-number");


for(let i=0;i<datax.length;i++){

    datax[i].addEventListener("click", ()=>{
            data-previous.textContent = datax[i].innerHTML;
            alert(datax[i])
    });
}

function getHistory(){
	return document.getElementById("data-previous").innerText;
}

function printHistory(num){
	document.getElementById("data-previous").innerText=num;
}
function getOutput(){
	return document.getElementById("data-current").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("data-current").innerText=num;
	}
	else{
		document.getElementById("data-current").innerText=getFormattedNumber(num);
	}
}


const getFormattedNumber= (num) => {
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}

function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}



var operator = document.querySelectorAll(".data-operation");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}

	});
}

var number = document.querySelectorAll(".data-number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}
