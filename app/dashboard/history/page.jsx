"use client"
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import React from 'react'

const consultationsData = [
  {
    "id": 24,
    "first_name": "Andrei",
    "last_name": "Rivera",
    "appointment_date": "2024/05/23",
    "consultation_reason": "Bi-monthly Check-up",
    "comments": "Healthy",
  },
  {
    "id": 37,
    "first_name": "Andrei",
    "last_name": "Rivera",
    "appointment_date": "2024/05/23",
    "consultation_reason": "Bi-monthly Check-up",
    "comments": "Healthy",
  },
  {
    "id": 43,
    "first_name": "Andrei",
    "last_name": "Rivera",
    "appointment_date": "2024/05/23",
    "consultation_reason": "Flu-like symptoms",
    "comments": "Not vaccinated against Primary Complex",
  },
  {
    "id": 189,
    "first_name": "Andrei",
    "last_name": "Rivera",
    "appointment_date": "2024/05/23",
    "consultation_reason": "Bi-monthly Check-up",
    "comments": "Healthy",
  },
  {
    "id": 34,
    "first_name": "Andrei",
    "last_name": "Rivera",
    "appointment_date": "2024/05/23",
    "consultation_reason": "Bi-monthly Check-up",
    "comments": "Healthy",
  },
  {
    "id": 16,
    "first_name": "Andrei",
    "last_name": "Rivera",
    "appointment_date": "2024/05/23",
    "consultation_reason": "Bi-monthly Check-up",
    "comments": "Healthy",
  },
]

const History = () => {
  return (
    <div className='flex-1 overflow-auto h-full'>
      <div className='flex flex-col w-full p-3 overflow-auto bg-slate-50'>
        <div className='flex justify-center'>
          <h2 className="text-6xl font-bold orelegaOne text-sky-700 justify-center">History</h2>
        </div>
        <div className='flex flex-col items-center'>
          {
            !!consultationsData &&
            consultationsData.map( (consultation) => {
              return(
                <Card className="flex flex-col my-3 w-2/3">
                  <CardHeader className="flex flex-row gap-4 items-center justify-between">
                    {/* avatar */}
                    <div>
                      <CardTitle className="text-2xl font-bold">{consultation.first_name} {consultation.last_name}</CardTitle>
                    </div>
                    <Badge variant="secondary">{consultation.id}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-row">
                      <p className="font-semibold mr-3">Last Seen:</p>
                      <p>{consultation.appointment_date}</p>
                    </div>
                    <div className="flex flex-row">
                      <p className="font-semibold mr-3">Consultation Reason:</p>
                      <p>{consultation.consultation_reason}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold mr-3">Comments:</p>
                      <p>{consultation.comments}</p>
                    </div>
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
  )
}

export default History