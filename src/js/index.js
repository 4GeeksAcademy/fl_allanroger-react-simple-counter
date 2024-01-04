
// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import PropTypes from 'prop-types';
// import { BiAlarm } from "react-icons/bi";

// // include your styles into the webpack bundle
// import "../styles/index.css";

// function Contador(props) {
//     const [counter, setCounter] = useState(0);
//     const [isActive, setIsActive] = useState(true);

//     useEffect(() => {
//         let interval = null;
//         if (isActive) {
//             interval = setInterval(() => {
//                 setCounter(counter => counter + 1);
//             }, 1000);
//         } else if (!isActive && counter !== 0) {
//             clearInterval(interval);
//         }
//         return () => clearInterval(interval);
//     }, [isActive, counter]);

//     return (
//         <div className="bigCounter">
//             <div className="clock ">
//             <BiAlarm />
//             </div>
//             <div className="fourth">{Math.floor(counter / 1000) % 10}</div>
//             <div className="third">{Math.floor(counter / 100) % 10}</div>
//             <div className="second">{Math.floor(counter / 10) % 10}</div>
//             <div className="first">{Math.floor(counter / 1) % 10}</div>
//             <button className="btn btn-light button" onClick={() => setIsActive(!isActive)}>
//                 {isActive ? 'Parar' : 'Continuar'}
//             </button>
//         </div>
//     );
// }

// Contador.propTypes = {
//     digitFourth: PropTypes.number,
//     digitThird: PropTypes.number,
//     digitSecond: PropTypes.number,
//     digitFirst: PropTypes.number,
// };

// ReactDOM.render(<Contador />, document.querySelector("#app"));
// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import PropTypes from 'prop-types';
// import { BiAlarm } from "react-icons/bi";

// // include your styles into the webpack bundle
// import "../styles/index.css";

// function Contador(props) {
//     const [counter, setCounter] = useState(0);
//     const [isActive, setIsActive] = useState(true);
//     const [isCountdown, setIsCountdown] = useState(false);

//     useEffect(() => {
//         let interval = null;
//         if (isActive) {
//             interval = setInterval(() => {
//                 setCounter(counter => isCountdown ? counter - 1 : counter + 1);
//             }, 1000);
//         } else if (!isActive && counter !== 0) {
//             clearInterval(interval);
//         }
//         return () => clearInterval(interval);
//     }, [isActive, counter, isCountdown]);

//     return (
//         <div className="bigCounter">
//             <div className="clock ">
//             <BiAlarm />
//             </div>
//             <div className="fourth">{Math.floor(counter / 1000) % 10}</div>
//             <div className="third">{Math.floor(counter / 100) % 10}</div>
//             <div className="second">{Math.floor(counter / 10) % 10}</div>
//             <div className="first">{Math.floor(counter / 1) % 10}</div>
//             <button className="btn btn-light button" onClick={() => setIsActive(!isActive)}>
//                 {isActive ? 'Parar' : 'Continuar'}
//             </button>
//             <button className="btn btn-light button" onClick={() => setIsCountdown(!isCountdown)}>
//                 {isCountdown ? 'Contagem crescente' : 'Contagem regressiva'}
//             </button>
//         </div>
//     );
// }

// Contador.propTypes = {
//     digitFourth: PropTypes.number,
//     digitThird: PropTypes.number,
//     digitSecond: PropTypes.number,
//     digitFirst: PropTypes.number,
// };

// ReactDOM.render(<Contador />, document.querySelector("#app"));

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { BiAlarm } from "react-icons/bi";

// include your styles into the webpack bundle
import "../styles/index.css";

function Contador(props) {
    const [counter, setCounter] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [isCountdown, setIsCountdown] = useState(false);
    const [alertTime, setAlertTime] = useState(10); // Añade un estado para el tiempo de alerta

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setCounter(counter => {
                    if (isCountdown) {
                        return counter > 0 ? counter - 1 : 0;
                    } else {
                        if (counter + 1 === alertTime) {
                            alert(`Has alcanzado tu tiempo: ${alertTime} segundos`);
                        }
                        return counter + 1;
                    }
                });
            }, 1000);
        } else if (!isActive && counter !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, counter, isCountdown, alertTime]); // Añade alertTime a la lista de dependencias

    const stop = () => {
        setIsActive(false);
    };

    const restart = () => {
        setCounter(0);
    };

    const resume = () => {
        setIsActive(true);
    };

    return (
        <div className="bigCounter">
            <div className="clock ">
            <BiAlarm />
            </div>
            <div className="fourth">{Math.floor(counter / 1000) % 10}</div>
            <div className="third">{Math.floor(counter / 100) % 10}</div>
            <div className="second">{Math.floor(counter / 10) % 10}</div>
            <div className="first">{Math.floor(counter / 1) % 10}</div>
            <button className="btn btn-light button" onClick={stop}>
                Parar
            </button>
            <button className="btn btn-light button" onClick={restart}>
                Reiniciar
            </button>
            <button className="btn btn-light button" onClick={resume}>
                Continuar
            </button>
            <button className="btn btn-light button" onClick={() => setIsCountdown(!isCountdown)}>
                {isCountdown ? 'Desactivar regresiva' : 'Ativar regresiva'}
            </button>
        </div>
    );
}

Contador.propTypes = {
    digitFourth: PropTypes.number,
    digitThird: PropTypes.number,
    digitSecond: PropTypes.number,
    digitFirst: PropTypes.number,
};

ReactDOM.render(<Contador />, document.querySelector("#app"));

