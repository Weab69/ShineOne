import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function UserNav() {
  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <li>
          <Link href="/user/dashboard">
            <Button variant="ghost" className="w-full sm:w-auto">Dashboard</Button>
          </Link>
        </li>
        <li>
          <Link href="/user/directory">
            <Button variant="ghost" className="w-full sm:w-auto">Car Wash Directory</Button>
          </Link>
        </li>
        <li>
          <Link href="/user/appointments">
            <Button variant="ghost" className="w-full sm:w-auto">Appointments</Button>
          </Link>
        </li>
        <li>
          <Link href="/user/history">
            <Button variant="ghost" className="w-full sm:w-auto">Wash History</Button>
          </Link>
        </li>
        <li>
          <Link href="/user">
            <Button variant="ghost" className="w-full sm:w-auto">Logout</Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

