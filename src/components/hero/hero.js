import React from 'react'
import heroImg from "../../assets/hero.png"
import heroImg2 from "../../assets/hero2.png"

export default function Hero() {
    return (

        <div className='flex  md:h-[50vh] lg:h-[55vh] xl:h-[60vh] 2xl:h-[65vh] 3xl:h-[60vh]  h-[25vh] w-[90%]  mx-[5%] bg-pink-300 rounded-3xl flex justify-between overflow-hidden'>

            <img src={heroImg2} alt="hero-flower" className=' sm:w-[32%]  w-[38%]   object-contain  overflow-hidden self-end' />



            <div className=' md:w-[50%] xl:w-[40%]  w-[70%] absolute h-[100%] text-black md:text-3xl xl:text-4xl text-xl font-serif self-center  md:leading-10 xl:leading-[50px]  gap-8 tracking-3 md:left-[25%] xl:left-[30%] left-[15%] flex  flex-col  justify-center text-center items-center'>
                <p >Discounts upto 50% from Our club original goods </p>
                <button className=' md:text-lg xl:text-xl text-sm  font-medium  xl:py-2.5 py-2 md:px-5 xl:px-6 px-4 bg-black text-white  xl:rounded-lg rounded-md'>Shop now</button>
            </div>



            <img src={heroImg} alt="clothing image" className='  w-[40%] h-[100%]  object-contain overflow-hidden ' />


        </div>

    )
}
