import React, { useContext } from "react";
import { TodoContext } from "../App";

export const Delete = ({ todo }) => {
  const data = useContext(TodoContext);
  //--------delete functionality
  const handledelete = (e) => {
    // console.log(e.currentTarget.id);
    const id = e.currentTarget.id;

    //filtered the todoArray
    const deleted = data.TodosArray.filter((todos) => todos.key !== id);
    data.setTodosArray(deleted);
  };
  return (
    <button className="btns del" id={todo.key} onClick={handledelete}>
      delete
    </button>
  );
};
