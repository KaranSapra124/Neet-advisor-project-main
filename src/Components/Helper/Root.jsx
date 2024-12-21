import React from 'react'
import Navbar from '../Home/Navbar'
// import { Outlet } from 'react-router-dom'
import Footer from '../Home/Footer'

const Root = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Root