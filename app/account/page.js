import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='ml-[650px] mt-7 h-[650px] w-[300px] pt-12 border-2 border-gray-300 pl-6'>
      <h1 className='text-2xl font-bold'>Create your</h1>
      <h1 className='text-2xl font-bold'>PopX account</h1>
      <form className='absolute gap-2 flex flex-col mt-4'>
        <div className='mt-4'>
          <label htmlFor="name" className='text-sm font-medium absolute top-1.5 left-2 bg-white px-1 text-purple-500'>Full Name <span className="text-red-500">*</span>
          </label>
          <input type="text" id='name' placeholder='Marry Doe' className='w-64 p-2 border-2 border-gray-300 rounded-md placeholder-black' />
        </div>
        <div className='mt-4'>
          <label htmlFor="email" className='text-sm font-medium absolute top-[72px] left-2 bg-white px-1 text-purple-500'>Phone Number <span className="text-red-500">*</span></label>
          <input type="email" id='email' placeholder='Marry Doe' className='w-64 p-2 border-2 border-gray-300 rounded-md placeholder-black' />
        </div>
        <div className='mt-4'>
          <label htmlFor="password" className='text-sm font-medium absolute top-[140px] left-2 bg-white px-1 text-purple-500'>Email address <span className="text-red-500">*</span></label>
          <input type="password" id='password' placeholder='Marry Doe' className='w-64 p-2 border-2 border-gray-300 rounded-md placeholder-black' />
        </div>
        <div className='mt-4'>
          <label htmlFor="confirmPassword" className='text-sm font-medium absolute top-[208px] left-2 bg-white px-1 text-purple-500'>Password <span className="text-red-500">*</span></label>
          <input type="password" id='confirmPassword' placeholder='Marry Doe' className='w-64 p-2 border-2 border-gray-300 rounded-md placeholder-black' />
        </div>
        <div className='mt-4'>
          <label htmlFor="companyname" className='text-sm font-medium absolute top-[275px] left-2 bg-white px-1 text-purple-500'>Company Name <span className="text-red-500">*</span></label>
          <input type="text" id='companyname' placeholder='Marry Doe' className='w-64 p-2 border-2 border-gray-300 rounded-md placeholder-black  ' />
        </div>
        <label className="block text-sm font-medium text-gray-700">
          Are you an Agency? <span className="text-red-500">*</span>
        </label>
        <div className="mt-1 flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="agreement"
              value="yes"
              className="h-4 w-4 text-purple-700 focus:ring-purple-700"
              required
            />
            <span className="text-sm text-gray-700">Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="agreement"
              value="no"
              className="h-4 w-4 text-purple-700 focus:ring-purple-700"
              required
            />
            <span className="text-sm text-gray-700">No</span>
          </label>
        </div>
      </form>
      <div className='absolute mt-[480px]'>
        <button className='bg-purple-500 text-white w-64 h-10 rounded-md'><Link href='/info'>Create Account</Link></button>
      </div>
    </div>
  )
}

export default page
