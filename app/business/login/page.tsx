'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function BusinessLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const storedUser = localStorage.getItem('businessUser')
      if (storedUser) {
        try {
          const response = await fetch('/api/business/verify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: storedUser,
          })

          if (response.ok) {
            router.push('/business/dashboard')
          }
        } catch (error) {
          console.error('Auth verification error:', error)
        }
      }
    }

    checkAuth()
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const response = await fetch('/api/business/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.
ok) {
        localStorage.setItem('businessUser', JSON.stringify(data.user))
        router.push('/business/dashboard')
      } else {
        setError(data.message || 'Login failed')
      }
    } catch (error) {
      setError('An error occurred during login. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Business Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <div>
          <Label htmlFor="email">Company Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your company email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account?{' '}
        <Link href="/business/register" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  )
}

