import React, { useContext } from "react";
import "./Todo.css";
import { AddForm } from "./AddForm";
import { Delete } from "./Delete";
import { Edit } from "./Edit";
import { TodoContext } from "../App";

export const Todos = () => {
  const data = useContext(TodoContext);
  //----------fxn to get the value of input
  const handleinput = (e) => {
    data.setinputVal(e.target.value);
  };
  return (
    <div className="Todo">
      <AddForm handleinput={handleinput} />
      <ul>
        {data.TodosArray.map((todo) => {
          return (
            <div className="todos" key={todo.key}>
              <li>{todo.li}</li>
              <div>
                <Edit todo={todo} />
                <Delete todo={todo} />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
