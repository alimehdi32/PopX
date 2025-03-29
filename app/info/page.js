
'use client'
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';


const page = () => {
  return (
    <div className='ml-[650px] mt-7 h-[650px] w-[300px] pt-6 border-2 border-gray-300 pl-0'>
      <h1 className='text-xl text-gray-500 ml-6'>Account Settings</h1>
      <div className='h-[575px] w-[298px] bg-gray-50 border-b-2 border-gray-300 ml-0 mt-5'>
        <div className='h-[50px] w-[298px] bg-gray-50 flex p-3 justify-center pr-20'>
          <div className='relative'>
            <div className='h-14 w-14 rounded-full object-cover'><Image src='/dp.png' alt="User profile picture" width={300} // Specify the width
              height={300} // Specify the height 
              className='rounded-full object-cover'
            >
            </Image>
            </div>
            <button className='h-5 w-5 rounded-full bg-purple-800 absolute top-9 left-11'><FontAwesomeIcon icon={faCamera} className='object-contain text-white size-3 mb-0.5 ml-0.5'/></button>
          </div>
          <div className='ml-4 mt-0'>
            <h1 className='text-xs font-bold'>Marry Doe</h1>
            <h2 className='text-xs text-gray-500 font-medium'>Marry@Gmail.Com</h2>
          </div>
        </div>
        <div className='h-[50px] w-[298px] bg-gray-50 flex p-3 mt-6 justify-center text-xs text-gray-600 font-medium ' >
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </div>
          <div className='border-b-2 border-dashed border-gray-200 h-0.5 w-[298px] mt-11'></div>
          <div className='border-b-2 border-dashed border-gray-200 h-0.5 w-[298px] mt-[350px]'></div>
      </div>
    </div >
  )
}

export default page
