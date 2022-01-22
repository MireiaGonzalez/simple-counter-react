import React from "react";
import PropTypes from "prop-types";
import propTypes from "prop-types";

//create your first component
const Home = (props) => {
	return (
		<div id="content">
			<div className="container-fluid">
				<div id="all-boxes" className="d-flex flex-row">
					<div id="box1" className="box">
						<span>
							<i className="far fa-clock inside-box"></i>
						</span>
					</div>
					<div id="box2" className="box">
						<h1 className="inside-box">{props.seconds1}</h1>
					</div>
					<div id="box3" className="box">
						<h1 className="inside-box">{props.seconds2}</h1>
					</div>
					<div id="box4" className="box">
						<h1 className="inside-box">{props.seconds3}</h1>
					</div>
					<div id="box5" className="box">
						<h1 className="inside-box">{props.seconds4}</h1>
					</div>
					<div id="box6" className="box">
						<h1 className="inside-box">{props.seconds5}</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
