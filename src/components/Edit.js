import React, { useContext } from "react";
import { TodoContext } from "../App";

export const Edit = ({ todo }) => {
  const data = useContext(TodoContext);
  //-------edit functionality
  const handleEdit = (e) => {
    const id = e.currentTarget.id;
    const filtered = data.TodosArray.filter((todos) => todos.key === id);
    const deleted = data.TodosArray.filter((todos) => todos.key !== id);
    data.setTodosArray(deleted);
    const toEdit = filtered[0].li;
    // console.log(toEdit);
    data.setinputVal(toEdit);
  };
  return (
    <button className="btns edit" id={todo.key} onClick={handleEdit}>
      edit
    </button>
  );
};
