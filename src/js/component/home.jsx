import React from "react";
import Box from "./Box.jsx";

//create your first component
const Home = () => {
	return (
		<div id="content">
			<div className="container-fluid d-flex flex-row">
				<Box icon={<i class="far fa-clock inside-box"></i>} />
				<Box
					seconds={
						<h1 id="num6" className="inside-box">
							0
						</h1>
					}
				/>
				<Box
					seconds={
						<h1 id="num5" className="inside-box">
							0
						</h1>
					}
				/>
				<Box
					seconds={
						<h1 id="num4" className="inside-box">
							0
						</h1>
					}
				/>
				<Box
					seconds={
						<h1 id="num3" className="inside-box">
							0
						</h1>
					}
				/>
				<Box
					seconds={
						<h1 id="num2" className="inside-box">
							0
						</h1>
					}
				/>
				<Box
					seconds={
						<h1 id="num1" className="inside-box">
							0
						</h1>
					}
				/>
			</div>
		</div>
	);
};

export default Home;
