import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            setTodos([...todos, { id: Date.now(), text: todo, status: false }]);
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {todos.map((value, index) => {
          return (
            <div className="todo">
              <div className="left">
                <input type="checkbox" onChange={(e) => {
                    setTodos(
                    todos.filter(obj2 => {
                    if (obj2.id === value.id) {
                      obj2.status = e.target.checked;
                        }
                      return obj2;
                    })
                  );
                }}
                name=""
                id={value.id}
                value={value.status}
                />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={setTodos(todos.filter(obj=>obj.id===value.id))}></i>
              </div>
            </div>
          );
        })}
        {todos.map((value) => {
          if (value.status) {
            return (
              <div>
                <h1>Active Items</h1>
                <h3>{value.text}</h3>
              </div>
            )
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;

//onChange is a attribute used whenever the value in the input changes.
//the value type in the input goes to setTodo
// first we made assigned the value with the todo state.

//then the data inside the todo is pushed into todos.
//setTodos([spread operator, todo])
//an array is send to the todos.
// to loop through the each value inside the todos map function is used. then the value is changed.
