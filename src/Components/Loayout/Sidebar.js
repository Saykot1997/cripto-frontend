import React from 'react'
import Logo from "../../Photos/logo.jpg"
import menuLogo from "../../Photos/menu.png"
import assetsLogo from "../../Photos/assets.png"
import payLogo from "../../Photos/pay.png"
import tradeLogo from "../../Photos/chart.png"
import listLogo from "../../Photos/list.png"
import settingsLogo from "../../Photos/settings.png"

export default function Sidebar() {
    return (
        <div className=' w-[80px] md:w-[250px] min-h-screen py-3 px-2 md:px-7 fixed top-0 left-0 bg-gray-100 z-20'>
            <div className=' flex gap-3 items-center justify-center'>
                <div className=' h-6 w-6 md:w-10 md:h-10 rounded-full overflow-hidden '>
                    <img src={Logo} alt="logo" className=' h-full w-full object-cover cursor-pointer' />
                </div>
                <p className=' font-bold text-lg md:block hidden'>Ofspace LLC</p>
            </div>
            <div className=' mt-5'>
                <div className=' flex gap-3 items-center cursor-pointer hover:bg-white transition-all duration-200 ease-linear hover:shadow-md shadow-gray-400 text-gray-500 hover:font-semibold hover:text-black py-3 px-4 rounded-lg mb-3'>
                    <img src={menuLogo} alt="" className=' w-4' />
                    <p className=' md:block hidden'>Dashboard</p>
                </div>
                <div className=' flex gap-3 items-center cursor-pointer hover:bg-white transition-all duration-200 ease-linear hover:shadow-md shadow-gray-400 text-gray-500 hover:font-semibold hover:text-black py-3 px-4 rounded-lg mb-3'>
                    <img src={assetsLogo} alt="" className=' w-6' />
                    <p className=' md:block hidden'>Assets</p>
                </div>
                <div className=' flex gap-3 items-center cursor-pointer hover:bg-white transition-all duration-200 ease-linear hover:shadow-md shadow-gray-400 text-gray-500 hover:font-semibold hover:text-black py-3 px-4 rounded-lg mb-3'>
                    <img src={tradeLogo} alt="" className=' w-6' />
                    <p className=' md:block hidden'>Trade</p>
                </div>
                <div className=' flex gap-3 items-center cursor-pointer hover:bg-white transition-all duration-200 ease-linear hover:shadow-md shadow-gray-400 text-gray-500 hover:font-semibold hover:text-black py-3 px-4 rounded-lg mb-3'>
                    <img src={payLogo} alt="" className=' w-6' />
                    <p className=' md:block hidden'>Pay</p>
                </div>
                <div className=' flex gap-3 items-center cursor-pointer hover:bg-white transition-all duration-200 ease-linear hover:shadow-md shadow-gray-400 text-gray-500 hover:font-semibold hover:text-black py-3 px-4 rounded-lg mb-3'>
                    <img src={listLogo} alt="" className=' w-5' />
                    <p className=' md:block hidden'>Invite Friends</p>
                </div>
                <div className=' flex gap-3 items-center cursor-pointer hover:bg-white transition-all duration-200 ease-linear hover:shadow-md shadow-gray-400 text-gray-500 hover:font-semibold hover:text-black py-3 px-4 rounded-lg mb-3'>
                    <img src={settingsLogo} alt="" className=' w-5' />
                    <p className=' md:block hidden'>Settings</p>
                </div>
            </div>
        </div>
    )
}
