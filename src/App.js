import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 10)}>
        Increment 10 times
      </button>
    </div>
  );
}
