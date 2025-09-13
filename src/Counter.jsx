import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <header className="Counter-header">
        <h1>Contatore Demo</h1>
        <p className="Counter-value">{count}</p>

        <div className="Counter-buttons">
          <button className="Counter-button" onClick={() => setCount(count + 1)}> Incrementa </button>
          <button className="Counter-button"onClick={() => setCount(count - 1)}> Decrementa </button>
          <button className="Counter-button" onClick={() => setCount(0)}> Reset</button>
        </div>
      </header>
    </div>
  );
}

export default Counter;
