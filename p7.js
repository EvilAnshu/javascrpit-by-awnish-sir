var a=20;
function demo()
{
	let b=30;
	console.log("inside local scope of function a= ",a);
	console.log("inside local scope of function b= ",b);
}

demo();

console.log("inside local scope of function a= ",a);
//console.log("inside local scope of function b= ",b);

//console.log("window Object a=",window.a);
