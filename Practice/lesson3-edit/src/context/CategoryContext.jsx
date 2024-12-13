import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider =({children})=>{
    
    const [data,setData] = useState([]);
    useEffect(()=>{
      axios.get('https://matrixacademylessonapi.webluna.org/category',{headers:{
        "matrix-access":"3fa3afc2aa0e5e2c1c17ee83f4c8fc76"
      }})
      .then(res=>{
        if (res.status===200) {
          setData(res.data);
        }else{
          setData([]);
        }
      })
      .catch(error=>{
        console.log(error);
        
      })
      
    },[])
    return <CategoryContext.Provider value={[data,setData]}>{children}</CategoryContext.Provider>
    
    
}
