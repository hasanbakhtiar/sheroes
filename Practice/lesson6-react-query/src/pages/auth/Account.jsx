import React, { useContext, useEffect } from 'react'
import { EndPointContext } from '../../context/EndPointContext';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { jwtDecode } from "jwt-decode";
const Account = () => {
    const cookies = new Cookies(null, { path: '/' });
    const decoded = jwtDecode(cookies.get('x-auth-token'))
    console.log(decoded._id);
    
    const [endPoint, header] = useContext(EndPointContext);
    useEffect(()=>{
      axios.get(`${endPoint}/user/${decoded._id}`,{
        headers:{
          "matrix-access":"3fa3afc2aa0e5e2c1c17ee83f4c8fc76",
          "x-auth-token":cookies.get('x-auth-token')
        }
      });
    },[])
  
  
  return (
    <div>Account</div>
  )
}

export default Account