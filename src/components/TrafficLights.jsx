import { useState } from 'react';

function TrafficLights() {

    const [activeColor, setactiveColor] = useState('red');

    const handleColorClick = (color) => {
        setactiveColor(color);
    };





    return (
        <div className="container d-flex justify-content-center">
            <div className="col-12">
                <div className="d-flex justify-content-center mb-0 mt-0">
                    <div className="container  border border-1 border-black  bg-black" id="first-up"></div>
                </div>
                <div className="container  mt-0 bg-black d-flex flex-column justify-content-center align-items-center gap-3" id="traffic-lights-container">
                    <div onClick={() => handleColorClick("red")} className={`red-circle rounded-circle ${activeColor === "red" ? "highlight" : ""}`}></div>
                    <div onClick={() => handleColorClick("yellow")} className={`yellow-circle  rounded-circle  ${activeColor === "yellow" ? "highlight" : ""}`}></div>
                    <div onClick={() => handleColorClick("green")} className={`green-circle  rounded-circle ${activeColor === "green" ? "highlight" : ""}`}></div>
                </div>
            </div>
        </div>
    )
}

export default TrafficLights;
