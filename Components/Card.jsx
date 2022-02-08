import React from 'react'
import Image from 'next/image'

function Card({img,location,distance}) {
    return (
        <div className='relative flex flex-col  h-[55vh] cursor-pointer mx-[10px] w-[23vw] tabx:min-w-[250px] mobile:h-[50vh] mobilex:h-[45vh] '>
        {/*Uppersection*/}
            <div  className='relative w-[100%]  h-[50%]'>
            <Image className='rounded-t-[20px]' src={img} layout='fill' objectFit='cover'/>
            </div>
        {/*Lowersection*/}
        <div style = {{'borderRadius':'0px 0px 15px 15px'}} className='bg-red-400 h-[50%]'>
            <h1  className = 'text-white font-bold m-3 text-[1.3rem]'>{location}</h1>
            <p className= 'text-white font-semibold m-3 text-[1rem]'> {distance}</p>
        </div>

        </div>
    )
}

export default Card
