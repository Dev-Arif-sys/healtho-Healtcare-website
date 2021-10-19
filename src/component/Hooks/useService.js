import { useContext } from "react"
import { ServiceContext } from "../../ContextProvider/ContextProvider"

const useService=()=>{
    return useContext(ServiceContext)
}
export default useService;