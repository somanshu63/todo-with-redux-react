import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, toggle, deleteTodo } from "../store/action";

function App() {
  const todos = useSelector((state) => state);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleToggle = (id) => {
    dispatch(toggle(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      add({
        id: new Date().getTime(),
        todo,
        isDone: false,
      })
    );
    setTodo("");
  };

  return (
    <>
      <div className="text-center m-12">
        <h1 className="text-4xl">Todo App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="enterTodo"
            onChange={(e) => handleChange(e)}
            className="border-2 border-black rounded-md m-4 py-2 px-4"
            placeholder="enter new todo like play tennis"
          ></input>
        </form>
      </div>
      <div className="w-3/5 mx-auto">
        {todos.map(({ todo, id, isDone }) => {
          return (
            <li
              key={id}
              className="flex justify-between items-center text-lg border-b border-t py-2"
            >
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={isDone ? true : false}
                  onChange={() => handleToggle(id)}
                  className="w-6 h-6 text-green-400 bg-gray-100 rounded-full border-gray-300 focus:ring-green-300 focus:ring-2 shadow-inner"
                />
                <p>{todo}</p>
              </div>
              <button onClick={() => handleDelete(id)}>❌</button>
            </li>
          );
        })}
      </div>
    </>
  );
}
export default App;
