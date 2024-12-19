import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function BusinessNav() {
  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <li>
          <Link href="/business/dashboard">
            <Button variant="ghost" className="w-full sm:w-auto">Dashboard</Button>
          </Link>
        </li>
        <li>
          <Link href="/business/services">
            <Button variant="ghost" className="w-full sm:w-auto">Manage Services</Button>
          </Link>
        </li>
        <li>
          <Link href="/business/bookings">
            <Button variant="ghost" className="w-full sm:w-auto">Bookings</Button>
          </Link>
        </li>
        <li>
          <Link href="/business/profile">
            <Button variant="ghost" className="w-full sm:w-auto">Edit Profile</Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

