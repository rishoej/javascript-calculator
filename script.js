// Find value
function findValue(){
	return value = document.getElementById("calculator").innerHTML;
}


// When user press a number 
function number(n){
	findValue();
	if(value === 0 || value === "0"){
		value = "";
	}
	document.getElementById("calculator").innerHTML = value + n;
}


// When user press "."
function comma(){
	findValue();
	document.getElementById("calculator").innerHTML = value + "."; 
}


// When user press "="
function result(){
	findValue();
	document.getElementById("calculator").innerHTML = eval(value); // Using eval to get the result of the input
}


// When user press "C" it will reset
function reset(){
	document.getElementById("calculator").innerHTML = 0; // Set display to 0 
}