import { createContext } from "react"
import { useCookies } from "react-cookie";

export const BaseUrlContext = createContext();
export const BaseUrlProvider = ({children}) => {
    const [cookies] = useCookies(['cookie-e']);
    const baseUrl = "http://localhost:3005";
    const header = {
        headers:{
            "lesson-access":"bd859cade3ac0dd3165f793b641e40cd",
            "x-auth-token":cookies["cookie-e"]
        }
    }
  return <BaseUrlContext.Provider value={[baseUrl,header]}>{children}</BaseUrlContext.Provider>
}

export default BaseUrlContext
