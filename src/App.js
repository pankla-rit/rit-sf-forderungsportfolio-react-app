import React, {useState} from "react";
import "./App.css";
import Titel from "./Titel.js";
import AddToDoComp from "./AddToDo.js";
import ToDoList from "./ToDoList"
import RichTextEditor from "./RichTextEditor.js";

// Funktion für die Hauptapp
const App = () => {
    const [todos, setTodos] = useState([]);

    const addNewTodo = (newTodo) => {
      setTodos([...todos, {id: Date.now(), text: newTodo}]);
    };

    const removeTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };

  return (
    <>
    <Titel />
    <AddToDoComp addNewTodo={addNewTodo}/>
    <ToDoList todos={todos} removeTodo={removeTodo}/>
    <RichTextEditor/>
    </>
  );
};

export default App;
