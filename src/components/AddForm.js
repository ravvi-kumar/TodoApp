import React from "react";

export const AddForm = ({
  inputVal,
  setinputVal,
  TodosArray,
  setTodosArray,
  handleinput,
}) => {
  //---------fxn to create a todo on button click or form submit

  const handleSubmit = (e) => {
    e.preventDefault();

    //-------created an object to store the value and key
    const obj = {
      li: inputVal,
      key: Math.random().toLocaleString(),
    };

    //-----spreding the previous todos and adding new todo
    setTodosArray([...TodosArray, obj]);

    //------clearing the input field
    setinputVal("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputVal} onChange={handleinput} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
