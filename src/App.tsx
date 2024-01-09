import { useState } from "react";
import CounterWithFuncationComponent from "./components/CounterWithFuncation";
import UserInfoWithUseState from "./components/UserInfoWithUseState";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="border border-purple-700 p-10 m-10">
    <UserInfoWithUseState/>
    </div>
  );
}

export default App;