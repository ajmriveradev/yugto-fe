"use client"

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from '@radix-ui/react-icons'
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { ScrollArea } from '@/components/ui/scroll-area'

const PatientSpecific = () => {
  const [patient, setPatient] = useState({
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
  });
  const [addDataType, setAddDataType] = useState("Consultation"); // Consultation | Known Condition |
  const [nextCheckUp, setNextCheckUp] = useState(new Date());

  return (
    <div className='flex flex-col flex-1 justify-start items-center h-full bg-slate-100'>
      <div className='w-full flex flex-row justify-center mt-8'>
        <h1 className="text-5xl font-semibold">Patient # {patient.id}</h1>
      </div>
      
      <div className='flex flex-row p-5 w-full h-full'>
        <div className='flex flex-col justify-between items-center w-1/3 h-full'>
          <h3 className="text-xl font-semibold mb-5 mt-2">Patient Information</h3>

          <div className='bg-red-200 w-full'>
            <div className='flex flex-row justify-center'>
              <Card className="flex flex-col justify-between mr-3 w-80 my-3">
                <CardHeader className="flex flex-row gap-4 items-center justify-between">
                  {/* avatar */}
                  <div>
                    <CardTitle className="font-bold text-2xl">{patient.first_name} {patient.last_name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col justify-start h-full">
                  <div className='flex flex-row justify-between'>
                    <p className='font-semibold mr-8'>Age:</p>
                    <p>{patient.age} years {patient.age} months</p>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <p className='font-semibold mr-8'>Last Seen:</p>
                    <p>{patient.last_seen}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className='flex flex-row justify-center'>
              <Card className="flex flex-col justify-between mr-3 w-80 my-3">
                <CardHeader className="flex flex-row gap-4 items-center justify-between">
                  {/* avatar */}
                  <div>
                    <CardTitle className="font-bold">Known Conditions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col justify-start h-full">
                  <ul className='list-disc list-inside'>
                    <li className=''>Known Condition 1</li>
                    <li className=''>Known Condition 1</li>
                    <li className=''>Known Condition 1</li>
                    <li className=''>Known Condition 1</li>
                    <li className=''>Known Condition 1</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className='flex flex-row justify-center'>
              <Card className="flex flex-col justify-between mr-3 w-80 my-3">
                <CardHeader className="flex flex-row gap-4 items-center justify-between">
                  {/* avatar */}
                  <div>
                    <CardTitle className="font-bold">Vaccinations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col justify-start h-full">
                  <ul className='list-disc list-inside'>
                    <li className=''>Vaccine 1</li>
                    <li className=''>Vaccine 1</li>
                    <li className=''>Vaccine 1</li>
                    <li className=''>Vaccine 1</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className='flex flex-row my-5 justify-center w-full bg-green-200'>
            <div className='mx-5'>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Add Consultation Data</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add {addDataType} Data</DialogTitle>
                    <DialogDescription>
                      Add Consultation data for the patient.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="weight" className="text-right">
                        Weight
                      </Label>
                      <Input id="weight" value="50" className="col-span-3" />

                      <Label htmlFor="height" className="text-right">
                        Height
                      </Label>
                      <Input id="height" value="132" className="col-span-3" />
                      <Label htmlFor="check_up_reason" className="text-right">
                        Check Up Reason
                      </Label>
                      <Input id="check_up_reason" value="Pedro Duarte" className="col-span-3" />

                      <Label htmlFor="comments" className="text-right">
                        Comments
                      </Label>
                      <Input id="comments" value="N/A" className="col-span-3" />
                      <Label htmlFor="diagnosis" className="text-right">
                        Diagnosis
                      </Label>
                      <Input id="diagnosis" value="Paracetamol" className="col-span-3" />

                      <Label htmlFor="medications_prescribed" className="text-right">
                        Medications Prescribed
                      </Label>
                      <Input id="medications_prescribed" value="@peduarte" className="col-span-3" />
                      
                      <Label htmlFor="username" className="text-right">
                        Nutrition
                      </Label>
                      <Input id="username" placeholder="Normal | Obese" className="col-span-3" />
                      
                      <Label htmlFor="next_check_up" className="text-right">
                        Next Check Up
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] justify-start text-left font-normal",
                              !nextCheckUp && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {nextCheckUp ? format(nextCheckUp, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={nextCheckUp}
                            onSelect={setNextCheckUp}
                            className="rounded-md border shadow"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <div className='mx-5'>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Add Known Condition</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add Known Condition Data</DialogTitle>
                    <DialogDescription>
                      Add a known condition of the patient.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="weight" className="text-right">
                        Type
                      </Label>
                      <Input id="weight" value="Allergy" className="col-span-3" />

                      <Label htmlFor="height" className="text-right">
                        Name
                      </Label>
                      <Input id="height" value="Peanut Allergy" className="col-span-3" />

                      
                      <Label htmlFor="next_check_up" className="text-right">
                        Discovered
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[277px] justify-start text-left font-normal",
                              !nextCheckUp && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {nextCheckUp ? format(nextCheckUp, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={nextCheckUp}
                            onSelect={setNextCheckUp}
                            className="rounded-md border shadow"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center w-2/3 h-full'>
          <h3 className="text-xl font-semibold mb-5">Recent History</h3>
          <ScrollArea className="h-[750px] w-full rounded-md border-2 border-sky-700">
            <div className='grid grid-cols-3'>
              <Card className="flex flex-col justify-between mx-3 my-5 w-80">
                <CardHeader className="flex flex-row gap-4 items-center justify-between">
                  {/* avatar */}
                  <div>
                    <CardTitle className="font-bold">{patient.first_name} {patient.last_name}</CardTitle>
                    <CardDescription>Last Seen: {patient.last_seen}</CardDescription>
                  </div>
                  <Badge variant="secondary">31631</Badge>
                </CardHeader>
                <CardContent className="flex flex-col justify-start h-full">
                  <div className='flex flex-row'>
                    <p className='font-semibold mr-8'>Age:</p>
                    <p>{patient.age} years {patient.age} months</p>
                  </div>
                  <div className="mt-2">
                    <p className='font-semibold'>Check-up Reason:</p>
                    <ul className='list-disc list-inside'>
                      <li className=''>Reason 1</li>
                      <li className=''>Reason 1</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className='font-semibold'>Comments:</p>
                    <ul className='list-disc list-inside'>
                      <li className=''>Comments 1</li>
                      <li className=''>Comments 1</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className='font-semibold'>Diagnoses:</p>
                    <ul className='list-disc list-inside'>
                      <li className=''>Diagnosis 1</li>
                      <li className=''>Diagnosis 1</li>
                      <li className=''>Diagnosis 1</li>
                      <li className=''>Diagnosis 1</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className='font-semibold'>Medication Prescribed:</p>
                    <ul className='list-disc list-inside'>
                      <li className=''>Medicine 1</li>
                      <li className=''>Medicine 1</li>
                      <li className=''>Medicine 1</li>
                      <li className=''>Medicine 1</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>View</Button>
                </CardFooter>
              </Card>
              
              <Card className="flex flex-col justify-between mx-3 my-5 w-80">
                <CardHeader className="flex flex-row gap-4 items-center justify-between">
                  {/* avatar */}
                  <div>
                    <CardTitle className="font-bold">{patient.first_name} {patient.last_name}</CardTitle>
                    <CardDescription>Last Seen: {patient.last_seen}</CardDescription>
                  </div>
                  <Badge variant="secondary">31631</Badge>
                </CardHeader>
                <CardContent className="flex flex-col justify-start h-full">
                  <div className='flex flex-row'>
                    <p className='font-semibold mr-8'>Age:</p>
                    <p>{patient.age} years {patient.age} months</p>
                  </div>
                  <div className="mt-2">
                    <p className='font-semibold'>Check-up Reason:</p>
                    <ul className='list-disc list-inside'>
                      <li className=''>Reason 1</li>
                      <li className=''>Reason 1</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className='font-semibold'>Comments:</p>
                    <ul className='list-disc list-inside'>
                      <li className=''>Comments 1</li>
                      <li className=''>Comments 1</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className='font-semibold'>Diagnoses:</p>
                    <ul className='list-disc list-inside'>
                      <li className=''>Diagnosis 1</li>
                      <li className=''>Diagnosis 1</li>
                      <li className=''>Diagnosis 1</li>
                      <li className=''>Diagnosis 1</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className='font-semibold'>Medication Prescribed:</p>
                    <ul className='list-disc list-inside'>
                      <li className=''>Medicine 1</li>
                      <li className=''>Medicine 1</li>
                      <li className=''>Medicine 1</li>
                      <li className=''>Medicine 1</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>View</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col justify-between mx-3 my-5 w-80">
                <CardHeader className="flex flex-row gap-4 items-center justify-between">
                  {/* avatar */}
                  <div>
                    <CardTitle className="font-bold">{patient.first_name} {patient.last_name}</CardTitle>
                    <CardDescription>Last Seen: {patient.last_seen}</CardDescription>
                  </div>
                  <Badge variant="secondary">31631</Badge>
                </CardHeader>
                <CardContent className="flex flex-col justify-start h-full">
                  <div className='flex flex-row'>
                    <p className='font-semibold mr-8'>Age:</p>
                    <p>{patient.age} years {patient.age} months</p>
                  </div>
                  <div className="mt-2">
                    <p className='font-semibold'>Check-up Reason:</p>
                    <ul className='list-disc list-inside'>
                      <li className=''>Reason 1</li>
                      <li className=''>Reason 1</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className='font-semibold'>Comments:</p>
                    <ul className='list-disc list-inside'>
                      <li className=''>Comments 1</li>
                      <li className=''>Comments 1</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className='font-semibold'>Diagnoses:</p>
                    <ul className='list-disc list-inside'>
                      <li className=''>Diagnosis 1</li>
                      <li className=''>Diagnosis 1</li>
                      <li className=''>Diagnosis 1</li>
                      <li className=''>Diagnosis 1</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className='font-semibold'>Medication Prescribed:</p>
                    <ul className='list-disc list-inside'>
                      <li className=''>Medicine 1</li>
                      <li className=''>Medicine 1</li>
                      <li className=''>Medicine 1</li>
                      <li className=''>Medicine 1</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>View</Button>
                </CardFooter>
              </Card>
              
              <Card className="flex flex-col justify-between mx-3 my-5 w-80">
                <CardHeader className="flex flex-row gap-4 items-center justify-between">
                  {/* avatar */}
                  <div>
                    <CardTitle className="font-bold">{patient.first_name} {patient.last_name}</CardTitle>
                    <CardDescription>Last Seen: {patient.last_seen}</CardDescription>
                  </div>
                  <Badge variant="secondary">31631</Badge>
                </CardHeader>
                <CardContent className="flex flex-col justify-start h-full">
                  <div className='flex flex-row'>
                    <p className='font-semibold mr-8'>Age:</p>
                    <p>{patient.age} years {patient.age} months</p>
                  </div>
                  <div className="mt-2">
                    <p className='font-semibold'>Check-up Reason:</p>
                    <ul className='list-disc list-inside'>
                      <li className=''>Reason 1</li>
                      <li className=''>Reason 1</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className='font-semibold'>Comments:</p>
                    <ul className='list-disc list-inside'>
                      <li className=''>Comments 1</li>
                      <li className=''>Comments 1</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className='font-semibold'>Diagnoses:</p>
                    <ul className='list-disc list-inside'>
                      <li className=''>Diagnosis 1</li>
                      <li className=''>Diagnosis 1</li>
                      <li className=''>Diagnosis 1</li>
                      <li className=''>Diagnosis 1</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className='font-semibold'>Medication Prescribed:</p>
                    <ul className='list-disc list-inside'>
                      <li className=''>Medicine 1</li>
                      <li className=''>Medicine 1</li>
                      <li className=''>Medicine 1</li>
                      <li className=''>Medicine 1</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>View</Button>
                </CardFooter>
              </Card>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

export default PatientSpecific