import React, {useState} from "react";
import "./App.css";
import Titel from "./Titel.js";
import AddToDoComp from "./AddToDo.js";
import RemoveToDo from "./RemoveToDo.js";
import ToDoList from "./ToDoList"



// Funktion für die Hauptapp
const App = () => {
    const [todos, setTodos] = useState([]);

    const addNewTodo = (newTodo) => {
      setTodos([...todos, newTodo]);
    };

    const removeTodo = (index) => {
      setTodos(todos.filter((_, valueindex) => valueindex !== index));
    };

  return (
    <>
    <Titel />
    <AddToDoComp addNewTodo={addNewTodo}/> 
    <RemoveToDo removeTodo={removeTodo}/> {/*Nur noch funktionalität machen*/}
    <ToDoList todos={todos}/>
    </>
  );
};

export default App;
