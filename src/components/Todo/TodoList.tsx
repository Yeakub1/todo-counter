import { useContext } from "react";
import { todoContext } from "../../context/TodoProvider";

type TTodo = {
  id: string;
  title: string;
  isCompelete: boolean;
};

const TodoList = () => {
  const { state, dispatch } = useContext(todoContext);
  console.log(state);

  return (
    <div>
      {state.map((item: TTodo) => (
        <p key={item.id}
          onClick={() => dispatch({ type: "taskComplete", payload: item.id })}
          className={`cursor-pointer ${item.isCompelete ? 'line-through': ''}`}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};
export default TodoList;
