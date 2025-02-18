import axios from "axios";
import { useContext, useEffect, useState, useSyncExternalStore } from "react";
import BaseUrlContext from "../../context/BaseUrlContext";

const Basket = () => {

  const [basketData, setBasketData] = useState([]);
  const [baseUrl, header] = useContext(BaseUrlContext);
  useEffect(() => {
    axios.get(`${baseUrl}/basket/677d36b8ee87c08d8dd3c115`)
    .then(res=>setBasketData(res.data[0].products))

  }, [])
  return <div>
    <h1 className="text-center my-5">Basket</h1>
    {basketData.length===0?<h1>is Empty</h1>:<div className="d-flex align-items-center justify-content-center">
      <div className="col-9">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {basketData.map((item,i)=>(
              <tr>
              <th scope="row">{i+1}</th>
              
              <td>Mark</td>
              <td>{item.product.title}</td>
              <td>@mdo</td>
            </tr>
            ))}
            

          </tbody>
        </table>
      </div>
    </div>}
  </div>;
};

export default Basket;
