import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Car Wash Booking Platform</h1>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link href="/user/login">
          <Button className="w-full sm:w-auto">Car Owner Portal</Button>
        </Link>
        <Link href="/business/login">
          <Button variant="outline" className="w-full sm:w-auto">Business Portal</Button>
        </Link>
      </div>
    </main>
  )
}

