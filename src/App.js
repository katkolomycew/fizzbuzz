import { React, useState } from "react";
import "./App.css";

const App = () => {
  let [counter, setCounter] = useState(1);
  let [fizzbuzz, setFizzbuzz] = useState("");

  const decrement = () => {
    if (counter > 1) {
      setCounter(--counter);
      fizzbuzzHandler(counter);
    }
  };

  const increment = () => {
    if (counter < 100) {
      setCounter(++counter);
      fizzbuzzHandler(counter);
    }
  };

  const fizzbuzzHandler = (num) => {
    if (num % 15 === 0) {
      setFizzbuzz("Coating Damage and Lightning Strike");
    } else if (num % 5 === 0) {
      setFizzbuzz("Lightning Strike");
    } else if (num % 3 === 0) {
      setFizzbuzz("Coating Damage");
    } else {
      setFizzbuzz("");
    }
  };

  return (
    <div>
      <h2>{fizzbuzz || counter}</h2>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default App;
