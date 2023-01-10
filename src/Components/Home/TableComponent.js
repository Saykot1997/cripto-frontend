import React, { useEffect, useState } from 'react'
import { RiArrowLeftSFill } from 'react-icons/ri'
import ReactPaginate from 'react-paginate';
import searchIcon from "../../Photos/search.png"
// import notificationIcons from "../../Photos/notification.png"
// import cripto1 from "../../Photos/cripto (1).png"
// import cripto2 from "../../Photos/cripto (2).png"
// import cripto3 from "../../Photos/cripto (3).png"


export default function TableComponent({ criptoInfo }) {

    const [displayData, setDisplayData] = useState(criptoInfo.slice(0, 10))
    const [searchData, setSearchData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    const [search, setSearch] = useState("")

    const gotoDetailPage = (index) => {
        console.log(index)
    }
    const [itemOffset, setItemOffset] = useState(0);
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    // const endOffset = ;
    const [endOffset, setEndOffset] = useState(itemOffset + itemsPerPage)
    const [pageCount, setPageCount] = useState(Math.ceil(criptoInfo.length / itemsPerPage))
    // const pageCount = Math.ceil(criptoInfo.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (data) => {
        setCurrentPage(data.selected + 1);
        const newOffset = (data.selected * itemsPerPage) % criptoInfo.length;
        setItemOffset(newOffset);
        setEndOffset(newOffset + itemsPerPage)
    }

    useEffect(() => {
        if (searchData.length) {
            setDisplayData(searchData.slice(itemOffset, endOffset))
        } else {
            setDisplayData(criptoInfo.slice(itemOffset, endOffset))
        }
    }, [currentPage, search])


    useEffect(() => {
        if (search) {
            const newData = criptoInfo.filter((data) => data.symbol.toLowerCase().search(search.toLowerCase()) > -1)
            setSearchData(newData)
            setCurrentPage(1);
            const newOffset = (0 * itemsPerPage) % criptoInfo.length;
            setItemOffset(newOffset);
            setEndOffset(10)
            setPageCount(Math.ceil(newData.length / itemsPerPage))
        } else {
            setSearchData([])
            setPageCount(Math.ceil(criptoInfo.length / itemsPerPage))
        }
    }, [search])



    return (
        <div className=' min-w-[400px] overflow-x-scroll w-full mt-5'>
            <div className=' w-full relative mb-3'>
                <img src={searchIcon} alt="" className=' absolute top-1/2 left-2 -translate-y-2 w-4' />
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search by symbol' className=' bg-gray-100 rounded-lg pl-8 px-3 py-3 focus:outline-none text-sm focus:text-sm placeholder:text-sm w-full' />
                {/* <button className=' py-1 px-2 rounded bg-blue-500 font-semibold text-sm text-white absolute top-2 right-2'>Search</button> */}
            </div>
            <table className=' w-full'>
                <thead>
                    <tr className=' bg-gray-100 rounded text-sm'>
                        <td className=' text-gray-500 font-semibold py-4 text-left pl-2'>SYMBOL</td>
                        <td className=' text-gray-500 font-semibold py-4 text-center '>PRICE</td>
                        <td className=' text-gray-500 font-semibold py-4 text-center '>HIGHEST PRICE</td>
                        <td className=' text-gray-500 font-semibold py-4 text-center '>LOWEST PRICE</td>
                        <td className=' text-gray-500 font-semibold py-4 text-right pr-2 '>24H</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        displayData.map((data, index) => {
                            return (
                                <tr onClick={() => gotoDetailPage(index)} className='hover:bg-white transition-all duration-200 ease-linear cursor-pointer even:bg-gray-100'>
                                    <td className=' font-semibold text-sm py-2 pl-2'>
                                        <p className=' text-gray-500'>{data.symbol}</p>
                                    </td>
                                    <td className=' font-semibold text-sm py-2 text-center '>
                                        <p className=''>${data.lastPrice}</p>
                                    </td>
                                    <td className=' font-semibold text-sm py-2 text-center '>
                                        <p className=''>${data.highPrice}</p>
                                    </td>
                                    <td className=' font-semibold text-sm py-2 text-center '>
                                        <p className=''>${data.lowPrice}</p>
                                    </td>
                                    <td className=' font-semibold text-sm py-2 text-right pr-2'>
                                        <div className=' inline-flex items-center justify-end'>
                                            <RiArrowLeftSFill className={` font-semibold text-4xl ${data.priceChangePercent > 0 ? "text-green-600  rotate-90" : " text-red-600 -rotate-90"}`} />
                                            <p className={`${data.priceChangePercent > 0 ? "text-green-600 " : " text-red-600"}`}>{parseFloat(data.priceChangePercent).toFixed(2)}%</p>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className=' mt-2 '>
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    nextClassName="hover:bg-gray-200 hover:border border-gray-900  rounded-full h-7 w-7 flex justify-center hover:font-bold items-center bg-[#6C5DD3]"
                    nextLinkClassName='text-gray-100 font-semi-bold hover:text-[#6C5DD3] hover:font-bold'
                    previousClassName='hover:bg-gray-200 hover:border border-gray-900  rounded-full h-7 w-7 flex justify-center hover:font-bold items-center bg-[#6C5DD3]'
                    previousLinkClassName='text-gray-100 font-semi-bold hover:text-[#6C5DD3] hover:font-bold'
                    breakLabel="..."
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                    containerClassName="w-full flex justify-center items-center bg-gray-100"
                    pageClassName='hover:bg-gray-200 rounded-full h-8 w-8 mx-2 hover:font-bold flex justify-center items-center'
                    pageLinkClassName='text-gray-800 font-semi-bold'
                    activeClassName=" bg-gray-200 rounded-full h-7 w-7 flex justify-center items-center"
                    activeLinkClassName='text-gray-600 font-semi-bold'
                    breakClassName=''
                    breakLinkClassName='text-gray-800 mx-2 sm:mx-5 text-lg font-semi-bold'

                />
            </div>
        </div>
    )
}
