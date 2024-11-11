import React, {  useRef } from 'react'
import MyInput from './MyInput';



const AppUseImperativeHandle = () => {
    const inputRef = useRef();
    const handleClick = ()=>{
        inputRef.current.myFunc()
    }
  return (
    <div>
        <MyInput ref={inputRef} /><button onClick={handleClick}>add</button>
    </div>
  )
}

export default AppUseImperativeHandle