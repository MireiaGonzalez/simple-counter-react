import React from "react";
import propTypes from "prop-types";

const Box = (props) => {
	return (
		<div id="box">
			<span>{props.icon}</span>
			<h1>{props.seconds}</h1>
		</div>
	);
};

Box.propTypes = {
	seconds: propTypes.number,
};

export default Box;
