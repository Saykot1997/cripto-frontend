import React, { useState } from "react";
import ChartComponent from "../Components/Home/ChartComponent";
import { IoMdEye } from "react-icons/io";

export default function PNLAnalysis() {
  const [typeOfCurrency, setTypeOfCurrency] = useState("usd");
  const [daysNumber, setDaysNumber] = useState("7D");
  const [detailsType, setDetailsType] = useState("overview");

  return (
    <div className=" w-full flex justify-center">
      <div className=" w-full sm:w-[500px] overflow-hidden bg-black shadow rounded-md mt-5">
        <div className=" bg-gray-700 py-5">
          <p className=" font-semibold text-gray-200 text-center text-lg">
            Futures PNL Analysis
          </p>
          {/* type of currency toggle section */}
          <div className=" w-full mt-2 flex justify-center">
            <div className=" border border-gray-900 rounded-md overflow-hidden flex items-center">
              <div
                className={` px-2 py-1 border-r border-gray-900 flex items-center justify-center cursor-pointer ${
                  typeOfCurrency === "usd"
                    ? " bg-gray-800 text-gray-300"
                    : "text-gray-500"
                }`}
                onClick={() => setTypeOfCurrency("usd")}
              >
                <span className=" text-sm">USD$-M</span>
              </div>
              <div
                className={` px-2 py-1 flex items-center justify-center cursor-pointer ${
                  typeOfCurrency === "coin"
                    ? " bg-gray-800 text-gray-300"
                    : "text-gray-500"
                }`}
                onClick={() => setTypeOfCurrency("coin")}
              >
                <span className=" text-sm">COIN-M</span>
              </div>
            </div>
          </div>
          {/* type of currency toggle section */}
          {/* pnl section */}
          <div className=" mt-5">
            <div className=" w-full flex justify-center">
              <div className=" text-center">
                <p className=" text-gray-300 text-sm flex items-center gap-1">
                  Today's PNL <IoMdEye className=" text-base" />
                </p>
                <p className=" text-green-600 font-semibold text-lg">+2.22%</p>
                <p className=" text-green-600 text-sm">+456.66 USD</p>
              </div>
            </div>
            <div className=" w-full flex justify-around m-5">
              <div className=" text-center">
                <p className=" text-gray-300 text-sm">7d PNL</p>
                <p className=" text-green-600 font-semibold text-lg">+2.22%</p>
                <p className=" text-green-600 text-sm">+456.66 USD</p>
              </div>
              <div className=" text-center">
                <p className=" text-gray-300 text-sm">30d PNL</p>
                <p className=" text-green-600 font-semibold text-lg">+2.22%</p>
                <p className=" text-green-600 text-sm">+456.66 USD</p>
              </div>
            </div>
          </div>
          {/* pnl section */}
        </div>
        {/* days of details */}
        <div className=" mt-2 bg-gray-700 p-5">
          <div className=" w-full grid grid-cols-4 gap-3">
            <div
              className={`flex items-center justify-center px-2 py-1 rounded cursor-pointer ${
                daysNumber === "7D"
                  ? "bg-gray-500 text-gray-200"
                  : "bg-gray-600 text-gray-400"
              }`}
              onClick={() => setDaysNumber("7D")}
            >
              <span className=" font-medium">7D</span>
            </div>
            <div
              className={`flex items-center justify-center px-2 py-1 rounded cursor-pointer ${
                daysNumber === "1M"
                  ? "bg-gray-500 text-gray-200"
                  : "bg-gray-600 text-gray-400"
              }`}
              onClick={() => setDaysNumber("1M")}
            >
              <span className=" font-medium">1M</span>
            </div>
            <div
              className={`flex items-center justify-center px-2 py-1 rounded cursor-pointer ${
                daysNumber === "3M"
                  ? "bg-gray-500 text-gray-200"
                  : "bg-gray-600 text-gray-400"
              }`}
              onClick={() => setDaysNumber("3M")}
            >
              <span className=" font-medium">3M</span>
            </div>
            <div
              className={`flex items-center justify-center px-2 py-1 rounded cursor-pointer ${
                daysNumber === "1Y"
                  ? "bg-gray-500 text-gray-200"
                  : "bg-gray-600 text-gray-400"
              }`}
              onClick={() => setDaysNumber("1Y")}
            >
              <span className=" font-medium">1Y</span>
            </div>
          </div>
          <div className=" mt-5">
            <div className=" w-full flex justify-between">
              <p className=" text-sm text-gray-400">Total Profit</p>
              <p className=" text-sm text-gray-200">2,332.18 USD</p>
            </div>
            <div className=" w-full flex justify-between mt-1">
              <p className=" text-sm text-gray-400">Total Loss</p>
              <p className=" text-sm text-gray-200">332.18 USD</p>
            </div>
            <div className=" w-full flex justify-between mt-1">
              <p className=" text-sm text-gray-400">Net Profit/Loss</p>
              <p className=" text-sm text-gray-200">2,332.18 USD</p>
            </div>
          </div>
          <div className=" w-full flex gap-5 mt-5">
            <span
              className={` font-semibold cursor-pointer ${
                detailsType === "overview"
                  ? "text-gray-100 border-b-2 border-yellow-400"
                  : " text-gray-400"
              }`}
              onClick={() => setDetailsType("overview")}
            >
              Overview
            </span>
            <span
              className={` font-semibold cursor-pointer ${
                detailsType === "details"
                  ? "text-gray-100 border-b-2 border-yellow-400"
                  : " text-gray-400"
              }`}
              onClick={() => setDetailsType("details")}
            >
              Detail
            </span>
            <span
              className={` font-semibold cursor-pointer ${
                detailsType === "funding"
                  ? "text-gray-100 border-b-2 border-yellow-400"
                  : " text-gray-400"
              }`}
              onClick={() => setDetailsType("funding")}
            >
              Funding & Transaction
            </span>
          </div>
          <div className=" mt-5">
            <p className=" text-gray-100 font-medium">Daily PNL</p>
            <p className=" mt-1 text-xs text-gray-400">2014-01-02</p>
            <p className=" text-green-600 font-semibold">+456.66 USD</p>
          </div>
          <div className=" w-full h-[400px] mt-5">
            <ChartComponent />
          </div>
        </div>
        {/* days of details */}
      </div>
    </div>
  );
}
