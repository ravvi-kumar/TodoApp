import React, { useState } from "react";

export const Todos = () => {
  // const [TodosArray, setTodosArray] = useState({
  //   li: [],
  //   key: "Math.random().toLocaleString()",
  // });
  const [TodosArray, setTodosArray] = useState([]);
  const [inputVal, setinputVal] = useState("");
  const handleinput = (e) => {
    setinputVal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const newTodo = [...TodosArray.li, inputVal];

    const obj = {
      li: inputVal,
      key: Math.random().toLocaleString(),
    };

    // setTodosArray({ ...TodosArray, li: newTodo });
    setTodosArray([...TodosArray, obj]);
    setinputVal("");
  };
  const handledelete = (e) => {
    // console.log(e.currentTarget.id);
    const id = e.currentTarget.id;

    const deleted = TodosArray.filter((todos) => todos.key !== id);
    setTodosArray(deleted);
  };
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
