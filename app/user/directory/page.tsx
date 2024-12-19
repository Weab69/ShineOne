'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Mock data for car wash businesses
const mockBusinesses = [
  { id: 1, name: 'Sparkle Car Wash', address: '123 Main St', rating: 4.5 },
  { id: 2, name: 'Clean & Shine', address: '456 Elm St', rating: 4.2 },
  { id: 3, name: 'Quick Wash', address: '789 Oak St', rating: 4.0 },
]

export default function CarWashDirectory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [businesses, setBusinesses] = useState(mockBusinesses)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual search logic
    const filteredBusinesses = mockBusinesses.filter(business =>
      business.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setBusinesses(filteredBusinesses)
  }

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Car Wash Business Directory</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex space-x-2">
          <div className="flex-grow">
            <Label htmlFor="search" className="sr-only">Search</Label>
            <Input
              id="search"
              type="search"
              placeholder="Search for a car wash business"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button type="submit">Search</Button>
        </div>
      </form>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {businesses.map(business => (
          <Card key={business.id}>
            <CardHeader>
              <CardTitle>{business.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{business.address}</p>
              <p>Rating: {business.rating}</p>
              <Button className="mt-2">Book Appointment</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

