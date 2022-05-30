import React from "react";

export const Edit = ({
  todo,
  btnStyles,
  TodosArray,
  setTodosArray,
  setinputVal,
}) => {
  //-------edit functionality
  const handleEdit = (e) => {
    const id = e.currentTarget.id;
    const filtered = TodosArray.filter((todos) => todos.key === id);
    const deleted = TodosArray.filter((todos) => todos.key !== id);
    setTodosArray(deleted);
    const toEdit = filtered[0].li;
    // console.log(toEdit);
    setinputVal(toEdit);
  };
  return (
    <button
      style={{ ...btnStyles, backgroundColor: "teal" }}
      id={todo.key}
      onClick={handleEdit}
    >
      edit
    </button>
  );
};
