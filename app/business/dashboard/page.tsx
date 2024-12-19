'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function BusinessDashboard() {
  const [businessUser, setBusinessUser] = useState<{ businessName: string, email: string, location: string, capacity: number } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('businessUser')
    if (storedUser) {
      setBusinessUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('businessUser')
    router.push('/business/login')
  }

  if (!businessUser) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Welcome, {businessUser.businessName}!</h1>
      <p className="mb-2">Email: {businessUser.email}</p>
      <p className="mb-2">Location: {businessUser.location}</p>
      <p className="mb-4">Capacity: {businessUser.capacity}</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Manage Services</CardTitle>
            <CardDescription>Add, edit, or remove your car wash services</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/business/services">
              <Button className="w-full">Manage Services</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Bookings</CardTitle>
            <CardDescription>View and manage customer bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/business/bookings">
              <Button className="w-full">View Bookings</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Business Profile</CardTitle>
            <CardDescription>Update your business information</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/business/profile">
              <Button className="w-full">Edit Profile</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      <Button onClick={handleLogout} className="mt-6 w-full sm:w-auto">Logout</Button>
    </div>
  )
}

