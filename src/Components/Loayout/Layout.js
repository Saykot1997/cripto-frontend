import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Layout({ children }) {

    return (
        <div className=' bg-gray-100 min-h-screen w-full'>
            <div className=' w-full flex'>
                <Sidebar />
                <div className=' bg-gray-50 min-h-screen w-full pl-[90px] md:pl-[270px] pr-3 md:pr-10 pt-16 pb-5 overflow-hidden'>
                    <Navbar />
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout