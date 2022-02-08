import React from 'react';
import Image from 'next/image';

function BodyBanner() {
  return ( 
    <div className=' relative w-[100%] h-[70vh] m- '>
        <Image className='z-[-1] brightness-[60%]' layout='fill' objectFit='cover' src={'https://images.pexels.com/photos/1438084/pexels-photo-1438084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}/>
        <div className='ml-[40px] top-[5vh] relative w-1/4 flex flex-col justify-between h-[60vh]'>
            <h1 className='text-[3rem] font-semibold text-white mobilex:text-[2rem]'>Questions about hosting?</h1>
            <button className='w-[50%] hover:brightness-[60%] my-[20px] p-[10px] bg-white rounded-md outline-none cursor-pointer border-none font-semibold'>Ask a superhost</button>
        </div>
  
    </div>
);
}

export default BodyBanner;
