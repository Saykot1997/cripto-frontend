import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import criptoInfo1 from "../Photos/criptoInfo (1).png"
import criptoInfo2 from "../Photos/criptoInfo (2).png"
import clientPhoto from "../Photos/client.jpg"
import axios from "axios";
import { Host } from "../Data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');
    const [lastName, setLastName] = useState('');
    const [currentFocusedField, setCurrentFocusedField] = useState("")

    const toggleFocusedField = (option) => {
        setCurrentFocusedField(option)
    }

    const navigation = useNavigate()

    const register = async (e) => {
        e.preventDefault();

        if (!email || !password || !firstName || !lastName || !phone) {
            return toast.error('Please fill all the fields');
        } else {
            try {
                const registerData = {
                    firstName,
                    lastName,
                    email,
                    password,
                    phone
                }
                const res = await axios.post(`${Host}/api/investors/register`, registerData)
                navigation("/login")
                console.log(res)
            } catch (error) {
                toast.error(error.response.data.error)
                console.log(error)
            }
        }
    }

    return (
        <div className='h-screen w-full'>
            <div className=' w-full h-full grid xl:grid-cols-2 grid-cols-1 '>
                <div className=" w-full h-full bg-[#6C5DD3] px-20 py-20 xl:block hidden">
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
                <div className=" w-full h-full flex justify-center items-center bg-white px-5">
                    <div className=" w-full max-w-[400px]">
                        <p className=" font-bold text-2xl text-center">Register</p>
                        <div className=" w-full mt-10">
                            <div className={` px-2 pb-1 border rounded relative ${currentFocusedField === "firstName" ? " border-[#6C5DD3]" : " border-gray-300"} `}>
                                <label className={` px-1 absolute -top-[14px] left-5 bg-white  text-sm ${currentFocusedField === "firstName" ? "text-[#6C5DD3]" : "text-gray-500"} font-semibold`}>First Name</label>
                                <input onFocus={() => { toggleFocusedField("firstName") }} onBlur={() => { toggleFocusedField("") }} value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="border-none w-full focus:outline-none pt-2" />
                            </div>
                            <div className={` px-2 pb-1 border rounded relative ${currentFocusedField === "lastName" ? " border-[#6C5DD3]" : " border-gray-300"} mt-7 `}>
                                <label className={` px-1 absolute -top-[14px] left-5 bg-white  text-sm ${currentFocusedField === "lastName" ? "text-[#6C5DD3]" : "text-gray-500"} font-semibold`}>Last Name</label>
                                <input onFocus={() => { toggleFocusedField("lastName") }} onBlur={() => { toggleFocusedField("") }} value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="border-none w-full focus:outline-none pt-2" />
                            </div>
                            <div className={` px-2 pb-1 border rounded relative ${currentFocusedField === "phone" ? " border-[#6C5DD3]" : " border-gray-300"} mt-7 `}>
                                <label className={` px-1 absolute -top-[14px] left-5 bg-white  text-sm ${currentFocusedField === "phone" ? "text-[#6C5DD3]" : "text-gray-500"} font-semibold`}>Phone Number</label>
                                <input onFocus={() => { toggleFocusedField("phone") }} onBlur={() => { toggleFocusedField("") }} value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className="border-none w-full focus:outline-none pt-2" />
                            </div>
                            <div className={` px-2 pb-1 border rounded relative ${currentFocusedField === "email" ? " border-[#6C5DD3]" : " border-gray-300"} mt-7 `}>
                                <label className={` px-1 absolute -top-[14px] left-5 bg-white  text-sm ${currentFocusedField === "email" ? "text-[#6C5DD3]" : "text-gray-500"} font-semibold`}>Email</label>
                                <input onFocus={() => { toggleFocusedField("email") }} value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => { toggleFocusedField("") }} type="email" className="border-none w-full focus:outline-none pt-2" />
                            </div>
                            <div className={` px-2 pb-1 border rounded relative ${currentFocusedField === "password" ? " border-[#6C5DD3]" : " border-gray-300"} mt-7 `}>
                                <label className={` px-1 absolute -top-[14px] left-5 bg-white  text-sm ${currentFocusedField === "password" ? "text-[#6C5DD3]" : "text-gray-500"} font-semibold`}>Password</label>
                                <input onFocus={() => { toggleFocusedField("password") }} onBlur={() => { toggleFocusedField("") }} value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="border-none w-full focus:outline-none pt-2" />
                            </div>

                            <div className=" mt-5">
                                <button onClick={register} className=" bg-[#6C5DD3] w-full py-2 text-white font-semibold rounded-md">Register</button>
                            </div>
                            <div className=" mt-5">
                                <p className=" text-gray-500 text-sm mt-1 font-medium  text-center">Already have an account? <Link to="/login" className="text-[#6C5DD3] font-semibold">Login here.</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                className="w-72"
            />
        </div>
    )
}

export default Register