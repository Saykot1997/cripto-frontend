import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Laout({ children }) {

    return (
        <div className=' bg-gray-100 min-h-screen w-full'>
            <div className=' w-full flex'>
                <Sidebar />
                <div className=' bg-gray-50 min-h-screen w-[calc(100%-250px)] overflow-hidden py-7 px-10'>
                    <Navbar />
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Laout