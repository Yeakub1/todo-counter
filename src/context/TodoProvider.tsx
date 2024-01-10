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

const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case "addTodo":
      return [...currentState, action.payload];
    case "taskComplete":
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
