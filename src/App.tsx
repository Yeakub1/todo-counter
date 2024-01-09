import { useState } from "react";
import CounterWithFuncationComponent from "./components/CounterWithFuncation";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="border border-purple-700 p-10 m-10">
      <h1>count = { count}</h1>
      <CounterWithFuncationComponent count={ count} setCount={setCount} />
    </div>
  );
}

export default App;