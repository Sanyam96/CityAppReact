import React from "react";
import ReactDOM from "react-dom";
import Thumbnail from "./components/thumbnail.jsx";
import MainBox from "./components/main-box.jsx";



export default class App extends React.Component{

	render(){
		return (
			<div>
				<div className = "jumbotron row">
					<div className = "col-md-4"></div>
					<div className = "col-md-4">
						<MainBox title = {data[0].title} url = {data[0].url}/>
					</div>
					<div className = "col-md-4"></div>
				</div>

				{
					data.map( function(object){ 
						return (
							<Thumbnail
								title = {object.title}
								url = {object.url}
							/>
						);
					}
					)
				}
			</div>
		);
	}
}

var app = </App>; // Instantiating the class element OR Creates a React Element from a React Component
var node = document.getElementById("app");

ReactDOM.render(app ,node);