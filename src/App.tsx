import TodoFrom from "./components/Todo/TodoFrom";
import TodoList from "./components/Todo/TodoList";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div>
        <TodoFrom />
        <TodoList/>
      </div>
    </TodoProvider>
  );
}

export default App;
