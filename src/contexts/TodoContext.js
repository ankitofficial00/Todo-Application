import { createContext, useContext } from "react";
// context that contains an object
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo message",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// context provider
export const TodoProvider = TodoContext.Provider;

// custom hooks
export const useTodo = () => {
  return useContext(TodoContext);
};
