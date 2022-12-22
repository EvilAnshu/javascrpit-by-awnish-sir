import {Component} from './react.js'

class Test extends Component{
	state={
	student:{
		name : "pawan",
		class : "10th",
	}
}


doSomething(){
	var state={
		student:"Good Student",
	}
	console.log("Calling of local variable" , state.student);
	console.log("Calling of Global Variable" , this.state.student);
	var newStudent = {
		name : "Ajeet",
		class : "12th",
	}
	this.setState({
		student:newStudent,
	})
	console.log("Calling of Global Variable" , this.state.student);
}

}

var test= new Test();
test.doSomething();

















