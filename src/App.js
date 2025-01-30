// import React from 'react';
// import TodoList from './TodoList';
// import './App.css';

// function App() {
//     return (
//         <div className="App">
//         <TodoList />
//         </div>
//     );
// }

// export default App;
    
// // export default function Myfunc(){
// //     return (<h1>HelloWorld</h1>);
// // }

// // function doStuff(){
// //     return (<Myfunc></Myfunc>);
// // }


import React, { useState } from "react";

const TodoApp = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>To Do Liste</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          style={{
            padding: "10px",
            width: "200px",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: "10px 20px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Hinzufügen
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todoList.map((item, index) => (
          <li
            key={index}
            style={{
              background: "#f9f9f9",
              margin: "5px 0",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ddd",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
