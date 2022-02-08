import React from 'react'
import Image from 'next/image'
import BannerImage from '../images/airbnb banner.jpg'

function Banner() {
    return (
        [
        <div className="z-[0] relative h-[400px] bg-black flex justify-center">
        <Image src={BannerImage} layout='fill' objectFit='cover'></Image>
        <div className="relative top-1/2 text-center h-[fit-content] ">
            <p className='text-[1.7rem] font-semibold'>Not sure where to go? Perfect.</p>
            <button  className='active:scale-90 transition duration-150 cursor-pointer w-[15vw] px-6 py-4 rounded-[30px] font-semibold my-4 text-purple-500 text-bold bg-white shadow-lg mobile:w-[35vw]'>I'm flexible</button>
        </div>
        </div>
        ]
    )
}

export default Banner
