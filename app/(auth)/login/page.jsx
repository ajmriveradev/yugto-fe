"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const LogInPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col h-full w-full justify-center bg-zinc-50">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-row justify-center mb-5">
          <h3 className="text-6xl font-bold mt-5 orelegaOne text-sky-900 drop-shadow-lg">Log In</h3>
        </div>
        <div className='flex flex-col justify-center w-64 my-2'>
          <label className='text-lg self-center font-semibold'>Email</label>
          <input type="text" className='h-10 w-64 rounded-lg bg-slate-200 my-2 border-2 border-zinc-400 opacity-70 text-center drop-shadow-lg' placeholder='Email'/>
        </div>
        <div className='flex flex-col justify-center w-64 my-2'>
          <label className='text-lg self-center font-semibold'>Password</label>
          <input type="password" className='h-10 w-64 rounded-lg bg-slate-200 border-2 border-zinc-400 my-2 opacity-70 text-center drop-shadow-lg' placeholder='Password'/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button 
          className="text-xl font-large w-32 h-10 rounded-2xl drop-shadow-2xl text-slate-50 mx-3 bg-sky-800 
          hover:bg-sky-600 
          focus:ring-4 focus:ring-sky-300 
          dark:bg-sky-900 dark:hover:bg-sky-900 dark:focus:ring-sky-900"
          onClick={ () => { 
            console.log("CLICKED LOG IN");
            router.push("/dashboard");
          }}
        >
          Log in
        </button>
      </div>
    </div>
  )
}

export default LogInPage