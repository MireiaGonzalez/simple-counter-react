//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

//Timer
let counterNumbers = 0;
let counter = [0, 0, 0, 0, 0];

const simpleCounter = () => {
	console.log(counter);
	console.log(counterNumbers);
	if (counterNumbers < 10) {
		let splitCount = String(counterNumbers).split("");
		counter[4] = splitCount[0];
		counterNumbers++;
	} else if (counterNumbers >= 10 && counterNumbers < 100) {
		let splitCount = String(counterNumbers).split("");
		counter[3] = splitCount[0];
		counter[4] = splitCount[1];
		counterNumbers++;
	} else if (counterNumbers >= 100 && counterNumbers < 1000) {
		let splitCount = String(counterNumbers).split("");
		console.log(splitCount);
		counter[2] = splitCount[0];
		counter[3] = splitCount[1];
		counter[4] = splitCount[2];
		counterNumbers++;
	} else if (counterNumbers >= 1000 && counterNumbers < 10000) {
		let splitCount = String(counterNumbers).split("");
		console.log(splitCount);
		counter[1] = splitCount[0];
		counter[2] = splitCount[1];
		counter[3] = splitCount[2];
		counter[4] = splitCount[3];
		counterNumbers++;
	} else if (counterNumbers >= 10000 && counterNumbers < 100000) {
		let splitCount = String(counterNumbers).split("");
		console.log(splitCount);
		counter[0] = splitCount[0];
		counter[1] = splitCount[1];
		counter[2] = splitCount[2];
		counter[3] = splitCount[3];
		counter[4] = splitCount[4];
		counterNumbers++;
	} else {
		counter[0] = 0;
		counter[1] = 0;
		counter[2] = 0;
		counter[3] = 0;
		counter[4] = 0;
		counterNumbers = 1;
	}
};
window.onload = setInterval(() => {
	simpleCounter();
	ReactDOM.render(
		<Home
			seconds5={counter[4]}
			seconds4={counter[3]}
			seconds3={counter[2]}
			seconds2={counter[1]}
			seconds1={counter[0]}
		/>,
		document.querySelector("#app")
	);
}, 1000);
