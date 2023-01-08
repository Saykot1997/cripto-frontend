import React from 'react'
import searchIcon from "../../Photos/search.png"
import notificationIcons from "../../Photos/notification.png"
import clientIcon from "../../Photos/client.jpg"
import downarrowIcon from "../../Photos/arrow-down.png"

export default function Navbar() {
    return (
        <div className=' w-full flex justify-between'>
            <div className=' relative w-1/4'>
                <img src={searchIcon} alt="" className=' absolute top-1/2 left-2 -translate-y-3 w-4' />
                <input type="text" placeholder='Search' className=' bg-gray-100 rounded-lg pl-8 px-3 py-2 focus:outline-none text-sm focus:text-sm placeholder:text-sm w-full' />
            </div>
            <div className=' flex gap-3 items-center'>
                <div className=' w-12 h-12 flex items-center justify-center bg-white p-1 rounded-full shadow-md shadow-gray-300 cursor-pointer'>
                    <img src={notificationIcons} alt="notification" className='w-5' />
                </div>
                <div className=' flex items-center gap-1'>
                    <div className=' w-12 h-12 flex items-center justify-center p-1 rounded-full cursor-pointer'>
                        <img src={clientIcon} alt="client" className=' w-full rounded-full' />
                    </div>
                    <img src={downarrowIcon} alt="" className=' w-3' />
                </div>
            </div>
        </div>
    )
}
