import React, { useEffect, useState } from "react";

export default function Day4() {

    const [principle, setPrinciple] = useState(1000)
    const [rate, setRate] = useState(50);
    const [time, setTime] = useState(5);
    const [simpleInterest, setSimpleInterest] = useState(80);
    const [total, setTotal] = useState(45);
    useEffect(() => {
        calculate()
    }, [principle, rate, time])
    function onChangeA(e) {
        setPrinciple(e)
    }
    function onChangeB(e) {
        setRate(e)
    }
    function onChangeC(e) {
        setTime(e)
    }
    function calculate() {
        const one = (principle * rate * time) / 100;
        setSimpleInterest(one);

        const two = parseFloat(simpleInterest) +parseFloat(principle);
        setTotal(two);
    };
    
    return (
        <div>
            <input
                type="number"
                id="principle"
                value={principle}
                onChange={(e) => onChangeA(e.target.value)}
            />
            <input
                type="number"
                id="rate"
                value={rate}
                onChange={(e) => onChangeB(e.target.value)}
            />
            <input
                type="number"
                id="time"
                value={time}
                onChange={(e) => onChangeC(e.target.value)}
            />
            <h3>Simple Interest: {simpleInterest}</h3>
            <h3>Total Amount: {total}</h3>
        </div>
    )
}