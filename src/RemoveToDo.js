import React from "react";

const RemoveToDo = ({index, removeTodo}) => {
    return (
        <button onClick={() => removeTodo(index)} classname="remove-btn">Remove</button>
    )
}

export default RemoveToDo;

// Ich glaub, dass das hier auch kaka ist.... 