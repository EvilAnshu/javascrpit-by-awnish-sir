// This is Hooks using Array

let b = "even";
let c = function(){ return "odd";};

let setB = c();

let arr=[b,setB];
let x=10;
console.log(arr[x%2]);