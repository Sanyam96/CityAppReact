
// import * as React from "react";
// "react" is a node module : module.exports
// React 


import React from "react";
import ReactDOM from "react-dom";

// Define a React Component here
// This will generate a <div> with the text Hello World in it

class HelloWorld extends React.Component{
	render(){
		return (<div>Hello World From React</div>)
	}
}

//var x = <div> Hello World </div>	// HTML components : Instantation of RC 
var elem = <HelloWorld/> 	// REACT Element : Instantation of RC 
var node = document.getElementById("app");


// Render this React Component into the DOM

ReactDOM.render(elem, node);