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

// import useState from "react";
import React, {useState} from "react";
// import TodoApp from "./TodoApp";
import "./App.css";


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
      <div id="main">
        <h1>To Do Liste</h1>
        <div id="textinput">
          <input
            type="text"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
          <button
            onClick={addTodo}
          >
            Hinzufügen
          </button>
        </div>
        <ul>
          {todoList.map((item, index) => (
            <li
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };


export default TodoApp;

// NXT: To Do List in eigene Klassen wie vorher!