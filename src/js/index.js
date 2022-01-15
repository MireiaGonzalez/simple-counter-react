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
let counter = 0;

const simpleCounter = () => {
	const num1 = document.querySelector("#num1");
	const num2 = document.querySelector("#num2");
	const num3 = document.querySelector("#num3");
	const num4 = document.querySelector("#num4");
	const num5 = document.querySelector("#num5");
	const num6 = document.querySelector("#num6");
	if (String(counter).length === 1) {
		num1.innerHTML = counter;
		counter++;
	} else if (String(counter).length === 2) {
		let splitStr = String(counter).split("");
		console.log(splitStr);
		num1.innerHTML = splitStr[1];
		num2.innerHTML = splitStr[0];
		counter++;
	} else if (String(counter).length === 3) {
		let splitStr = String(counter).split("");
		console.log(splitStr);
		num1.innerHTML = splitStr[2];
		num2.innerHTML = splitStr[1];
		num3.innerHTML = splitStr[0];
		counter++;
	} else if (String(counter).length === 4) {
		let splitStr = String(counter).split("");
		console.log(splitStr);
		num1.innerHTML = splitStr[3];
		num2.innerHTML = splitStr[2];
		num3.innerHTML = splitStr[1];
		num4.innerHTML = splitStr[0];
		counter++;
	} else if (String(counter).length === 5) {
		let splitStr = String(counter).split("");
		console.log(splitStr);
		num1.innerHTML = splitStr[4];
		num2.innerHTML = splitStr[3];
		num3.innerHTML = splitStr[2];
		num4.innerHTML = splitStr[1];
		num5.innerHTML = splitStr[0];
		counter++;
	} else {
		let splitStr = String(counter).split("");
		console.log(splitStr);
		num1.innerHTML = splitStr[5];
		num2.innerHTML = splitStr[4];
		num3.innerHTML = splitStr[3];
		num4.innerHTML = splitStr[2];
		num5.innerHTML = splitStr[1];
		num6.innerHTML = splitStr[0];
		counter++;
	}
	if (counter === 1000001) {
		counter = 0;
		num2.innerHTML = 0;
		num3.innerHTML = 0;
		num4.innerHTML = 0;
		num5.innerHTML = 0;
		num6.innerHTML = 0;
	}
};

window.onload = setInterval(() => {
	simpleCounter();
	ReactDOM.render(<Home />, document.querySelector("#app"));
}, 1000);
