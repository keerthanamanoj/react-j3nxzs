import React, { useState } from "react"

export default function Day10() {
    const [charctCount, setCharactCount] = useState(0)


    return (
        <>
            <h5>Character Count</h5>
            <textarea
                id="textArea"
                onChange={(e) => setCharactCount(e.target.value.length)}
            />
            <div>{charctCount}</div>
        </>
    )
}