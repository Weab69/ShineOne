'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { BusinessNav } from '../components/business-nav'

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = async () => {
      const storedUser = localStorage.getItem('businessUser')
      if (storedUser) {
        try {
          const response = await fetch('/api/business/verify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: storedUser,
          })

          if (response.ok) {
            setIsAuthenticated(true)
          } else {
            localStorage.removeItem('businessUser')
            router.push('/business/login')
          }
        } catch (error) {
          console.error('Auth verification error:', error)
          router.push('/business/login')
        }
      } else if (pathname !== '/business/login' && pathname !== '/business/register') {
        router.push('/business/login')
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [router, pathname])

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  const isAuthPage = pathname === '/business/login' || pathname === '/business/register'

  return (
    <div className="min-h-screen flex flex-col">
      {isAuthenticated && !isAuthPage && <BusinessNav />}
      <main className="flex-grow">{children}</main>
    </div>
  )
}

