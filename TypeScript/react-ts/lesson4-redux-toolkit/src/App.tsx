import { todoType } from "./types/todos.model";
import { useRef } from "react";
import { add } from "./slices/todoSlice";
import { useAppDispatch, useAppSelector } from "./store";

const App = () => {
    const todos = useAppSelector((p:any)=>p.todo);
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const formSubmited = (e:React.FormEvent)=>{
        e.preventDefault();
        dispatch(add(inputRef.current!.value));
        inputRef.current!.value = "";
    }
    
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">Todo App</h1>
      <div className="col-5">

        <form onSubmit={formSubmited} className="input-group mb-3">
          <input ref={inputRef} type="text" className="form-control" placeholder="Enter item"/>
          <button className="btn btn-dark" type="submit">
            Add
          </button>
        </form>

            <ul className="list-group">
            {todos.map((item:todoType,index:number)=>(
                <li key={index} className="list-group-item">{item.text}</li>

            ))}
            </ul>

        
      </div>
    </div>
  );
};

export default App;
