import React, { useState } from "react";
import { FaBarsStaggered, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6"
import { RxCross2 } from "react-icons/rx"

export default function Navbar() {
    const [navOpen, setnavOpen] = useState(false);
    const navCheck = () => {
        setnavOpen(!navOpen);
    }

    return (
        <div className="sm:pb-[12vh] lg:pb-[14vh] xl:pb-[16vh]  pb-[11vh]" >
            <div className="fixed  lg:px-32 w-[100%] sm:h-[10vh] lg:h-[11vh] xl:h-[12vh]  h-[8vh] px-6  items-center  justify-between flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md shadow-gray-400 z-10 top-0 ">
                <div className="text-3xl text-white font-semibold tracking-[1px] antialiased ">Store.</div>
                <ul className="  sm: hidden md:hidden lg:flex   w-[30%] ml-[45%] text-lg text-white font-semibold justify-around"  >
                    <li className="cursor-pointer">
                        Home
                    </li>

                    <li className="cursor-pointer">
                        About
                    </li>

                    <li className="cursor-pointer">
                        categories
                    </li>
                </ul>
                <button className=" sm: hidden md:hidden lg:flex lg:py-1.5 lg:px-9 py-1 px-7 rounded-full text-white font-medium font-sans bg-gradient-to-r from-indigo-500 to-blue-400 items-center justify-center">Login</button>
                <div onClick={navCheck} className="lg:hidden xl:hidden 2xl:hidden text-2xl  text-white">{navOpen ? <RxCross2 /> : <FaBarsStaggered />}</div>

            </div>





            <div style={{ left: navOpen ? '0%' : '-90%' }} className="h-[100vh] lg:hidden xl:hidden 2xl:hidden   ease-in-out duration-300 bg-gradient-to-br  from-indigo-500 via-purple-600 to-pink-800 w-[60vw] flex flex-col fixed py-[10%] z-10 sm:top-[10vh] top-[8vh]  ">


                <ul className="flex h-[65%] flex-col  text-xl gap-0  text-white -z-1"  >

                    <li className="border-b-[1px] py-5 px-6 w-[90%] self-center border-gray-400 cursor-pointer">
                        Home
                    </li>

                    <li className="border-b-[1px] py-5 px-6 w-[90%] self-center border-gray-400 cursor-pointer " >
                        About
                    </li>

                    <li className="border-b-[1px] py-5 px-6 w-[90%] self-center border-gray-400 cursor-pointer">
                        categories
                    </li>
                </ul>


                <button className="w-[80%]   self-center flex  py-2.5 px-7 rounded-full text-white font-medium font-sans bg-gradient-to-r from-indigo-500 to-blue-400 items-center justify-center">Login</button>

                <div className="flex w-[50%]  justify-center self-center mt-12  gap-7 items-end text-xl text-white">

                    <a href='#' target="_blank">  <FaFacebook /> </a>
                    <a href='#' target="_blank">     <FaInstagram /></a>
                    <a href='#' target="_blank">     <FaWhatsapp /></a>
                </div>

            </div >



        </div>

    );
}