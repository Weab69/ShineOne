import { NextResponse } from 'next/server'

// Mock users for demonstration purposes
const mockUsers = [
  { mobileNumber: '1234567890', password: 'password123', name: 'John Doe', licensePlate: 'ABC123' },
  { mobileNumber: '9876543210', password: 'password456', name: 'Jane Smith', licensePlate: 'XYZ789' },
  { mobileNumber: '5555555555', password: 'password789', name: 'Bob Johnson', licensePlate: 'DEF456' },
]

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { mobileNumber, password } = body

    console.log('Login attempt:', { mobileNumber, password })

    // Find the user in the mock data
    const user = mockUsers.find(u => u.mobileNumber === mobileNumber && u.password === password)

    if (user) {
      console.log('Login successful:', user)

      return NextResponse.json({ 
        message: 'Login successful',
        user: { 
          name: user.name, 
          mobileNumber: user.mobileNumber, 
          licensePlate: user.licensePlate 
        }
      }, { status: 200 })
    } else {
      console.log('Login failed: Invalid credentials')
      return NextResponse.json({ message: 'Invalid mobile number or password' }, { status: 401 })
    }
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ message: 'An error occurred during login' }, { status: 500 })
  }
}

