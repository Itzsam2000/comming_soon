import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6"
export default function Footer() {
    return (
        <div className='w-100% lg:py-10 py-7 flex flex-col  bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-600 text-xl text-white font-thin tracking-[10px] justify-center items-center gap-5'>
            <div> STORE</div>
            <div className="flex w-[100%] justify-center items-center lg:text-2xl text-xl gap-10 ">
                <a href='#' target="_blank">  <FaFacebook /> </a>
                <a href='#' target="_blank">     <FaInstagram /></a>
                <a href='#' target="_blank">     <FaWhatsapp /></a>

            </div>
        </div>
    )
}
