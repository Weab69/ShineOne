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
    const { email } = body

    // Find the business user in the mock data
    const user = mockBusinessUsers.find(u => u.email === email)

    if (user) {
      // In a real application, you would verify the user's session or token here
      return NextResponse.json({ message: 'User verified' }, { status: 200 })
    } else {
      return NextResponse.json({ message: 'Invalid user' }, { status: 401 })
    }
  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.json({ message: 'An error occurred during verification' }, { status: 500 })
  }
}

