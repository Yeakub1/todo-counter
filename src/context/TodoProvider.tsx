import { ReactNode, createContext, useReducer } from "react";

export const todoContext = createContext<
  { state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);

type TTodo = {
  id: string;
  title: string;
  isCompelete: boolean;
};

type TAction = {
  type: string;
  payload: TTodo | string;
};

const typeConstanas = {
  ADD_TODO: "addTodo",
  TASK_COMPLETE: "taskComplete"
};

const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case typeConstanas.ADD_TODO:
      return [...currentState, action.payload];
    case typeConstanas.TASK_COMPLETE:
      return currentState.map((item) =>
        item.id === action.payload
          ? { ...item, isCompelete: !item.isCompelete }
          : item
      );

    default:
      return currentState;
  }
};

type TodoProviderProps = {
  children: ReactNode;
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = {
    state,
    dispatch,
  };
  return <todoContext.Provider value={values}>{children}</todoContext.Provider>;
};
export default TodoProvider;
