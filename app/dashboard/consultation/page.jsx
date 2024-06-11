"use client"
import SearchBar from '@/app/ui/dashboard/search-bar/SearchBar';
import React, { useState } from 'react'

const Consultation = () => {
  const [consultations, setConsultations] = useState([
    {
      "name": "Andrei Rivera",
      "age": 25,
      "lastSeen": "2024-02-21",
      "knownConditions": ["ADHD", "Obese"]
    },
    {
      "name": "April Gonzales",
      "age": 29,
      "lastSeen": "2024-02-21",
      "knownConditions": [],
    }
  ]);

  const ConsultationItem = ({ name, age, lastSeen, knownConditions }) => (
    <div className='bg-blue-300 rounded-lg p-3 my-3'>
      <h3 className='text-2xl font-bold'>{name}</h3>
      <p>Age: {age}</p>
      <p>Last Seen: {lastSeen}</p>
      <p className='text-lg font-semibold mt-3'>Known Conditions:</p>
      {
        knownConditions?.length > 0 ?
        <ul>
          {
            knownConditions.map( (knownCondition, index) => {
              return <li key={index}>{knownCondition}</li>
            })
          }
        </ul>
        :
        <p>None</p>
      }
    </div>
  )

  return (
    <div className='flex flex-1 overflow-auto h-full'>
      <div className='flex flex-col p-3 bg-slate-50 w-full h-full overflow-auto'>
        <div className='flex justify-center '>
          <h2 className="text-6xl font-bold orelegaOne text-sky-700 justify-center">Patients</h2>
        </div>
        <div className='mx-5 mt-5'>
          <SearchBar />
        </div>
        <div className='mt-5 ml-5'>
          <div className='flex w-full my-3'>
            <div className='flex justify-start'>
              <p className="text-4xl font-bold">Recent Patients</p>
            </div>
            <div className='flex items-end orelegaOne text-blue-900'>
              <h1 className="text-xl ml-3">See All</h1>
            </div>
          </div>
          <div className='flex flex-row mx-24 my-8'>
            <div className='h-64 w-1/2 bg-blue-200 rounded-md px-4 py-3 mx-3 drop-shadow-xl'>
              <p className='text-2xl font-bold'>Andrei Rivera</p>
              <p className='text-xl font-semibold'>Age: 25 y/o</p>
              <p className='text-xl font-semibold'>Last Seen: 2024-03-21 09:55 AM</p>
              <p className='text-xl font-semibold'>Known Conditions:</p>
              <ul className='list-disc'>
                <li className='ml-6'>ADHD</li>
                <li className='ml-6'>ADHD</li>
                <li className='ml-6'>ADHD</li>
              </ul>
            </div>
            <div className='h-64 w-1/2 bg-blue-200 rounded-md px-4 py-3 mx-3 drop-shadow-xl'>
              <p className='text-2xl font-bold'>Andrei Rivera</p>
              <p className='text-xl font-semibold'>Age: 25 y/o</p>
              <p className='text-xl font-semibold'>Last Seen: 2024-03-21 09:55 AM</p>
              <p className='text-xl font-semibold'>Known Conditions:</p>
              <ul className='list-disc'>
                <li className='ml-6'>ADHD</li>
                <li className='ml-6'>ADHD</li>
                <li className='ml-6'>ADHD</li>
              </ul>
            </div>
          </div>
          <div className='flex flex-row mx-24'>
            <div className='h-64 w-1/2 bg-blue-200 rounded-md px-4 py-3 mx-3 drop-shadow-xl'>
              <p className='text-2xl font-bold'>Andrei Rivera</p>
              <p className='text-xl font-semibold'>Age: 25 y/o</p>
              <p className='text-xl font-semibold'>Last Seen: 2024-03-21 09:55 AM</p>
              <p className='text-xl font-semibold'>Known Conditions:</p>
              <ul className='list-disc'>
                <li className='ml-6'>ADHD</li>
                <li className='ml-6'>ADHD</li>
                <li className='ml-6'>ADHD</li>
              </ul>
            </div>
            <div className='h-64 w-1/2 bg-blue-200 rounded-md px-4 py-3 mx-3 drop-shadow-xl'>
              <p className='text-2xl font-bold'>Andrei Rivera</p>
              <p className='text-xl font-semibold'>Age: 25 y/o</p>
              <p className='text-xl font-semibold'>Last Seen: 2024-03-21 09:55 AM</p>
              <p className='text-xl font-semibold'>Known Conditions:</p>
              <ul className='list-disc'>
                <li className='ml-6'>ADHD</li>
                <li className='ml-6'>ADHD</li>
                <li className='ml-6'>ADHD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consultation