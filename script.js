let password = document.getElementById("pass");
let result = document.getElementById("result");

password.onkeyup = function(){

let value = password.value;
let length = value.length;

if(length < 6){

result.innerHTML = "Weak Password";
result.style.color = "red";

}

else if(length <= 10){

result.innerHTML = "Medium Password";
result.style.color = "orange";

}

else{

result.innerHTML = "Strong Password";
result.style.color = "green";

}

}