import { NextResponse } from 'next/server'

// This array will store our business users (for demonstration purposes only)
let businessUsers: any[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { businessName, location, capacity, email, password } = body

    // Check if business already exists
    if (businessUsers.some(user => user.email === email)) {
      return NextResponse.json({ message: 'Business already exists' }, { status: 400 })
    }

    // Create new business user
    const newBusinessUser = { businessName, location, capacity, email, password }
    businessUsers.push(newBusinessUser)

    console.log('New business registered:', newBusinessUser)
    console.log('All business users:', businessUsers)

    return NextResponse.json({ message: 'Business registration successful' }, { status: 201 })
  } catch (error) {
    console.error('Business registration error:', error)
    return NextResponse.json({ message: 'Business registration failed' }, { status: 500 })
  }
}

