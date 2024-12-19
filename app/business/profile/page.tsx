'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function BusinessProfile() {
  const [profile, setProfile] = useState({
    name: "Sparkle Car Wash",
    address: "123 Main St, Anytown, USA",
    phone: "(555) 123-4567",
    email: "info@sparklecarwash.com",
    description: "We provide top-quality car wash services with eco-friendly products.",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement profile update logic
    console.log("Updated profile:", profile)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Edit Business Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <Label htmlFor="name">Business Name</Label>
          <Input id="name" name="name" value={profile.name} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input id="address" name="address" value={profile.address} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" value={profile.phone} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" value={profile.email} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="description">Business Description</Label>
          <Textarea id="description" name="description" value={profile.description} onChange={handleChange} required />
        </div>
        <Button type="submit">Update Profile</Button>
      </form>
    </div>
  )
}

