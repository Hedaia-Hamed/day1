import React, { useState } from "react";
import Todolist from "./Todolist";

const ToDoListContainer = () => {
  const [lists, setLists] = useState([]);

  const addNewList = () => {
    setLists((prevLists) => [...prevLists, lists.length + 1]);
  };

  return (
    <div>
      <h1>ToDo Lists</h1>
      <button onClick={addNewList}>Add New List</button>
      <div className="lists-container">
        {lists.map((listId) => (
          <div key={listId} className="list">
            <Todolist />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoListContainer;