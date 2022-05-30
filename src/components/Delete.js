import React from "react";

export const Delete = ({ todo, btnStyles, TodosArray, setTodosArray }) => {
  //--------delete functionality
  const handledelete = (e) => {
    // console.log(e.currentTarget.id);
    const id = e.currentTarget.id;

    //filtered the todoArray
    const deleted = TodosArray.filter((todos) => todos.key !== id);
    setTodosArray(deleted);
  };
  return (
    <button
      style={{ ...btnStyles, backgroundColor: "crimson" }}
      id={todo.key}
      onClick={handledelete}
    >
      delete
    </button>
  );
};
