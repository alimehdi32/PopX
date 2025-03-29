'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

const Page = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
    <div className='ml-[650px] mt-7 h-[650px] w-[300px] pt-6 border-2 border-gray-300 pl-0'>
      <h1 className='text-xl text-black font-bold ml-6'>Signin to your</h1>
      <h1 className='text-xl text-black font-bold ml-6'>PopX Account</h1>
      <div className='ml-6 text-gray-500 mt-5'>lorem15 ipsum dolor sit amet consectetur adipisicing elit.</div>
      <div className='h-[575px] w-[298px] '>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center p-3 relative'>
      <label htmlFor="name" className='text-sm font-medium absolute top-6 left-6 bg-white px-1 text-purple-500'>Email address</label>
        <input type="email" {...register("email", { required: true })} placeholder="Enter email address" className='h-[45px] w-[270px] mt-6 pl-3 rounded-md border-2 border-gray-300 outline-none focus:outline-none focus:border-gray-300' />
        {errors.email && <span className='text-red-500'>This field is required</span>}
        <label htmlFor="name" className='text-sm font-medium absolute top-[93px] left-6 bg-white px-1 text-purple-500'>Password</label>
        <input type="password" {...register("password", { required: true })} placeholder="Enter password" className='h-[45px] w-[270px] mt-6 pl-3 rounded-md border-2 border-gray-300 outline-none focus:outline-none focus:border-gray-300' />
        {errors.password && <span className='text-red-500'>This field is required</span>}
        <button type="submit" disabled={!isValid} className={`p-2 w-full rounded-md mt-4 ${
          isValid ? 'bg-purple-500 text-white font-medium' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
>Login</button>
      </form>
    </div>
    </div>
    

    )
}

export default Page
