//setState

student={
	name : "anshu",
	age : 22,
}

function setStudent(key,value){
	student[key]=value;
}

console.log("Before Calling " , student);
setStudent("name","Verma");
console.log("After Calling " , student);







//state variable
var state={
	student:{
		name : "pawan",
		class : "10th",
	}
}

//set State function => Custom
function setState(object){
	state=object;
}

let newStudent = {
	name : "Ajeet",
	class : "12th",
}

console.log("Before Calling " , state.student);
setState({
	student:newStudent
});
console.log("After Calling " , state.student);



















