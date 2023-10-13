import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../AuthContext"

const ProtectedRoute=({children})=>{

    console.log("Entered in protected route")
    const {token}=useContext(AuthContext)
    if(token) return children
     return <Navigate to="/login" replace/>

    
}

export default ProtectedRoute;