import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{

	render(){
		return (
			<div>
			</div>
		);
	}

}

var app = </App>; // Instantiating the class element OR Creates a React Element from a React Component
var node = document.getElementById("app");

ReactDOM.render(app ,node);