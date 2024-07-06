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
        const start = parseInt(startNumber);
        const end = parseInt(endNumber);

        if (isNaN(start) || isNaN(end) || start === 0 || end === 0) {
            setGenerateNum("Invalid Input")
        } else {
            const randomNum = Math.floor(Math.random() * (end - start) + start)
            setGenerateNum(randomNum)
        }
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