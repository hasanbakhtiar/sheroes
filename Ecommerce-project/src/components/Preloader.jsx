import React from 'react'
import { FadeLoader } from 'react-spinners'

const Preloader = () => {
    return (
        <div className='d-flex align-items-center justify-content-center' style={{width:"100%", height:"100vh"}}>
            <FadeLoader
                height={40}
                margin={30}
                width={15}
            />
        </div>
    )
}

export default Preloader