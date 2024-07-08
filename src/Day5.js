import React, { useState } from "react"
function PollComponent() {
    const [optiona, setOptiona] = useState(0);
    const [optionb, setOptionb] = useState(0);
    const [optionc, setOptionc] = useState(0);
    const [optiond, setOptiond] = useState(0);
    return (
        <>
            <h5>Question?</h5>
            <button onClick={() => setOptiona(previousValue => previousValue + 1)}>
                <span>Option A</span>
                <span>{optiona}</span>
            </button>
            <button onClick={() => setOptionb(previousValue => previousValue + 1)}>
                <span>Option B</span>
                <span>{optionb}</span>
            </button>
            <button onClick={() => setOptionc(previousValue => previousValue + 1)}>
                <span>Option C</span>
                <span>{optionc}</span>
            </button>
            <button onClick={() => setOptiond(previousValue => previousValue + 1)}>
                <span>Option D</span>
                <span>{optiond}</span>
            </button>

        </>
    )
}
export default function Day5() {
    return (
        <div>
            <PollComponent />
        </div>
    );
}