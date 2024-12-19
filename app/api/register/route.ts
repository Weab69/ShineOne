import { NextResponse } from 'next/server'

// This array will store our users (for demonstration purposes only)
let users: any[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { mobileNumber, licensePlate, password } = body

    // Check if user already exists
    if (users.some(user => user.mobileNumber === mobileNumber)) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 })
    }

    // Create new user
    const newUser = { mobileNumber, licensePlate, password }
    users.push(newUser)

    console.log('New user registered:', newUser)
    console.log('All users:', users)

    return NextResponse.json({ message: 'Registration successful' }, { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ message: 'Registration failed' }, { status: 500 })
  }
}

