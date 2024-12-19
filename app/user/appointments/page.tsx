import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockAppointments = [
  { id: 1, date: "2023-06-01", time: "10:00 AM", business: "Sparkle Car Wash", service: "Full Service Wash" },
  { id: 2, date: "2023-06-15", time: "2:00 PM", business: "Clean & Shine", service: "Express Wash" },
]

export default function UserAppointments() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Appointments</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Business</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockAppointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>{appointment.business}</TableCell>
              <TableCell>{appointment.service}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">Cancel</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

