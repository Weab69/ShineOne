'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Label } from "@/components/ui/label"

const mockServices = [
  { id: 1, name: "Basic Wash", price: 14.99 },
  { id: 2, name: "Full Service Wash", price: 29.99 },
  { id: 3, name: "Express Wash", price: 19.99 },
]

export default function BusinessServices() {
  const [services, setServices] = useState(mockServices)
  const [newService, setNewService] = useState({ name: "", price: "" })

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault()
    const price = parseFloat(newService.price)
    if (newService.name && !isNaN(price)) {
      setServices([...services, { id: services.length + 1, name: newService.name, price }])
      setNewService({ name: "", price: "" })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Manage Services</h1>
      <form onSubmit={handleAddService} className="mb-6 space-y-4">
        <div>
          <Label htmlFor="serviceName">Service Name</Label>
          <Input
            id="serviceName"
            value={newService.name}
            onChange={(e) => setNewService({ ...newService, name: e.target.value })}
            placeholder="Enter service name"
            required
          />
        </div>
        <div>
          <Label htmlFor="servicePrice">Price</Label>
          <Input
            id="servicePrice"
            type="number"
            step="0.01"
            value={newService.price}
            onChange={(e) => setNewService({ ...newService, price: e.target.value })}
            placeholder="Enter price"
            required
          />
        </div>
        <Button type="submit">Add Service</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Service Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell>{service.name}</TableCell>
              <TableCell>${service.price.toFixed(2)}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="destructive" size="sm" className="ml-2">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

