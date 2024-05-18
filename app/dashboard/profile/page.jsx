"use client"
import Button from '@/app/ui/button/Button'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className='flex flex-1 overflow-auto h-full'>
      <div className='flex flex-col p-3 bg-slate-50 w-full h-full overflow-auto'>
        <div className='flex justify-center'>
          <h2 className="text-6xl font-bold orelegaOne text-green-800 justify-center">Profile</h2>
        </div>
        <div className='mt-8 ml-5'>
          <div className='flex flex-row'>
            <div className='flex flex-row h-52 w-full bg-blue-200 rounded-md px-4 py-3 mr-5 drop-shadow-xl'>
              <div className='w-1/2'>
                <div className='flex justify-between mb-3'>
                  <p className='text-xl font-semibold'>Name:</p>
                  <input type="text" value="Andrei Rivera" className='mr-5 text-center'></input>
                </div>
                <div className='flex justify-between mb-3'>
                  <p className='text-xl font-semibold'>Type:</p>
                  <input type="text" value="Internal Medicine" className='mr-5 text-center'></input>
                </div>
                <div className='flex justify-between mb-3'>
                  <p className='text-xl font-semibold'>Specialization:</p>
                  <input type="text" value="Cardiology" className='mr-5 text-center'></input>
                </div>
                <div className='flex justify-between mb-3'>
                  <p className='text-xl font-semibold'>License Number:</p>
                  <input type="text" value="136475357" className='mr-5 text-center'></input>
                </div>
              </div>
              <div className='flex flex-col w-1/2'>
                <div className='flex justify-between mb-3'>
                  <p className='text-xl font-semibold'>Email Address:</p>
                  <input type="text" value="amrivera3@up.edu.ph" className='mr-5 text-center'></input>
                </div>
                <div className='flex justify-between mb-3'>
                  <p className='text-xl font-semibold'>Phone Number:</p>
                  <input type="text" value="09565210653" className='mr-5 text-center'></input>
                </div>
                <div className='flex justify-end mr-5 mt-14'>
                  <Button
                    title="Save"
                    type="outlined"
                    color="green"
                    handleClick={ () => console.log("SAVE") }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row mt-10'>
            <div className='flex flex-row h-32 w-full bg-blue-200 rounded-md px-4 py-3 mr-5 drop-shadow-xl'>
              <div className='w-1/2'>
                <div className='flex justify-between mb-3'>
                  <p className='text-xl font-semibold'>Password:</p>
                  <input type="password" value="Andrei Rivera" className='mr-5 text-center'></input>
                </div>
              </div>
              <div className='flex flex-col w-1/2'>
                <div className='flex justify-between mb-3'>
                  <p className='text-xl font-semibold'>Confirm Password:</p>
                  <input type="password" value="Internal Medicine" className='mr-5 text-center'></input>
                </div>
                <div className='flex justify-end mr-5 mt-6'>
                  <Button
                    title="Save"
                    type="outlined"
                    color="green"
                    handleClick={ () => console.log("SAVE") }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage