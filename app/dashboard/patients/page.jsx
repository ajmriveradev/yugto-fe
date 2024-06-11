"use client"

import React, { useState } from 'react'
import SearchBar from '@/app/ui/dashboard/search-bar/SearchBar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Badge } from "@/components/ui/badge"
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation';

const Patients = () => {
  const router = useRouter();
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
    {
      "id": 6,
      "first_name": "April",
      "last_name": "Gonzales",
      "age": 29,
      "last_seen": "2024/01/24",
      "known_conditions": null
    },
    {
      "id": 7,
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
      "id": 8,
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

  return (
    <div className='flex flex-1 overflow-auto h-full '>
      <div className='flex flex-col p-3 bg-slate-50 w-full h-full overflow-auto '>
        <div className='flex justify-center '>
          <h2 className="text-6xl font-bold orelegaOne text-sky-700 justify-center">Patients</h2>
        </div>
        <div className='mx-5 mt-5'>
          <SearchBar />
        </div>
        
        <div className='flex flex-row justify-center mt-8'>
          <div className='grid grid-cols-4 gap-8'>
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
                      <Button
                        onClick={ () => { 
                          router.push(`/dashboard/patients/${patient.id}`)
                        }}
                      >
                        View
                      </Button>
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

export default Patients