import React from "react";

class Thumbnail extends React.Component{
	render(){
		var breathe = {
			marginLeft = '20px',
			marginRight = '20px'
		};
		return (
			<span style = {breathe}>
				<button className = "btn btn-default btn-lg">{
					this.props.title
				}
				</button>
			</span>
		);
	}
}