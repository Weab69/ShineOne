import { NextResponse } from 'next/server'

// Mock business users for demonstration purposes
const mockBusinessUsers = [
  { businessName: 'Super Wash', location: '123 Main St', capacity: 5, email: 'super@wash.com', password: 'password123' },
  { businessName: 'Quick Clean', location: '456 Elm St', capacity: 3, email: 'quick@clean.com', password: 'password456' },
  { businessName: 'Shine Time', location: '789 Oak St', capacity: 4, email: 'shine@time.com', password: 'password789' },
]

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    console.log('Business login attempt:', { email, password })

    // Find the business user in the mock data
    const user = mockBusinessUsers.find(u => u.email === email && u.password === password)

    if (user) {
      console.log('Business login successful:', user)

      return NextResponse.json({ 
        message: 'Login successful',
        user: { 
          businessName: user.businessName, 
          email: user.email,
          location: user.location,
          capacity: user.capacity
        }
      }, { status: 200 })
    } else {
      console.log('Business login failed: Invalid credentials')
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 })
    }
  } catch (error) {
    console.error('Business login error:', error)
    return NextResponse.json({ message: 'An error occurred during login' }, { status: 500 })
  }
}

