import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CarOwnerPortal() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-8">Car Owner Portal</h1>
      <div className="flex space-x-4">
        <Link href="/user/login">
          <Button>Login</Button>
        </Link>
        <Link href="/user/register">
          <Button variant="outline">Sign Up</Button>
        </Link>
      </div>
    </div>
  )
}

