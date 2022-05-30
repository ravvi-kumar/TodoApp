import React, { useState } from "react";

export const Todos = () => {
  //---------- array to store multiple Todo tasks
  const [TodosArray, setTodosArray] = useState([]);
  //-----------grabing the input value
  const [inputVal, setinputVal] = useState("");
  //----------fxn to get the value of input
  const handleinput = (e) => {
    setinputVal(e.target.value);
  };

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

  //--------delete functionality
  const handledelete = (e) => {
    // console.log(e.currentTarget.id);
    const id = e.currentTarget.id;

    //filtered the todoArray
    const deleted = TodosArray.filter((todos) => todos.key !== id);
    setTodosArray(deleted);
  };
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
  const btnStyles = {
    border: "none",
    padding: "5px",
    margin: "3px",
    color: "white",
    borderRadius: "3px",
  };
  return (
    <div className="Todo">
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputVal} onChange={handleinput} />
        <button type="submit">Add</button>
      </form>
      <ul style={{ margin: "auto", marginTop: "50px", width: "400px" }}>
        {TodosArray.map((todo) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                listStyle: "none",
                width: "100%",
                borderBottom: "1px solid grey",
                margin: "5px",
                padding: "3px",
              }}
              key={todo.key}
            >
              <li>{todo.li}</li>
              <div>
                <button
                  style={{ ...btnStyles, backgroundColor: "teal" }}
                  id={todo.key}
                  onClick={handleEdit}
                >
                  edit
                </button>
                <button
                  style={{ ...btnStyles, backgroundColor: "crimson" }}
                  id={todo.key}
                  onClick={handledelete}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
