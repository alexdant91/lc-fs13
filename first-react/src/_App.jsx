import { useState } from "react";
import { Form } from "./Form";

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(1);

  const handleAdd = () => {
    setCounter((_counter) => {
      return _counter + number;
    });
  };

  const handleRemove = () => {
    setCounter((_counter) => {
      return _counter - number;
    });
  };

  const handleNumber = (event) => {
    setNumber(Number(event.target.value));
  };

  const handleSubmit = (event, form) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <>
      <p>counter: {counter}</p>
      <input type="number" value={number} onInput={handleNumber} />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleRemove}>-</button>
      <div>
        <Form handleSubmit={handleSubmit} number={number} />
      </div>
    </>
  );
};

// export default App
