import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockBookings = [
  { id: 1, date: "2023-06-01", time: "10:00 AM", customer: "John Doe", service: "Full Service Wash" },
  { id: 2, date: "2023-06-01", time: "11:30 AM", customer: "Jane Smith", service: "Express Wash" },
  { id: 3, date: "2023-06-02", time: "2:00 PM", customer: "Bob Johnson", service: "Basic Wash" },
]

export default function BusinessBookings() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Upcoming Bookings</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockBookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>{booking.date}</TableCell>
              <TableCell>{booking.time}</TableCell>
              <TableCell>{booking.customer}</TableCell>
              <TableCell>{
booking.service}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">Confirm</Button>
                <Button variant="destructive" size="sm" className="ml-2">Cancel</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

