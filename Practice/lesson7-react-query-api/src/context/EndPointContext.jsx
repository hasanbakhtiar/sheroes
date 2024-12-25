import { createContext } from "react";

export const EndPointContext = createContext();
export const EndPointProvider = ({children})=>{
    
    const endPoint = "http://localhost:3010";
    const header = {
        headers:{
            "matrix-access":"3fa3afc2aa0e5e2c1c17ee83f4c8fc76",
        }
    }
    return <EndPointContext.Provider value={[endPoint,header]}>{children}</EndPointContext.Provider>
}