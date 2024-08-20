import React, { createContext, useReducer } from "react";

// Initial state
const initialState = {
  list: [],
};

// Reducer function
const toDoListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};

// Create context
export const ToDoListContext = createContext();

// Provider component
export const ToDoListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toDoListReducer, initialState);

  return (
    <ToDoListContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDoListContext.Provider>
  );
};
