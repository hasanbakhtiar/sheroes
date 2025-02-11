import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import BaseUrlContext from '../context/BaseUrlContext';

const Test = () => {
    const [data, setData] = useState();
    const [baseUrl, header] = useContext(BaseUrlContext);
    useEffect(() => {
        axios.get(`${baseUrl}/ad/user`,header)
            .then(res => console.log(res))
    }, [])

    return (
        <div>Test</div>
    )
}

export default Test