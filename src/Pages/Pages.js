import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";

//Pages
import Home from './Home/Home'
import Login from './Login/Login'



function Pages() {

    const { userToken } = useSelector((state) => state.auth);

    return (
        <Routes>
            <Route path='/login' exact element={<Login />} />
            <Route path='/' exact element={userToken ? <Home /> : <Navigate to='/login' />} />

        </Routes>
    )
}

export default Pages