import { useState } from "react"
import Basket from "./components/Basket";

const App = () => {
  const [count,setCount] = useState(0);
  const [alert,setAlert] = useState("");

  const increment = ()=>{
    setCount(count+1);
    setAlert('bg-success')
  }
  
  return (
    // <div className={`m-5 ${alert}`}>
    //   <button onClick={()=>{setCount(count-1); setAlert('bg-danger') }}>-1</button>
    //   {count}
    //   <button onClick={increment} >+1</button>
    // </div>
    <div>
<Basket />
    </div>
  )
}

export default App