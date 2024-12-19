'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function UserDashboard() {
  const [user, setUser] = useState<{ mobileNumber: string, licensePlate: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    } else {
      router.push('/user/login')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/user/login')
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Welcome, Car Owner!</h1>
      <p className="mb-2">Mobile Number: {user.mobileNumber}</p>
      <p className="mb-4">License Plate: {user.licensePlate}</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Book a Car Wash</CardTitle>
            <CardDescription>Find and book your next car wash appointment</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/user/directory">
              <Button className="w-full">View Car Wash Directory</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>View and manage your scheduled car washes</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/user/appointments">
              <Button className="w-full">View Appointments</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Wash History</CardTitle>
            <CardDescription>Review your past car wash services</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/user/history">
              <Button className="w-full">View History</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      <Button onClick={handleLogout} className="mt-6 w-full sm:w-auto">Logout</Button>
    </div>
  )
}

