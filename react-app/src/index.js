import React from "react";
import ReactDOM from "react-dom";

const element = <h1> Hello World</h1>; // JSX expression or markup is compiled by babel
console.log(element); // element is part of virtual dom

ReactDOM.render(element, document.getElementById("root")); //render to real DOM

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
