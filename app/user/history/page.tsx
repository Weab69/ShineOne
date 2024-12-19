import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockHistory = [
  { id: 1, date: "2023-05-15", business: "Sparkle Car Wash", service: "Full Service Wash", price: 29.99 },
  { id: 2, date: "2023-04-30", business: "Clean & Shine", service: "Express Wash", price: 19.99 },
  { id: 3, date: "2023-04-01", business: "Quick Wash", service: "Basic Wash", price: 14.99 },
]

export default function UserHistory() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Wash History</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Business</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockHistory.map((wash) => (
            <TableRow key={wash.id}>
              <TableCell>{wash.date}</TableCell>
              <TableCell>{wash.business}</TableCell>
              <TableCell>{wash.service}</TableCell>
              <TableCell>${wash.price.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

