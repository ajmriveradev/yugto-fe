'use client'

import React, { useState } from 'react'

const Dashboard = () => {
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
    <div className='flex-1 bg-teal-50'>
      <div className='px-3 pt-3'>
        <h2 className="text-3xl font-bold text-">Appointments</h2>
        {
          !!consultations &&
          consultations.map( (consultation, index) => (
              <div key={index}>
                <ConsultationItem 
                  name={consultation.name}
                  age={consultation.age}
                  lastSeen={consultation.lastSeen}
                  knownConditions={consultation.knownConditions}
                />
              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default Dashboard