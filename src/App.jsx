import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import MainLayouts from './Layouts/MainLayouts'
import AuthLayout from './Layouts/AuthLayout'

function App() {
    return (
        <div>
            <Routes>
                <Route index element={<MainLayouts><Home></Home></MainLayouts>}></Route>
                <Route path='/About' element={<MainLayouts><About></About></MainLayouts>}></Route>
                <Route path='/Register' element={<AuthLayout><Register></Register></AuthLayout>}></Route>
                <Route path='/Login' element={<AuthLayout><Login></Login></AuthLayout>}></Route>
            </Routes>
        </div>
    )
}

export default App