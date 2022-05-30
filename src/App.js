import "./App.css";
import { Todos } from "./components/Todos";
import { createContext, useState } from "react";

export const TodoContext = createContext();
function App() {
  //---------- array to store multiple Todo tasks
  const [TodosArray, setTodosArray] = useState([]);
  //-----------grabing the input value
  const [inputVal, setinputVal] = useState("");

  return (
    <TodoContext.Provider
      className="App"
      value={{
        TodosArray,
        setTodosArray,
        inputVal,
        setinputVal,
      }}
    >
      <h1>Todo App</h1>
      <Todos />
    </TodoContext.Provider>
  );
}

export default App;
