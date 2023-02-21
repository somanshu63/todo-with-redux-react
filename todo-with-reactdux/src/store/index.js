import { createStore } from "redux";

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    case "toggle":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;
