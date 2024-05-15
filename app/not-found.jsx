"use client"
import React from 'react'
import Button from './ui/button/Button'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter();

  return (
    <div style={{ height: "100vh", width: "100vw" }} className='flex flex-col h-full w-full justify-center items-center'>
      <h2 className='text-6xl font-bold orelegaOne'>Not Found ~ 404</h2>
      <p className='text-4xl font-semibold orelegaOne'>Sorry, the page you are looking for does not exist.</p>
      <Button title="Return Home" color="green" handleClick={ () => router.push("/dashboard")} otherStyles="mt-5" />
    </div>
  )
}

export default NotFound