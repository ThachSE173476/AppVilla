import React, {useEffect} from 'react'

import { Route, Routes, Link, BrowserRouter, Outlet } from 'react-router-dom'

import GridSidebar from './pages/GridSidebar/GridSidebar'
import Single from './pages/Single/Single'
import SingleSidebar from './pages/SingleSidebar/SingleSidebar.jsx'
import Home from './pages/Home/Home.jsx'


import './App.scss'

function App() {
    
    return (
        <div className='container'>
            <BrowserRouter>
                <Routes>
                    <Route 
                        path='/' 
                        element={<Home/>} 
                        exact 
                    />
                    <Route
                        path='/gridsidebar'
                        element={<GridSidebar/>}
                    />
                    <Route
                        path='/single'
                        element={<Single/>}
                    />
                    <Route
                        path='/singlesidebar'
                        element={<SingleSidebar/>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App