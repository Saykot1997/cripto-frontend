import React, { useEffect, useState } from 'react'
import boyPhoto from "../Photos/carr (3).png"
import { AiFillDollarCircle, AiFillFolder } from "react-icons/ai"
import TableComponent from '../Components/Home/TableComponent'
// import { IoLogInOutline } from "react-icons/io5"
import { IoIosArrowDown } from "react-icons/io"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import ChartComponent from '../Components/Home/ChartComponent'
import axios from 'axios'
import { Host } from '../Data'



export default function Home() {

    const [criptoInfo, setCriptoInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = JSON.parse(localStorage.getItem("user"))

    const getData = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`${Host}/api/investors/dashboard`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setCriptoInfo(res.data.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(error.response.data.error ? error.response.data.error : true)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(criptoInfo)

    if (loading && !criptoInfo && !error) {
        return (
            <div className=' fixed top-0 left-0 z-30 w-screen h-screen flex justify-center items-center bg-[#6C5DD3]'>
                <p className=' text-white text-lg text-center'>Loading.....</p>
            </div>
        )
    } else if (error) {
        return (
            <div className=' fixed top-0 left-0 z-30 w-screen h-screen flex justify-center items-center bg-red-500'>
                <p className=' text-white text-lg text-center'>{error}</p>
            </div>
        )
    } else if (criptoInfo) {
        return (
            <div className=' w-full grid grid-cols-3 gap-5 mt-2'>
                <div className=' col-span-2'>
                    <div className=' w-full p-5 rounded-lg bg-white'>
                        <div className=' w-full bg-[#6C5DD3] rounded-lg py-10 px-7 relative'>
                            <div className=' flex items-center gap-5'>
                                <div className=' w-10 h-10 flex items-center justify-center bg-white bg-opacity-30 rounded-full text-white font-semibold'>
                                    <AiFillDollarCircle className=' text-2xl' />
                                </div>
                                <div>
                                    <p className=' text-white font-semibold text-lg'>{criptoInfo.income[3].days}</p>
                                    <p className=' text-[#FE9E5D] text-lg '><span className=' text-3xl font-semibold mb-4'>{criptoInfo.income[3].total}</span> USD</p>
                                    {/* <p className=' text-gray-300 text-lg '><span className=' text-3xl text-white font-semibold'>201.09</span> USD</p> */}
                                </div>
                            </div>
                            <div className=' absolute right-10 -top-12'>
                                <img src={boyPhoto} alt="" className=' w-[350px]' />
                            </div>
                        </div>
                        <div className=' mt-7 mb-3 grid grid-cols-3 gap-3'>
                            <div className=' rounded-lg border flex gap-2 p-5'>
                                <div className=' w-8 h-8 flex justify-center items-center rounded-full bg-[#64CBF4]'>
                                    <AiFillDollarCircle className=' text-white text-xl ' />
                                </div>
                                <div>
                                    <p className=' text-lg font-semibold text-gray-400'>{criptoInfo.income[2].days}</p>
                                    <p className=' text-xl font-semibold'>{criptoInfo.income[2].total}</p>
                                </div>
                            </div>
                            <div className=' rounded-lg border flex gap-2 p-5'>
                                <div className=' w-8 h-8 flex justify-center items-center rounded-full bg-[#FE9E38]'>
                                    <AiFillDollarCircle className=' text-white text-xl ' />
                                </div>
                                <div>
                                    <p className=' text-lg font-semibold text-gray-400'>{criptoInfo.income[1].days}</p>
                                    <p className=' text-xl font-semibold'>{criptoInfo.income[1].total}</p>
                                </div>
                            </div>
                            <div className=' rounded-lg border flex gap-2 p-5'>
                                <div className=' w-8 h-8 flex justify-center items-center rounded-full bg-[#E391EA]'>
                                    <AiFillDollarCircle className=' text-white text-xl ' />
                                </div>
                                <div>
                                    <p className=' text-lg font-semibold text-gray-400'>{criptoInfo.income[0].days}</p>
                                    <p className=' text-xl font-semibold'>{criptoInfo.income[0].total}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* table */}
                    <TableComponent criptoInfo={criptoInfo.prices} />
                </div>
                <div className=' col-span-1'>
                    {/* <div className=' w-full grid grid-cols-2 gap-3'>
                        <div className=' py-7 cursor-pointer p-3 flex items-center justify-center gap-3 border rounded-2xl hover:bg-[#6C5DD3] hover:text-white transition-all duration-150 ease-linear'>
                            <IoLogInOutline className=' text-3xl' />
                            <p className=' font-bold text-xl' >Deposit</p>
                        </div>
                        <div className=' py-7 cursor-pointer p-3 flex items-center justify-center gap-3 border rounded-2xl bg-[#6C5DD3] text-white hover:bg-white hover:text-black transition-all duration-150 ease-linear'>
                            <IoLogInOutline className=' text-3xl' />
                            <p className=' font-bold text-xl ' >Withdraw</p>
                        </div>
                    </div> */}
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

}
