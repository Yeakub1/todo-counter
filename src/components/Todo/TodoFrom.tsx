import { FormEvent, useContext, useState } from "react";
import { todoContext } from "../../context/TodoProvider";

const TodoFrom = () => {
  const { state, dispatch } = useContext(todoContext);
  const [task, setTask] = useState("");
  console.log(state);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompelete: false,
    };
    dispatch({ type: "addTodo", payload: todo });
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Todo">Task</label>
        <input
          className="border border-red-800 "
          type="text"
          name="todo"
          id="todo"
          onBlur={(e) => setTask(e.target.value)}
        />
        <input
          className="btn bg-purple-800 px-6 py-2 text-white"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};
export default TodoFrom;
