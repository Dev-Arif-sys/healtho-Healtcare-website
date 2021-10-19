import { useContext } from "react"
import { AuthContext } from "../../ContextProvider/ContextProvider"

const useAuth=()=>{
   return useContext(AuthContext)
}

export default useAuth;