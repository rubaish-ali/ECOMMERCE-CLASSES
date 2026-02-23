import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    let token = localStorage.getItem("id")
    if (!token) {
        return <Navigate to={"/login"} />
    }else{
        return children
    }
}

export default ProtectedRoutes