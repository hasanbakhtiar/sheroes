import { createContext } from "react"

export const BaseUrlContext = createContext(); 
export const BaseUrlProvider = ({children}) => {
    const baseUrl = "https://matrixacademylessonapi.webluna.org";
    const header = {
        headers:{
            "lesson-access":"bd859cade3ac0dd3165f793b641e40cd",
        }
    }
  return <BaseUrlContext.Provider value={[baseUrl,header]}>{children}</BaseUrlContext.Provider>
}

export default BaseUrlContext