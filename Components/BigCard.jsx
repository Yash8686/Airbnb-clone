import React from 'react'
import Image from 'next/image'

function BigCard({img,heading}) {
    return (
        <div className='m-[10px] relative h-[80vh] w-1/2 mobile:w-[100%] '>
            <Image className='z-[-1] rounded-[15px] brightness-[70%]' objectFit='cover' src = {img}  layout='fill'/>
            <div className='z-[100] m-[40px] relative mobilex:m-[20px]'>
                <h2 className='text-[2.5rem] font-semibold text-white mobilex:text-[2rem]'>{heading}</h2>
                <button className='hover:brightness-[70%] my-[20px] p-[10px] bg-white rounded-md outline-none cursor-pointer border-none font-semibold '>Experiences</button>
            </div>
        </div>
    )
}

export default BigCard
