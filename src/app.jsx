import React from "react";
import ReactDOM from "react-dom";
import Thumbnail from "./components/thumbnail.jsx";
import MainBox from "./components/main-box.jsx";



export default class App extends React.Component{

	render(){
		return (
			<div className = "jumbotron row">
				<div className = "col-md-4"></div>
				<div className = "col-md-4">
				</div>
			</div>
		);
	}

}

var app = </App>; // Instantiating the class element OR Creates a React Element from a React Component
var node = document.getElementById("app");

ReactDOM.render(app ,node);