import React from "react";

export default class MainBox extends React.Component{
	render(){
		return (
			<div>
				<img className = "img-rounded" src = {this.props.url} alt = {this.props.title}/>
			</div>
			);
	}
	
}