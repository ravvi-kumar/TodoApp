import React, { useState } from "react";
import { AddForm } from "./AddForm";
import { Delete } from "./Delete";
import { Edit } from "./Edit";

export const Todos = () => {
  //---------- array to store multiple Todo tasks
  const [TodosArray, setTodosArray] = useState([]);
  //-----------grabing the input value
  const [inputVal, setinputVal] = useState("");
  //----------fxn to get the value of input
  const handleinput = (e) => {
    setinputVal(e.target.value);
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
      <AddForm
        inputVal={inputVal}
        setinputVal={setinputVal}
        TodosArray={TodosArray}
        setTodosArray={setTodosArray}
        handleinput={handleinput}
      />
      <div style={{ margin: "auto", marginTop: "50px", width: "400px" }}>
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
                <Edit
                  todo={todo}
                  btnStyles={btnStyles}
                  TodosArray={TodosArray}
                  setTodosArray={setTodosArray}
                  setinputVal={setinputVal}
                />
                <Delete
                  todo={todo}
                  btnStyles={btnStyles}
                  TodosArray={TodosArray}
                  setTodosArray={setTodosArray}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
