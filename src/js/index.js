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
let helperCounter = 0;
let counter = 0;
let counter2 = 1;
let counter3 = 1;

const simpleCounter = () => {
	const num1 = document.querySelector("#num1");
	const num2 = document.querySelector("#num2");
	const num3 = document.querySelector("#num3");

	num1.innerHTML = counter;
	counter++;
	helperCounter++;
	if (counter === 10) {
		counter = 0;
	}
	if (counter2 === 10) {
		counter2 = 0;
	}
	if (counter3 === 10) {
		counter3 = 0;
	}
	if (helperCounter % 11 === 0) {
		num2.innerHTML = counter2;
		counter2++;
		helperCounter++;
	}
	if (helperCounter % 110 === 0) {
		num3.innerHTML = counter3;
		counter3++;
	}
};

window.onload = setInterval(() => {
	simpleCounter();
	ReactDOM.render(<Home />, document.querySelector("#app"));
}, 1000);
