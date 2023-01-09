import { useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import criptoInfo1 from "../Photos/criptoInfo (1).png"
import criptoInfo2 from "../Photos/criptoInfo (2).png"
import clientPhoto from "../Photos/client.jpg"
import { Host } from "../Data";
import axios from "axios";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentFocusedField, setCurrentFocusedField] = useState("")

    const toggleFocusedField = (option) => {
        setCurrentFocusedField(option)
    }

    const navigation = useNavigate()

    const LoginFunc = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            return alert('Please fill all the fields');
        } else {
            try {
                const loginData = {
                    email,
                    password
                }
                const res = await axios.post(`${Host}/api/investors/login`, loginData)
                localStorage.setItem("user", JSON.stringify(res.data.token))
                navigation("/")
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div className='h-screen w-full'>
            <div className=' w-full h-full grid grid-cols-2 '>
                <div className=" w-full h-full bg-[#6C5DD3] px-20 py-20">
                    <div className="relative">
                        <div>
                            <div className=" absolute top-0 -left-2 h-7 w-7 border-[3px] border-r-transparent border-white rounded-full -rotate-5">
                            </div>
                            <p className=" text-white font-semibold text-lg">Coinbit</p>
                        </div>
                    </div>
                    <div className=" mt-24 relative">
                        <div className="w-[500px] rounded-lg relative">
                            <img src={criptoInfo1} alt="" className=" w-full rounded-lg" />
                            <div className=" w-14 h-14 rounded-full overflow-hidden absolute -top-5 -right-3 border-2 border-white">
                                <img src={clientPhoto} alt="" className=" w-full" />
                            </div>
                            <div className=" w-[300px] rounded-lg overflow-hidden absolute -bottom-24 -right-10">
                                <img src={criptoInfo2} alt="" className=" w-full" />
                            </div>
                        </div>
                    </div>
                    <div className=" mt-32">
                        <p className=" text-white text-sm ">Trusted thousands of finance teams and employees.</p>
                    </div>
                </div>
                <div className=" w-full h-full flex justify-center items-center bg-white">
                    <div className="w-[400px]">
                        <p className=" font-bold text-2xl">Login</p>
                        <p className=" text-gray-500 text-sm mt-1 font-medium">{"Don't have an account?"} <Link to="/register" className="text-[#6C5DD3] font-semibold">Create here.</Link> </p>
                        <div className=" cursor-pointer border rounded py-2 flex justify-center items-center mt-5">
                            <div className=" flex gap-1 items-center">
                                <FcGoogle className=' text-blue-500 mr-2' />
                                <p className=" text-sm font-semibold">Login with Google</p>
                            </div>
                        </div>
                        <div className=" my-8">
                            <div className=" flex justify-between items-center ">
                                <span className=" border-b inline-block w-[110px] "></span>
                                <span className=" text-sm text-gray-500">or Login with Email</span>
                                <span className=" border-b inline-block w-[110px] "></span>
                            </div>
                        </div>
                        <div className=" w-full">

                            <div className={` px-2 pb-1 border rounded relative ${currentFocusedField === "email" ? " border-[#6C5DD3]" : " border-gray-300"} mt-7 `}>
                                <label className={` px-1 absolute -top-[14px] left-5 bg-white  text-sm ${currentFocusedField === "email" ? "text-[#6C5DD3]" : "text-gray-500"} font-semibold`}>Email</label>
                                <input onFocus={() => { toggleFocusedField("email") }} onBlur={() => { toggleFocusedField("") }} value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="border-none w-full focus:outline-none pt-2" />
                            </div>
                            <div className={` px-2 pb-1 border rounded relative ${currentFocusedField === "password" ? " border-[#6C5DD3]" : " border-gray-300"} mt-7 `}>
                                <label className={` px-1 absolute -top-[14px] left-5 bg-white  text-sm ${currentFocusedField === "password" ? "text-[#6C5DD3]" : "text-gray-500"} font-semibold`}>Password</label>
                                <input onFocus={() => { toggleFocusedField("password") }} onBlur={() => { toggleFocusedField("") }} value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="border-none w-full focus:outline-none pt-2" />
                            </div>
                            <div className='mt-5'>
                                <div className=' flex font-medium'>
                                    <input type="checkbox" id="checkbox" className=' mr-1 checked:border-[#6C5DD3]' />
                                    <label htmlFor="checkbox" className=' text-sm  cursor-pointer'>I agree to the</label>
                                    <p className=' text-sm text-[#6C5DD3] ml-2 cursor-pointer'>Terms & Conditions</p>
                                </div>
                            </div>
                            <div className=" mt-5">
                                <button onClick={LoginFunc} className=" bg-[#6C5DD3] w-full py-2 text-white font-semibold rounded-md">Login</button>
                            </div>
                            <div className=" mt-5">
                                <p className=" text-sm text-gray-500">No card required. No need to install software.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login