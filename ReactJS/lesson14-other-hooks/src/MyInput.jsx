import { forwardRef, useImperativeHandle } from "react"

const MyInput = forwardRef((props,ref)=>{
    useImperativeHandle(ref,()=>({
        myFunc:sayHi
    }))

    const sayHi = ()=>{
        alert("Hello")
    }

    return(
        <input  type="text" />
    )
})

export default MyInput