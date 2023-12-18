//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';



// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCouter(props) {
    return (<div className="bigCounter">
        <div className="calendar">
            <i className="bi bi-stopwatch"></i>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
        </svg>
        <div className="fourth">{props.digitFourth}</div>
        <div className="third">{props.digitThird}</div>
        <div className="second">{props.digitSecond}</div>
        <div className="first">{props.digitFirst}</div>
    </div>);
}
SimpleCouter.propTypes = {
    digitFourth: PropTypes.number,
    digitThird: PropTypes.number,
    digitSecond: PropTypes.number,
    digitFirst: PropTypes.number,
};

let counter = 0;
setInterval(function () {
    const fourth = Math.floor(counter % 10);
    const third = Math.floor(counter % 10);
    const second = Math.floor(counter % 10);
    const first = Math.floor(counter % 10);
    console.log(fourth, third, second, first)
    counter++;
    ReactDOM.render(<SimpleCouter digitFirst={first} digitSecond={second} digitThird={third} digitFourth={fourth} />, document.querySelector("#app"));
}, 1000);

//import your own components
// import Home from "./component/home.jsx";

//render your react application
// ReactDOM.render(<SimpleCouter />, document.querySelector("#app"));
