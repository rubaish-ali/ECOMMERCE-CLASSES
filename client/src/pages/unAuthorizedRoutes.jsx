import React from 'react'
import { Navigate } from 'react-router-dom'
import Login from './Login';

const UnAuthorized = ({children}) => {
    let token = localStorage.getItem("id")
    console.log(token);

    if (token) {
        return <Navigate to={"/products"} />
    } else {
        return children
    }
}

export default UnAuthorized