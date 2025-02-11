import React, {useState} from "react";


const AddToDoComp = ({ addNewTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => setInputValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewTodo(inputValue);
    setInputValue("");
  };

  

  return (
    <form id="textinput" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Was ist deine nächste To Do?"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button classname = "add-btn" type="submit">Add</button>
    </form>
  );
};

export default AddToDoComp;
