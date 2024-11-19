import React, { useRef } from "react";
import Swal from "sweetalert2";


interface addTodoType{
    onAddTodo:(text:string)=>void
}




const NewTodo = ({onAddTodo}:addTodoType) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enterText = textInputRef.current!.value;
    if (!enterText) {
      Swal.fire({
        title: "Please fill input",
        icon: "warning",
      });
    }else{
        onAddTodo(enterText);
        textInputRef.current!.value = "";
    }
  };

  return (
    <>
      <h1 className="my-5  text-center">Todo App</h1>
      <form onSubmit={todoSubmitHandler}>
        <div className="input-group mb-3">
          <input ref={textInputRef} type="text" className="form-control" />
          <button className="btn btn-dark" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default NewTodo;
