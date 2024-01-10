import { useContext } from "react";
import { todoContext } from "../../context/TodoProvider";

const TodoFrom = () => {
    const { totoTitle } = useContext(todoContext);
    return (
        <div>
            <h1>This is todo Component</h1>
        </div>
    );
};
export default TodoFrom;