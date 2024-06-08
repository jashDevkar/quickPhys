import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function Layout() {
    return (
        <>
            <div className='overflow-x-hidden' >
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default Layout