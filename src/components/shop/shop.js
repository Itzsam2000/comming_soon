
import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Shop() {
    const [Data, setData] = useState([]);

    const fetchData = async () => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {

                setData(response.data);

            })
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (

        <div className='flex flex-col lg:py-16 py-10 w-[100%] justify-center items-center'>
            <h2 className='w-[90%] md:mb-5 mb-2 text-gray-800 md:text-2xl xl:text-3xl  2xl:text-4xl text-xl font-bold'>New Arrivals</h2>
            <div className=' overflow-hidden grid gap-3   md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6  grid-cols-2 w-[90%] h-auto mx-[5%] py-6 '>


                {Data.map((products) => {
                    return (


                        <div className='bg-white flex flex-col w-[100%] h-auto  shadow-md px-4 py-4 rounded-md hover:-translate-y-2 duration-500' >


                            <img src={products.image} alt="grey color  polo t-shirt" loading='lazy' className='w-[100%] sm:h-[22vh] md:h-[28vh] lg:h-[30vh] xl:h-[32vh] h-[16vh] object-contain overflow-hidden ' />
                            <div className='font-serif sm:text-lg xl:text-xl  text-sm font-medium capitize mt-2 border-b-[1px] pb-2'>{products.title}</div>
                            <div className='font-medium  sm:text-lg xl:text-xl text-md py-2 text-gray-700 '>{products.price}$</div>

                            <div className=' sm:text-[0.75rem] xl:text-[0.85rem] text-[0.7rem]  sm:h-[6vh]  h-[5vh] font-sans  overflow-hidden pb-2 text-gray-400 text-ellipsis'>{products.description}</div>
                            <div className=' text-gray-400 '>...</div>



                        </div>
                    )
                })}





            </div >

        </div>
    )
}
