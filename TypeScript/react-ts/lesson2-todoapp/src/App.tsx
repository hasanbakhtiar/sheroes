import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { todoType } from "./todo.model";



const App: React.FC = () => {
  const [todos,setTodos] = useState<todoType[]>([
    {
      id:1,
      text:"Learn lesson"
    },
    {
      id:2,
      text:"read book"
    }
  ]);

  const todoAddHandler = (text:string)=>{
        setTodos((prevTodo)=>[
          ...prevTodo,
          {id:Date.now().toString(),text:text}
        ])
        
  }
  
  
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <div className="col-5">
        <NewTodo onAddTodo = {todoAddHandler}/>
        <TodoList  items={todos} />
      </div>
    </div>
  );
};

export default App;
