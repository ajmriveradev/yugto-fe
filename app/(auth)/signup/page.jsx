"use client"
import { Button } from '@headlessui/react';
import React from 'react'

const SignUpPage = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center bg-zinc-50 overflow-auto">
      <div className="flex flex-row justify-center mt-24 mb-10">
        <h3 className="text-6xl font-bold mt-5 orelegaOne text-emerald-900">Sign Up</h3>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className='flex flex-col justify-center w-64'>
          <label className='text-lg self-center font-semibold'>First Name</label>
          <input type="text" className='h-10 w-64 rounded-lg bg-slate-200 my-1 border-2 border-zinc-400 opacity-70 text-center' placeholder='Juan'/>
        </div>
        <div className='flex flex-col justify-center w-64 my-1'>
          <label className='text-lg self-center font-semibold'>Last Name</label>
          <input type="text" className='h-10 w-64 rounded-lg bg-slate-200 border-2 border-zinc-400 my-1 opacity-70 text-center' placeholder='Dela Cruz'/>
        </div>
        <div className='flex flex-col justify-center w-64 my-1'>
          <label className='text-lg self-center font-semibold'>Type</label>
          <select className='h-10 w-64 rounded-lg bg-slate-200 border-2 border-zinc-400 my-1 opacity-70 text-center'>
            <option>Dietitian</option>
            <option>Doctor</option>
          </select>
        </div>
        <div className='flex flex-col justify-center w-64 my-1'>
          <label className='text-lg self-center font-semibold'>Specialization</label>
          <input type="text" className='h-10 w-64 rounded-lg bg-slate-200 border-2 border-zinc-400 my-1 opacity-70 text-center' placeholder='Clinical Nutrition'/>
        </div>
        <div className='flex flex-col justify-center w-64 my-1'>
          <label className='text-lg self-center font-semibold'>License Number</label>
          <input type="text" className='h-10 w-64 rounded-lg bg-slate-200 border-2 border-zinc-400 my-1 opacity-70 text-center' placeholder='1353163456'/>
        </div>
        <div className='flex flex-col justify-center w-64 my-1'>
          <label className='text-lg self-center font-semibold'>Email Address</label>
          <input type="text" className='h-10 w-64 rounded-lg bg-slate-200 my-1 border-2 border-zinc-400 opacity-70 text-center' placeholder='jdelacruz@email.com'/>
        </div>
        <div className='flex flex-col justify-center w-64 my-1'>
          <label className='text-lg self-center font-semibold'>Phone</label>
          <input type="text" className='h-10 w-64 rounded-lg bg-slate-200 border-2 border-zinc-400 my-1 opacity-70 text-center' placeholder='09123456789'/>
        </div>
        <div className='flex flex-col justify-center w-64 my-1'>
          <label className='text-lg self-center font-semibold'>Birthdate</label>
          <input type="date" className='h-10 w-64 rounded-lg bg-slate-200 my-1 border-2 border-zinc-400 opacity-70 text-center' placeholder='01/01/1985'/>
        </div>
        <div className='flex flex-col justify-center w-64 my-1'>
          <label className='text-lg self-center font-semibold'>Password</label>
          <input type="password" className='h-10 w-64 rounded-lg bg-slate-200 border-2 border-zinc-400 my-1 opacity-70 text-center' placeholder='Password'/>
        </div>
        <div className='flex flex-col justify-center w-64 my-1'>
          <label className='text-lg self-center font-semibold'>Confirm Password</label>
          <input type="password" className='h-10 w-64 rounded-lg bg-slate-200 border-2 border-zinc-400 my-1 opacity-70 text-center' placeholder='Password'/>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center my-4">
        <Button
          className="
            text-xl font-large w-32 h-10 rounded-2xl drop-shadow-xl text-slate-50 mx-3 bg-sky-800 
            hover:bg-sky-300 
            focus:ring-4 focus:ring-sky-300 
            dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800
          "
          onClick={ () => { 
            console.log("CLICKED SIGN UP");
          }}>
            Sign Up
        </Button>
      </div>
    </div>
  )
}

export default SignUpPage