import React from 'react'
import { BsArrowDownUp } from "react-icons/bs"
import boyPhoto from "../Photos/carr (3).png"
import { AiFillFolder } from "react-icons/ai"
import { TbMessage2 } from "react-icons/tb"
import TableComponent from '../Components/Home/TableComponent'
import { IoLogInOutline } from "react-icons/io5"
import { IoIosArrowDown } from "react-icons/io"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import ChartComponent from '../Components/Home/ChartComponent'


export default function Home() {
    return (
        <div className=' w-full grid grid-cols-3 gap-5 mt-5'>
            <div className=' col-span-2'>
                <div className=' w-full p-5 rounded-lg bg-white'>
                    <div className=' w-full bg-[#6C5DD3] rounded-lg py-10 px-7 relative'>
                        <div className=' flex items-center gap-5'>
                            <div className=' w-10 h-10 flex items-center justify-center bg-white bg-opacity-30 rounded-full text-white font-semibold'>
                                <BsArrowDownUp />
                            </div>
                            <div>
                                <p className=' text-[#FE9E5D] text-lg '><span className=' text-3xl font-semibold mb-4'>3.5006521</span> BNB</p>
                                <p className=' text-gray-300 text-lg '><span className=' text-3xl text-white font-semibold'>201.09</span> USD</p>
                            </div>
                        </div>
                        <div className=' absolute right-10 -top-12'>
                            <img src={boyPhoto} alt="" className=' w-[350px]' />
                        </div>
                    </div>
                    <div className=' mt-7 mb-3 grid grid-cols-3 gap-3'>
                        <div className=' rounded-lg border flex gap-2 p-5'>
                            <div className=' w-8 h-8 flex justify-center items-center rounded-full bg-[#64CBF4]'>
                                <AiFillFolder className=' text-white w-5 ' />
                            </div>
                            <div>
                                <p className=' text-lg font-semibold text-gray-400'>24H Change</p>
                                <p className=' text-3xl font-semibold'>-789.75 USD</p>
                            </div>
                        </div>
                        <div className=' rounded-lg border flex gap-2 p-5'>
                            <div className=' w-8 h-8 flex justify-center items-center rounded-full bg-[#FE9E38]'>
                                <TbMessage2 className=' text-white w-5 ' />
                            </div>
                            <div>
                                <p className=' text-lg font-semibold text-gray-400'>Highest Balance</p>
                                <p className=' text-3xl font-semibold'>-789.75 USD</p>
                            </div>
                        </div>
                        <div className=' rounded-lg border flex gap-2 p-5'>
                            <div className=' w-8 h-8 flex justify-center items-center rounded-full bg-[#E391EA]'>
                                <TbMessage2 className=' text-white w-5 ' />
                            </div>
                            <div>
                                <p className=' text-lg font-semibold text-gray-400'>Portfolio Age</p>
                                <p className=' text-3xl font-semibold'>-789.75 USD</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* table */}
                <TableComponent />
            </div>
            <div className=' col-span-1'>
                <div className=' w-full grid grid-cols-2 gap-3'>
                    <div className=' py-7 cursor-pointer p-3 flex items-center justify-center gap-3 border rounded-2xl hover:bg-[#6C5DD3] hover:text-white transition-all duration-150 ease-linear'>
                        <IoLogInOutline className=' text-3xl' />
                        <p className=' font-bold text-xl' >Deposit</p>
                    </div>
                    <div className=' py-7 cursor-pointer p-3 flex items-center justify-center gap-3 border rounded-2xl bg-[#6C5DD3] text-white hover:bg-white hover:text-black transition-all duration-150 ease-linear'>
                        <IoLogInOutline className=' text-3xl' />
                        <p className=' font-bold text-xl ' >Withdraw</p>
                    </div>
                </div>
                <div>
                    <div className=' mt-5 flex justify-between items-center'>
                        <p className=' font-bold text-xl'>Statistics</p>
                        <div className=' flex gap-1 text-gray-500 items-center cursor-pointer'>
                            <p className=''>Monthly</p>
                            <IoIosArrowDown />
                        </div>
                    </div>
                    <ChartComponent />
                    <div className=' mt-5'>
                        <p className=' text-lg font-semibold'>New on Coinbase</p>
                        <div className=' flex justify-between items-center border-b py-3'>
                            <div className=' flex gap-3 items-center'>
                                <div className=' w-10 h-10 flex justify-center items-center rounded-full bg-[#64CBF4]'>
                                    <AiFillFolder className=' text-white w-8 ' />
                                </div>
                                <div>
                                    <p className=' font-semibold'>PolySwarm</p>
                                    <p className=' text-gray-500 text-sm'>Added 2 days ago</p>
                                </div>
                            </div>
                            <div>
                                <MdOutlineKeyboardArrowRight className=' text-2xl' />
                            </div>
                        </div>
                        <div className=' flex justify-between items-center border-b py-3'>
                            <div className=' flex gap-3 items-center'>
                                <div className=' w-10 h-10 flex justify-center items-center rounded-full bg-[#64CBF4]'>
                                    <AiFillFolder className=' text-white w-8 ' />
                                </div>
                                <div>
                                    <p className=' font-semibold'>PolySwarm</p>
                                    <p className=' text-gray-500 text-sm'>Added 2 days ago</p>
                                </div>
                            </div>
                            <div>
                                <MdOutlineKeyboardArrowRight className=' text-2xl' />
                            </div>
                        </div>
                        <div className=' flex justify-between items-center border-b py-3'>
                            <div className=' flex gap-3 items-center'>
                                <div className=' w-10 h-10 flex justify-center items-center rounded-full bg-[#64CBF4]'>
                                    <AiFillFolder className=' text-white w-8 ' />
                                </div>
                                <div>
                                    <p className=' font-semibold'>PolySwarm</p>
                                    <p className=' text-gray-500 text-sm'>Added 2 days ago</p>
                                </div>
                            </div>
                            <div>
                                <MdOutlineKeyboardArrowRight className=' text-2xl' />
                            </div>
                        </div>
                        <div className=' flex justify-between items-center border-b py-3'>
                            <div className=' flex gap-3 items-center'>
                                <div className=' w-10 h-10 flex justify-center items-center rounded-full bg-[#64CBF4]'>
                                    <AiFillFolder className=' text-white w-8 ' />
                                </div>
                                <div>
                                    <p className=' font-semibold'>PolySwarm</p>
                                    <p className=' text-gray-500 text-sm'>Added 2 days ago</p>
                                </div>
                            </div>
                            <div>
                                <MdOutlineKeyboardArrowRight className=' text-2xl' />
                            </div>
                        </div>
                        <div className=' flex justify-between items-center border-b py-3'>
                            <div className=' flex gap-3 items-center'>
                                <div className=' w-10 h-10 flex justify-center items-center rounded-full bg-[#64CBF4]'>
                                    <AiFillFolder className=' text-white w-8 ' />
                                </div>
                                <div>
                                    <p className=' font-semibold'>PolySwarm</p>
                                    <p className=' text-gray-500 text-sm'>Added 2 days ago</p>
                                </div>
                            </div>
                            <div>
                                <MdOutlineKeyboardArrowRight className=' text-2xl' />
                            </div>
                        </div>
                        <div className=' flex justify-between items-center border-b py-3'>
                            <div className=' flex gap-3 items-center'>
                                <div className=' w-10 h-10 flex justify-center items-center rounded-full bg-[#64CBF4]'>
                                    <AiFillFolder className=' text-white w-8 ' />
                                </div>
                                <div>
                                    <p className=' font-semibold'>PolySwarm</p>
                                    <p className=' text-gray-500 text-sm'>Added 2 days ago</p>
                                </div>
                            </div>
                            <div>
                                <MdOutlineKeyboardArrowRight className=' text-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
