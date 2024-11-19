import { todoType } from "../todo.model";

interface todoListProps {
    items:{id:string|number,text:string}[];
}


const TodoList:React.FC<todoListProps> = (props) => {
  return (
    <>
      <ul className="list-group">
        {props.items.map((item:todoType,index:number)=>(
            <li className="list-group-item" key={index}>{item.text}</li>

        ))}
      </ul>
    </>
  );
};

export default TodoList;
