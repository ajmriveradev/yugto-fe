'use client'

import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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

  const recentPatients = [
    {
      "id": 1,
      "first_name": "Andrei",
      "last_name": "Rivera",
      "age": 25,
      "last_seen": "2024/01/24",
      "known_conditions": [
        {
          "id": 1,
          "name": "Asthma",
          "created_at": "2021/02/03",
          "created_by": 34  //medical professional id
        },
        {
          "id": 2,
          "name": "ADHD",
          "created_at": "2021/02/03",
          "created_by": 34  //medical professional id
        },
        {
          "id": 3,
          "name": "Peanut Allergy",
          "created_at": "2021/02/03",
          "created_by": 34  //medical professional id
        },
      ]
    },
    {
      "id": 2,
      "first_name": "April",
      "last_name": "Gonzales",
      "age": 29,
      "last_seen": "2024/01/24",
      "known_conditions": null
    },
    {
      "id": 3,
      "first_name": "Tofu",
      "last_name": "Alexander",
      "age": 12,
      "last_seen": "2024/01/24",
      "known_conditions": [
        {
          "id": 1,
          "name": "Obese",
          "created_at": "2021/02/03",
          "created_by": 34  //medical professional id
        },
        {
          "id": 2,
          "name": "Autistic",
          "created_at": "2021/02/03",
          "created_by": 34  //medical professional id
        },
      ]
    },
    {
      "id": 4,
      "first_name": "Tofu",
      "last_name": "Alexander",
      "age": 12,
      "last_seen": "2024/01/24",
      "known_conditions": [
        {
          "id": 1,
          "name": "Obese",
          "created_at": "2021/02/03",
          "created_by": 34  //medical professional id
        },
        {
          "id": 2,
          "name": "Autistic",
          "created_at": "2021/02/03",
          "created_by": 34  //medical professional id
        },
      ]
    },
    {
      "id": 5,
      "first_name": "Tofu",
      "last_name": "Alexander",
      "age": 12,
      "last_seen": "2024/01/24",
      "known_conditions": [
        {
          "id": 1,
          "name": "Obese",
          "created_at": "2021/02/03",
          "created_by": 34  //medical professional id
        },
        {
          "id": 2,
          "name": "Autistic",
          "created_at": "2021/02/03",
          "created_by": 34  //medical professional id
        },
      ]
    },
  ]

  const consultationsData = [
    {
      "id": 24,
      "first_name": "Andrei",
      "last_name": "Rivera",
      "appointment_date": "2024/05/23",
    },
    {
      "id": 37,
      "first_name": "Andrei",
      "last_name": "Rivera",
      "appointment_date": "2024/05/23",
    },
    {
      "id": 43,
      "first_name": "Andrei",
      "last_name": "Rivera",
      "appointment_date": "2024/05/23",
    },
    {
      "id": 189,
      "first_name": "Andrei",
      "last_name": "Rivera",
      "appointment_date": "2024/05/23",
    },
    {
      "id": 34,
      "first_name": "Andrei",
      "last_name": "Rivera",
      "appointment_date": "2024/05/23",
    },
    {
      "id": 16,
      "first_name": "Andrei",
      "last_name": "Rivera",
      "appointment_date": "2024/05/23",
    },
  ]

  return (
    <div className='flex flex-1 overflow-auto h-full'>
      <div className='flex flex-col p-3 bg-slate-50 w-full h-full overflow-auto'>
        <div className='flex justify-center '>
          <h2 className="text-6xl font-bold orelegaOne text-sky-700 justify-center">Home</h2>
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
          <div className='flex flex-row '>
            <div className='grid grid-cols-5 '>
              {
                recentPatients.map( (patient) => {
                  return(
                    <Card className="flex flex-col justify-between mr-3 w-80">
                      <CardHeader className="flex flex-row gap-4 items-center justify-between">
                        {/* avatar */}
                        <div>
                          <CardTitle className="font-bold">{patient.first_name} {patient.last_name}</CardTitle>
                          <CardDescription>Last Seen: {patient.last_seen}</CardDescription>
                        </div>
                        <Badge variant="secondary">{patient.id}</Badge>
                      </CardHeader>
                      <CardContent className="flex flex-col justify-start h-full">
                        <div className='flex flex-row'>
                          <p className='font-semibold mr-8'>Age:</p>
                          <p>{patient.age} years {patient.age} months</p>
                        </div>
                        <p className="font-semibold">{!!patient.known_conditions ? 'Known Conditions: ' : 'No Known Conditions'}</p>
                        {
                          !!patient.known_conditions &&
                          <ul className='list-disc list-inside'>
                            {
                              patient.known_conditions.map( (kc) => {
                                  return(
                                    <li className=''>{kc.name}</li>
                                  )
                                }
                              )
                            }
                          </ul>
                        }
                      </CardContent>
                      <CardFooter className="flex justify-end">
                        <Button>View</Button>
                      </CardFooter>
                    </Card>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className='mt-5 ml-5'>
          <div className='flex w-full my-3'>
            <div className='flex justify-start'>
              <p className="text-4xl font-bold">Scheduled Appointments</p>
            </div>
            <div className='flex items-end orelegaOne text-blue-900'>
              <h1 className="text-xl ml-3">See All</h1>
            </div>
          </div>
          <div>
            {
              !!consultationsData &&
              consultationsData.map( (consultation) => {
                return(
                  <Card className="flex flex-col my-3 w-[600px]">
                    <CardHeader className="flex flex-row gap-4 items-center justify-between">
                      {/* avatar */}
                      <div>
                        <CardTitle className="text-2xl font-bold">{consultation.first_name} {consultation.last_name}</CardTitle>
                      </div>
                      <Badge>{consultation.id}</Badge>
                    </CardHeader>
                    <CardContent className="flex flex-row">
                      <p className="font-semibold mr-3">Appointment Date:</p>
                      <p>{consultation.appointment_date}</p>
                    </CardContent>
                    <CardFooter className='flex justify-end items-center'>
                      <Button>View</Button>
                    </CardFooter>
                  </Card>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard