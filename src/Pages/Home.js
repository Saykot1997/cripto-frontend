import React, { useEffect, useState } from "react";
import boyPhoto from "../Photos/carr (3).png";
import { AiFillDollarCircle, AiFillFolder } from "react-icons/ai";
import TableComponent from "../Components/Home/TableComponent";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ChartComponent from "../Components/Home/ChartComponent";
import axios from "axios";
import { Host } from "../Data";

export default function Home() {
  const [criptoInfo, setCriptoInfo] = useState(null);
  const [assetData, setAssetData] = useState(null);
  const [positionData, setPositionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = JSON.parse(localStorage.getItem("user"));
  const [accountInfo, setAccountInfo] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${Host}/api/investors/future-account`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const data = { ...res.data.data };
      delete data.assets;
      delete data.positions;
      const assetdata = [...res.data.data.assets];

      const positiondata = [...res.data.data.positions];

      assetdata.sort((a, b) => b.walletBalance - a.walletBalance);
      positiondata.sort((a, b) => b.initialMargin - a.initialMargin);

      setAssetData(assetdata);
      setPositionData(positiondata);
      setAccountInfo(data);
      setCriptoInfo(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.response.data.error ? error.response.data.error : true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading && !assetData && !positionData && !accountInfo && !error) {
    return (
      <div className=" fixed top-0 left-0 z-30 w-screen h-screen flex justify-center items-center bg-[#6C5DD3]">
        <p className=" text-white text-lg text-center">Loading.....</p>
      </div>
    );
  } else if (error) {
    return (
      <div className=" fixed top-0 left-0 z-30 w-screen h-screen flex justify-center items-center bg-red-500">
        <p className=" text-white text-lg text-center">{error}</p>
      </div>
    );
  } else if (assetData && positionData && accountInfo) {
    return (
      // <div className=' w-full grid grid-cols-1 xl:grid-cols-3 md:gap-5 xl:gap-10 mt-2'>
      //     <div className='xl:col-span-2'>
      //         <div className=' w-full md:p-5 bg-white rounded-lg'>
      //             <div className=' w-full bg-[#6C5DD3] rounded-lg py-5 md:py-10 px-5 md:px-7 relative'>
      //                 <div className=' flex items-center gap-2 md:gap-5 flex-wrap'>
      //                     <div className=' w-10 h-10 flex items-center justify-center bg-white bg-opacity-30 rounded-full text-white font-semibold'>
      //                         <AiFillDollarCircle className=' text-2xl' />
      //                     </div>
      //                     <div>
      //                         <p className=' text-white font-semibold md:text-lg'>{criptoInfo.income[3].days}</p>
      //                         <p className=' text-[#FE9E5D] md:text-lg '><span className=' text-lg md:text-3xl font-semibold mb-4'>{criptoInfo.income[3].total}</span> USD</p>
      //                     </div>
      //                 </div>
      //                 <div className=' absolute right-10 -top-12 xl:block hidden'>
      //                     <img src={boyPhoto} alt="" className=' w-[350px]' />
      //                 </div>
      //             </div>
      //             <div className=' mt-7 mb-3 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 md:gap-3 xl:gap-5'>
      //                 <div className=' rounded-lg border flex gap-2 p-2 md:p-5 flex-wrap'>
      //                     <div className=' w-8 h-8 flex justify-center items-center rounded-full bg-[#64CBF4]'>
      //                         <AiFillDollarCircle className=' text-white text-xl ' />
      //                     </div>
      //                     <div>
      //                         <p className=' md:text-lg font-semibold text-gray-400'>{criptoInfo.income[2].days}</p>
      //                         <p className=' text-lg md:text-xl font-semibold'>{criptoInfo.income[2].total}</p>
      //                     </div>
      //                 </div>
      //                 <div className=' rounded-lg border flex gap-2 p-2 md:p-5'>
      //                     <div className=' w-8 h-8 flex justify-center items-center rounded-full bg-[#FE9E38]'>
      //                         <AiFillDollarCircle className=' text-white text-xl ' />
      //                     </div>
      //                     <div>
      //                         <p className=' md:text-lg font-semibold text-gray-400'>{criptoInfo.income[1].days}</p>
      //                         <p className='  text-lg md:text-xl font-semibold'>{criptoInfo.income[1].total}</p>
      //                     </div>
      //                 </div>
      //                 <div className=' rounded-lg border flex gap-2 p-2 md:p-5'>
      //                     <div className=' w-8 h-8 flex justify-center items-center rounded-full bg-[#E391EA]'>
      //                         <AiFillDollarCircle className=' text-white text-xl ' />
      //                     </div>
      //                     <div>
      //                         <p className=' md:text-lg font-semibold text-gray-400'>{criptoInfo.income[0].days}</p>
      //                         <p className='  text-lg md:text-xl font-semibold'>{criptoInfo.income[0].total}</p>
      //                     </div>
      //                 </div>
      //             </div>
      //         </div>
      //         {/* table */}
      //         <div className=''>
      //             <div className=' min-w-[400px] py-5 overflow-x-scroll'>
      //                 <TableComponent criptoInfo={criptoInfo.prices} />
      //             </div>
      //         </div>
      //     </div>
      //     <div className=' col-span-1'>
      //         <div>
      //             <div className=' mt-5 flex justify-between items-center'>
      //                 <p className=' font-bold text-xl'>Statistics</p>
      //                 <div className=' flex gap-1 text-gray-500 items-center cursor-pointer'>
      //                     <p className=''>Monthly</p>
      //                     <IoIosArrowDown />
      //                 </div>
      //             </div>
      //             <ChartComponent />
      //             <div className=' mt-5'>
      //                 <p className=' text-lg font-semibold'>New on Coinbase</p>
      //                 <div className=' flex justify-between items-center border-b py-3'>
      //                     <div className=' flex gap-3 items-center'>
      //                         <div className=' w-10 h-10 flex justify-center items-center rounded-full bg-[#64CBF4]'>
      //                             <AiFillFolder className=' text-white w-8 ' />
      //                         </div>
      //                         <div>
      //                             <p className=' font-semibold'>PolySwarm</p>
      //                             <p className=' text-gray-500 text-sm'>Added 2 days ago</p>
      //                         </div>
      //                     </div>
      //                     <div>
      //                         <MdOutlineKeyboardArrowRight className=' text-2xl' />
      //                     </div>
      //                 </div>
      //                 <div className=' flex justify-between items-center border-b py-3'>
      //                     <div className=' flex gap-3 items-center'>
      //                         <div className=' w-10 h-10 flex justify-center items-center rounded-full bg-[#64CBF4]'>
      //                             <AiFillFolder className=' text-white w-8 ' />
      //                         </div>
      //                         <div>
      //                             <p className=' font-semibold'>PolySwarm</p>
      //                             <p className=' text-gray-500 text-sm'>Added 2 days ago</p>
      //                         </div>
      //                     </div>
      //                     <div>
      //                         <MdOutlineKeyboardArrowRight className=' text-2xl' />
      //                     </div>
      //                 </div>
      //                 <div className=' flex justify-between items-center border-b py-3'>
      //                     <div className=' flex gap-3 items-center'>
      //                         <div className=' w-10 h-10 flex justify-center items-center rounded-full bg-[#64CBF4]'>
      //                             <AiFillFolder className=' text-white w-8 ' />
      //                         </div>
      //                         <div>
      //                             <p className=' font-semibold'>PolySwarm</p>
      //                             <p className=' text-gray-500 text-sm'>Added 2 days ago</p>
      //                         </div>
      //                     </div>
      //                     <div>
      //                         <MdOutlineKeyboardArrowRight className=' text-2xl' />
      //                     </div>
      //                 </div>
      //                 <div className=' flex justify-between items-center border-b py-3'>
      //                     <div className=' flex gap-3 items-center'>
      //                         <div className=' w-10 h-10 flex justify-center items-center rounded-full bg-[#64CBF4]'>
      //                             <AiFillFolder className=' text-white w-8 ' />
      //                         </div>
      //                         <div>
      //                             <p className=' font-semibold'>PolySwarm</p>
      //                             <p className=' text-gray-500 text-sm'>Added 2 days ago</p>
      //                         </div>
      //                     </div>
      //                     <div>
      //                         <MdOutlineKeyboardArrowRight className=' text-2xl' />
      //                     </div>
      //                 </div>
      //                 <div className=' flex justify-between items-center border-b py-3'>
      //                     <div className=' flex gap-3 items-center'>
      //                         <div className=' w-10 h-10 flex justify-center items-center rounded-full bg-[#64CBF4]'>
      //                             <AiFillFolder className=' text-white w-8 ' />
      //                         </div>
      //                         <div>
      //                             <p className=' font-semibold'>PolySwarm</p>
      //                             <p className=' text-gray-500 text-sm'>Added 2 days ago</p>
      //                         </div>
      //                     </div>
      //                     <div>
      //                         <MdOutlineKeyboardArrowRight className=' text-2xl' />
      //                     </div>
      //                 </div>
      //                 <div className=' flex justify-between items-center border-b py-3'>
      //                     <div className=' flex gap-3 items-center'>
      //                         <div className=' w-10 h-10 flex justify-center items-center rounded-full bg-[#64CBF4]'>
      //                             <AiFillFolder className=' text-white w-8 ' />
      //                         </div>
      //                         <div>
      //                             <p className=' font-semibold'>PolySwarm</p>
      //                             <p className=' text-gray-500 text-sm'>Added 2 days ago</p>
      //                         </div>
      //                     </div>
      //                     <div>
      //                         <MdOutlineKeyboardArrowRight className=' text-2xl' />
      //                     </div>
      //                 </div>
      //             </div>
      //         </div>
      //     </div>
      // </div>
      <div className=" p-5">
        <div className=" bg-gray-100 shadow w-full">
          <p className=" text-center font-semibold text-xl pt-5">
            Account Info
          </p>
          <table className=" w-full mt-5">
            <tbody>
              {Object.keys(accountInfo).map((key, index) => {
                return (
                  <tr key={index}>
                    <td className="  border p-2 w-1/2 ">{key}</td>
                    <td className="  border p-2 ">
                      {accountInfo[key] === true ? "true" : accountInfo[key]}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className=" mt-5">
          <p className=" text-center font-semibold text-2xl">Assets</p>
          {assetData.map((asset, index) => {
            return (
              <table
                className=" w-full mt-5 bg-gray-100 rounded shadow"
                key={index}
              >
                <tbody>
                  {Object.keys(asset).map((key, ind) => {
                    return (
                      <tr key={ind}>
                        <td className="  border p-2 w-1/2 ">{key}</td>
                        <td className="  border p-2 ">
                          {asset[key] === true ? "true" : asset[key]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            );
          })}
        </div>
        <div className=" mt-5">
          <p className=" text-center font-semibold text-2xl">Positions</p>
          {positionData.map((position, index) => {
            return (
              <table
                className=" w-full mt-5 bg-gray-100 rounded p-5 shadow"
                key={index}
              >
                <tbody>
                  {Object.keys(position).map((key, ind) => {
                    return (
                      <tr key={ind}>
                        <td className="  border p-2 w-1/2 ">{key}</td>
                        <td className="  border p-2 ">
                          {position[key] === true
                            ? "true"
                            : position[key] === false
                            ? "false"
                            : position[key]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            );
          })}
        </div>
      </div>
    );
  }
}
