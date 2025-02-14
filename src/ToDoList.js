import React from "react";

const ToDoList = ({todos=[], removeTodo}) => {
    return (
        <div id="List">
            <ul>
                <form>
                    {todos.map((todo) => (
                        <div 
                            key={todo.id} className="todo-item">
                            <input type="checkbox" 
                            checked= {false}
                            onChange ={() => removeTodo(todo.id)}/>
                            {todo.text}
                        </div>                        
                    ))}
                </form>
            </ul>
        </div>
    );
};

export default ToDoList;



// kaputter Versuch:
// import React from "react";
// import RemoveToDo from "./RemoveToDo";

// const ToDoList = ({todos, removeTodo = []}) => {
//     return (
//         <div id="List">
//             <ul>
//                 <form>
//                     {todos.map((todo, index) => (
//                         <div 
//                             key={index} classname="todo-item">
//                             <input type="checkbox" onChange={() => removeTodo(index)} />
//                             <RemoveToDo index={index} removeTodo={removeTodo} />
//                             {todo}
//                         </div>
//                     ))}
//                 </form>
//             </ul>
//         </div>
//     );
// };

// export default ToDoList;