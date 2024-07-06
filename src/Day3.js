// Random number generator
import React from "react"
import { useState } from "react";

export default function Day3() {
    const [startNumber, setStartNumber] = useState(null);
    const [endNumber, setEndNumber] = useState(null);
    const [generateNum, setGenerateNum] = useState(null);

    function changeHandler(e) {
        setStartNumber(e);
    }

    function changeHandlerend(e) {
        setEndNumber(e);
    }

    function randomNumGen() {
        console.log(typeof (startNumber), endNumber, "llll");

        if (isNaN(startNumber) || isNaN(endNumber)) {
            console.log("got");
            setGenerateNum("Invalid Input")
        };
    }

    return (
        <div>
            <h4>Random Number Generator</h4>
            <input
                type="number"
                id="startNumber"
                value={startNumber}
                onChange={(e) => changeHandler(e.target.value)}
            />
            <input
                type="number"
                id="endNumber"
                value={endNumber}
                onChange={(e) => changeHandlerend(e.target.value)}
            />
            <button onClick={randomNumGen}>Generate</button>
            <h3>{generateNum}</h3>
        </div>
    )
}