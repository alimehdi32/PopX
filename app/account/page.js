import React from 'react'

const page = () => {
  return (
    <div className='ml-[650px] mt-7 h-[650px] w-[300px] pt-12 border-2 border-gray-300 pl-6'>
      <h1 className='text-2xl font-bold'>Create your</h1>
      <h1 className='text-2xl font-bold'>PopX account</h1>
      <form className='absolute'>
        <div className='mt-4'>
            <label htmlFor="name" className='text-sm font-medium absolute top-1.5 left-2 bg-white px-1'>Full Name</label>
            <input type="text" id='name' placeholder='Marry Doe' className='w-64 p-2 border-2 border-gray-300 rounded-md' />
        </div>
        <div className='mt-4'>
            <label htmlFor="email" className='text-sm font-medium absolute top-16 left-2 bg-white px-1'>Phone Number</label>
            <input type="email" id='email' placeholder='Marry Doe' className='w-full p-2 border-2 border-gray-300 rounded-md' />
        </div>
        <div className='mt-4'>
            <label htmlFor="password" className='text-sm font-medium absolute top-[124px] left-2 bg-white px-1'>Email address</label>
            <input type="password" id='password' placeholder='Marry Doe' className='w-full p-2 border-2 border-gray-300 rounded-md' />
        </div>
        <div className='mt-4'>
            <label htmlFor="confirmPassword" className='text-sm font-medium absolute top-[184px] left-2 bg-white px-1'>Password</label>
            <input type="password" id='confirmPassword' placeholder='Marry Doe' className='w-full p-2 border-2 border-gray-300 rounded-md' />
        </div>
        <div className='mt-4'>
        <label htmlFor="companyname" className='text-sm font-medium absolute top-[244px] left-2 bg-white px-1'>Company Name</label>
        <input type="text" id='companyname' placeholder='Marry Doe' className='w-full p-2 border-2 border-gray-300 rounded-md' />
        </div>
      </form>
    </div>
  )
}

export default page
