import React from 'react'
import { Routes, Route } from 'react-router-dom'

//Pages
import Home from './Home/Home'
import Login from './Login/Login'

function Pages() {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='login' exact element={<Login />} />
        </Routes>
    )
}

export default Pages