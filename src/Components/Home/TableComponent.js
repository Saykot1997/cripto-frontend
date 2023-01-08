import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa'
import { RiArrowLeftSFill } from 'react-icons/ri'
import cripto1 from "../../Photos/cripto (1).png"
import cripto2 from "../../Photos/cripto (2).png"
import cripto3 from "../../Photos/cripto (3).png"


export default function TableComponent() {
    return (
        <div className=' w-full mt-5'>
            <table className=' w-full'>
                <thead>
                    <tr className=' bg-gray-100 rounded'>
                        <td className=' text-gray-500 font-semibold py-4 text-center '>TOKEN</td>
                        <td className=' text-gray-500 font-semibold py-4 text-left '>SYMBOL</td>
                        <td className=' text-gray-500 font-semibold py-4 text-left '>PRICE</td>
                        <td className=' text-gray-500 font-semibold py-4 text-left '>24H</td>
                        <td className=' text-gray-500 font-semibold py-4 text-left '>MARKET CAP</td>
                    </tr>
                </thead>
                <tbody>

                    <tr className=' text-lg hover:bg-white transition-all duration-200 ease-linear cursor-pointer'>
                        <td className=' font-semibold py-5 text-center '>
                            <div className=' inline-flex items-center gap-4'>
                                <AiOutlineStar className=' text-2xl text-gray-700' />
                                <div className=' w-8 h-8 rounded-full flex items-center justify-center bg-[#FF9F38]'>
                                    <BsCurrencyBitcoin className=' text-white text-2xl' />
                                </div>
                                <p className=''>Bitcoin</p>
                            </div>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <p className=' text-gray-500'>BTC</p>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <p className=''>$16,4654.765</p>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <div className=' inline-flex items-center'>
                                <RiArrowLeftSFill className=' font-semibold text-green-600 text-4xl rotate-90' />
                                <p className=' text-green-600'>3.00%</p>
                            </div>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <p className=''>$16,4654.765</p>
                        </td>
                    </tr>

                    <tr className=' text-lg hover:bg-white transition-all duration-200 ease-linear cursor-pointer bg-gray-100'>
                        <td className=' font-semibold py-5 text-center '>
                            <div className=' inline-flex items-center gap-4'>
                                <AiFillStar className=' text-[28px] text-[#FF9F38]' />
                                <div className=' w-8 h-8 rounded-full flex items-center justify-center bg-[#637EEA]'>
                                    <img src={cripto1} alt="" className=' w-5' />
                                </div>
                                <p className=''>Bitcoin</p>
                            </div>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <p className=' text-gray-500'>BTC</p>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <p className=''>$16,4654.765</p>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <div className=' inline-flex items-center'>
                                <RiArrowLeftSFill className=' font-semibold text-green-600 text-4xl rotate-90' />
                                <p className=' text-green-600'>3.00%</p>
                            </div>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <p className=''>$16,4654.765</p>
                        </td>
                    </tr>

                    <tr className=' text-lg hover:bg-white transition-all duration-200 ease-linear cursor-pointer'>
                        <td className=' font-semibold py-5 text-center '>
                            <div className=' inline-flex items-center gap-4'>
                                <AiOutlineStar className=' text-2xl text-gray-700' />
                                <div className=' w-8 h-8 rounded-full flex items-center justify-center bg-[#637EEA]'>
                                    <FaEthereum className=' text-white text-2xl' />
                                </div>
                                <p className=''>Bitcoin</p>
                            </div>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <p className=' text-gray-500'>BTC</p>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <p className=''>$16,4654.765</p>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <div className=' inline-flex items-center'>
                                <RiArrowLeftSFill className=' font-semibold text-red-600 text-4xl -rotate-90' />
                                <p className=' text-red-600'>3.00%</p>
                            </div>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <p className=''>$16,4654.765</p>
                        </td>
                    </tr>

                    <tr className=' text-lg hover:bg-white transition-all duration-200 ease-linear cursor-pointer bg-gray-100'>
                        <td className=' font-semibold py-5 text-center '>
                            <div className=' inline-flex items-center gap-4'>
                                <AiOutlineStar className=' text-2xl text-gray-700' />
                                <div className=' w-8 h-8 rounded-full flex items-center justify-center bg-[#2CEA33]'>
                                    <img src={cripto2} alt="" className=' w-5' />
                                </div>
                                <p className=''>Bitcoin</p>
                            </div>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <p className=' text-gray-500'>BTC</p>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <p className=''>$16,4654.765</p>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <div className=' inline-flex items-center'>
                                <RiArrowLeftSFill className=' font-semibold text-red-600 text-4xl -rotate-90' />
                                <p className=' text-red-600'>3.00%</p>
                            </div>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <p className=''>$16,4654.765</p>
                        </td>
                    </tr>

                    <tr className=' text-lg hover:bg-white transition-all duration-200 ease-linear cursor-pointer'>
                        <td className=' font-semibold py-5 text-center '>
                            <div className=' inline-flex items-center gap-4'>
                                <AiFillStar className=' text-[28px] text-[#FF9F38]' />
                                <div className=' w-8 h-8 rounded-full flex items-center justify-center bg-[#26CBFF]'>
                                    <img src={cripto3} alt="" className=' w-5' />
                                </div>
                                <p className=''>Bitcoin</p>
                            </div>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <p className=' text-gray-500'>BTC</p>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <p className=''>$16,4654.765</p>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <div className=' inline-flex items-center'>
                                <RiArrowLeftSFill className=' font-semibold text-green-600 text-4xl rotate-90' />
                                <p className=' text-green-600'>3.00%</p>
                            </div>
                        </td>
                        <td className=' font-semibold py-5 '>
                            <p className=''>$16,4654.765</p>
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}
