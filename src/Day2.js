import React from "react";
import { useState } from "react";

export default function Day2() {
    const [toggle, setToggle] = useState(false);
    function toToggle() {
        setToggle(!toggle)
    }
    return (
        <div>
            {toggle && <p>Paragraph to display on toggle</p> }
            <button onClick={toToggle}>Button</button>
        </div>
    )
}