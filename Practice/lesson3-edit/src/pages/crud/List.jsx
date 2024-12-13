import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Preloader from '../../components/Preloader';
import { Link } from 'react-router-dom';

const List = () => {
  const [status,setStatus] = useState(null);
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get('https://matrixacademylessonapi.webluna.org/category',{headers:{
      "matrix-access":"3fa3afc2aa0e5e2c1c17ee83f4c8fc76"
    }})
    .then(res=>{
      setStatus(res.status);
      if (res.status===200) {
        setData(res.data);
      }else{
        setData([]);
      }
    })
    .catch(error=>{
      setStatus(error.status);
    })
    
  },[])
  
  
  return (
    <div>
      
        {status === 200?<>
          <p className=' alert alert-success'>Success</p>
          <ul>
            {data.map(item=>(
              <li key={item._id}>{item.titleAz}<Link to={`/${item._id}`}>Edit</Link></li>
            ))}
          </ul>
        
        </>: status===401 ?<p className=' alert alert-danger'>NO ACCESS!</p>: <Preloader />}
    </div>
  )
}

export default List