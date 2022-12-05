import { useRef, useState } from "react";
import "./App.css";


function App() {

  const [todoList, setTodoList] = useState(["List One"])
  const todoRef = useRef();
  const [task, setTask] = useState([
    {
      name: "List One",
      id: 1,
      array: []
    }
  ]);

  return (
    <div className="App">
      <div className="actions">
        <h1>Todo List:</h1>
        <h2>Current List : {todoList}</h2>
        <input type="text" ref={todoRef} />
        <button
          onClick={function () {
            {
              task.map(function (val, index) {
                {
                  todoList == val.name
                    ? val.array.push(todoRef.current.value)
                    : val.array;
                }
              });

              setTask([...task]);
            }

            todoRef.current.value = "";
          }}
        >
          Add Todo
        </button>
        <button
          onClick={function () {
            let updatedValue = {};
            updatedValue = {
              name: todoRef.current.value,
              array: []
            };
            setTask([...task, updatedValue]);
            todoRef.current.value = "";
          }}
        >
          Add List
        </button>
      </div>
      <h3>My Lists</h3>
      <ul>
        {task.map(function (value, index) {
          return (
            <li>
              <button
                onClick={function () {
                  setTodoList(value.name);
                }}
              >
                {value.name}
              </button>
              <ul>
                {value.array.map(function (value, index) {
                  return <li>{value}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
