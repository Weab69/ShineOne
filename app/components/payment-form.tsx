'use client'

import { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/button'

export default function PaymentForm({ amount }: { amount: number }) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState<string | null>(null)
  const [processing, setProcessing] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setProcessing(true)

    const cardElement = elements.getElement(CardElement)

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      })

      if (error) {
        setError(error.message || 'An error occurred')
        setProcessing(false)
      } else {
        // TODO: Send paymentMethod.id to your server to complete the payment
        console.log('Payment successful:', paymentMethod)
        setProcessing(false)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement />
      {error && <div className="text-red-500">{error}</div>}
      <Button type="submit" disabled={!stripe || processing}>
        Pay ${amount.toFixed(2)}
      </Button>
    </form>
  )
}

