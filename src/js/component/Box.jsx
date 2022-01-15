import React from "react";
import PropTypes from "prop-types";

const Box = (props) => {
	return (
		<div id="box">
			<span>{props.icon}</span>
			<h1>{props.insideBox}</h1>
		</div>
	);
};

export default Box;
