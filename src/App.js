import React, {useState} from "react";
import "./App.css";
import Titel from "./Titel.js";
import InputDiv from "./InputDiv";
import ToDoList from "./ToDoList"



// Funktion für die Hauptapp
const App = () => {
    const [todos, setTodos] = useState([]);

    const addNewTodo = (newTodo) => {
      setTodos([...todos, newTodo]);
    }

  return (
    <>
    <Titel />
    <InputDiv addNewTodo={addNewTodo}/>
    <ToDoList todos={todos}/>
    </>
  );
};

export default App;
