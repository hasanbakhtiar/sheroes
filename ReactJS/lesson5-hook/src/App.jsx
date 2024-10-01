import { useEffect, useLayoutEffect, useState } from "react"
import Basket from "./components/Basket";
import { products, productsOne } from "./data/products";
import Cart from "./components/Cart";
const App = () => {
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState("");
  const [data,setData] = useState(products);

  // useLayoutEffect(()=>{},[]); //sync
  // useEffect(()=>{},[]); //async

  // useEffect(()=>{
  //   setData(productsOne)
  // },[])

  const increment = () => {
    setCount(count + 1);
    setAlert('bg-success')
  }

  return (
    // <div className={`m-5 ${alert}`}>
    //   <button onClick={()=>{setCount(count-1); setAlert('bg-danger') }}>-1</button>
    //   {count}
    //   <button onClick={increment} >+1</button>
    // </div>

    <div className="container mt-5">
      {/* <Basket /> */}

      <div className="row">

        {/* {products.map((item,i) => (

          <div key={} className="col-12 col-sm-6 col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">${item.price}</p>
                <a href="#" style={{backgroundColor:`${item.color}`}} className="btn btn-primary"></a>
              </div>
            </div>
          </div>

        ))} */}



        {data.map((item,i) => (

          <Cart key={i} ptitle={item.title} pprice={item.price} pcolor={item.color}/>

        ))}

      </div>


    </div>
  )
}

export default App