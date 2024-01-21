import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import React from "react"

import Login from "Pages/Login"
import NewUser from "Pages/NewUser"
import NewPerson from "Pages/NewPerson"

export const AppRouter = () => {

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path='/newuser' element={<NewUser />} />
                    <Route path='/newperson' element={<NewPerson />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}