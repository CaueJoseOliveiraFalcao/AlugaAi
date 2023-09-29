import React from "react";
import { Navigate } from 'react-router-dom';
export function PrivateRoute({children , user}){
    return user ? children : <Navigate to='/'/>;
}