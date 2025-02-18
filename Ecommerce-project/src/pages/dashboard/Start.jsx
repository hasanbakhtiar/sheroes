import axios from 'axios'
import React, { useContext } from 'react'
import BaseUrlContext from '../../context/BaseUrlContext';

const Start = () => {
    const [baseUrl, header] = useContext(BaseUrlContext);
    const sendData = ()=>{
    axios.post(`${baseUrl}/ad/category`,{
        row:100,
        title:"My data",
        }, header)
        .then(res=>console.log(res))

    }
  return (
    <div>
        <button onClick={sendData}>Send data</button>
    </div>
  )
}

export default Start