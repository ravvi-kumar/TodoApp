import React, { useContext } from "react";
import { TodoContext } from "../App";

export const AddForm = ({ handleinput }) => {
  const data = useContext(TodoContext);
  //---------fxn to create a todo on button click or form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //-------created an object to store the value and key
    const obj = {
      li: data.inputVal,
      key: Math.random().toLocaleString(),
    };

    //-----spreding the previous todos and adding new todo
    data.setTodosArray([...data.TodosArray, obj]);

    //------clearing the input field
    data.setinputVal("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="inputField"
          type="text"
          value={data.inputVal}
          onChange={handleinput}
        />
        <button className="btns add" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
