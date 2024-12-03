import axios from "axios"
import { useEffect } from "react"

const App = () => {
  useEffect(()=>{
    axios.delete('https://matrixacademylessonapi.webluna.org/ad/product',{
      headers:{"matrix-access" : "3fa3afc2aa0e5e2c1c17ee83f4c8fc76"}
    })
    .then(res=>console.log(res))
  },[])
  
  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}

export default App