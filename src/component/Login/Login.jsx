import React from 'react'
import Img from "../../assets/website/google.png"

const Login = () => {
  return (
    <div className=' px-10 py-10 bg-white/10 rounded-3xl shadow-xl'>
      <h1 className='text-5xl text-white font-semibold font-cursive '>Welcome Back</h1> 
      <p className='font-medium text-white text-lg text-gray-500 mt-4'>Welcome Back! Please Enter your Details</p>
      <div className='mt-8'>
        <div>
            <label className='text-lg text-white font-meduim ' htmlFor="">Email</label>
            <input className='w-full  rounded-xl p-4 mt-1 bg-white/10 text-white placeholder-custom-color' placeholder='Enter your Email' />
        </div>
        <div className='mt-4'>
            <label className='text-lg text-white font-meduim ' htmlFor="">Password</label>
            <input className='w-full rounded-xl p-4 mt-1 bg-white/10 text-white placeholder-custom-color' placeholder='Enter your Password'  type='password'/>
        </div>
        <div className='flex mt-8 justify-between'>
            <div>
                <input type="checkbox" name="" id="remember" /> <label htmlFor="remember" className='text-white ml-2 font-medium text-base'>Remember me!</label>
            </div>
            <button className='text-white font-medium text-base'>Forgot Password</button>
        </div>
        <div className='mt-8 flex flex-col gap-y-4'>
            <button className='bg-white text-primary hover:scale-[1.01] text-lg active:duration-75 active:scale-[.98] font-bold py-3 rounded-xl'>Sign in</button>
            <button className='flex items-center justify-center gap-2 hover:scale-[1.01] text-lg active:duration-75 active:scale-[.98] bg-white rounded-xl py-2 ml-8 mr-8 font-bold text-primary'> <img src={Img} alt="" className='w-7 h-7'/>Sign in with Google</button>
        </div>
      </div>
    </div>
  )
}

export default Login
