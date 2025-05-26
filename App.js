import React, { useState } from "react";
import { ListElement } from "./features/todo-list/components/list-element";
function App() {
  const [list, setList] = useState([]); //store the todoes
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    //add the todo to the list
    setList([...list, newTodo]); //the three dots is to indicate that we are adding the new todo to the exixsting elements in the to do list

    //clear the input box
    setInput(""); //set the input to an empty string
  };

  //alt shift sahm imin
  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} //used to update the input
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <ListElement
            id={todo.id}
            todo={todo.todo}
            list={list}
            setList={setList}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
