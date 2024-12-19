'use client'

import { usePathname } from 'next/navigation'
import { UserNav } from '../components/user-nav'

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAuthPage = pathname === '/user/login' || pathname === '/user/register' || pathname === '/user'

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <UserNav />}
      <main className="flex-grow">{children}</main>
    </div>
  )
}

