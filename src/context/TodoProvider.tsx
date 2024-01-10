import { ReactNode, createContext } from "react";

export const todoContext = createContext(undefined);

type TodoProviderProps = {
    children: ReactNode
}

const TodoProvider = ({children}:TodoProviderProps ) => {
  const values = {
    totoTitle: "This is a Todo",
  };
    return <todoContext.Provider value={values}>{ children}</todoContext.Provider>;
};
export default TodoProvider;
