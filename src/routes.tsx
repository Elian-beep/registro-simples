import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Login from "Pages/Login"
import NewUser from "Pages/NewUser"
import React from "react"

export const AppRouter = () => {

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path='/newuser' element={<NewUser />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}