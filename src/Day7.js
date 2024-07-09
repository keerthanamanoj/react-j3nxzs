import React, { useEffect, useState } from "react"

const getDay = (date) => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekday[date.getDay()]
}

const getDate = (date) => {
    const month = date.getMonth()
    const dates = date.getDate();
    const year = date.getFullYear();
    return `${month} - ${dates} - ${year}`
}

const getTime = (date) => {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${hour} :${minute} :${second} `
}

export default function Day7() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 10000)
    }, [])

    return (
        <>
            <h4>Day, Date and Time</h4>
            <div id="day">{getDay(date)}</div>
            <div id="date">{getDate(date)}</div>
            <div id="time">{getTime(date)}</div>
        </>
    )
}