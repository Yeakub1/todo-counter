import TodoFrom from "./components/Todo/TodoFrom";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div>
       <TodoFrom/>
      </div>
    </TodoProvider>
  );
}

export default App;
