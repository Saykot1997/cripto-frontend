import React, { useState } from "react";
import searchIcon from "../../Photos/search.png";
import notificationIcons from "../../Photos/notification.png";
import clientIcon from "../../Photos/user.png";
import downarrowIcon from "../../Photos/arrow-down.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigation = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  document.addEventListener("mouseup", function (e) {
    if (isDropdownOpen) {
      let container = document.getElementById("container");
      if (!container.contains(e.target)) {
        container.style.display = "none";
      }
    }
  });

  const LogoutFunc = () => {
    localStorage.removeItem("user");
    navigation("/login");
  };
  return (
    <div className=" w-full pl-[60px] md:pl-[250px] fixed top-0 left-0 z-10">
      <div className=" w-full px-2 md:px-10 py-1 flex justify-end bg-white items-center">
        <div className="">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className=" w-10 h-10 flex items-center justify-center p-1 rounded-full ">
              <img
                src={clientIcon}
                alt="client"
                className=" w-full rounded-full"
              />
            </div>
            <img src={downarrowIcon} alt="" className=" w-3" />
            {isDropdownOpen ? (
              <div
                id="container"
                className=" p-3 bg-white absolute top-16 right-2 shadow shadow-gray-200 rounded cursor-pointer"
              >
                <span
                  onClick={LogoutFunc}
                  className=" flex items-center px-5 py-1 hover:bg-black hover:bg-opacity-10 rounded"
                >
                  <p className=" text-red-400">Logout</p>
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
