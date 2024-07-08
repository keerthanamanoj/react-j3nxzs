import React, { useState } from "react"
import styled from 'styled-components';


export default function Day6() {
    const [checkBoxes, setCheckBoxes] = useState([
        { id: 1, labels: "cat", checked: false },
        { id: 2, labels: "dog", checked: false },
        { id: 3, labels: "rat", checked: false },
        { id: 4, labels: "mouse", checked: false }
    ])

    function onEachCheckbox(id) {
        console.log(id, "pl");
        const checkBoxsingl = checkBoxes.map(check => (
            check.id === id ? { ...check, checked: !check.checked } : check
        ))
        setCheckBoxes(checkBoxsingl)
    }

    function handleSelectall() {
        const checkBox = checkBoxes.map(check => ({
            ...check,
            checked: true
        }))
        setCheckBoxes(checkBox)
    }
    return (
        <>
            {checkBoxes.map((item, index) => (
                <>
                    <input type="checkbox" checked={item.checked} onChange={(e) => onEachCheckbox(item.id)} />
                    {item.labels}
                </>
            ))}
            <button onClick={handleSelectall}>select all</button>
        </>

    )
}