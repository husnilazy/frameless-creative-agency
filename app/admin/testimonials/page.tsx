"use client"

import { Plus, Edit, Trash2, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// Mock data
const mockTestimonials = [
  {
    id: '1',
    client_name: 'John Smith',
    client_company: 'Tech Corp',
    client_position: 'CEO',
    testimonial_text: 'Outstanding work! The video exceeded our expectations and helped us achieve incredible results.',
    rating: 5,
    is_featured: true,
    is_active: true
  },
  {
    id: '2',
    client_name: 'Sarah Johnson',
    client_company: 'Startup Inc',
    client_position: 'Marketing Director',
    testimonial_text: 'Professional, creative, and easy to work with. Highly recommended for any video project.',
    rating: 5,
    is_featured: false,
    is_active: true
  },
  {
    id: '3',
    client_name: 'Mike Wilson',
    client_company: 'Creative Agency',
    client_position: 'Founder',
    testimonial_text: 'Frameless brought our vision to life in ways we never imagined. Truly exceptional work!',
    rating: 5,
    is_featured: false,
    is_active: true
  }
]

export default function TestimonialsPage() {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Testimonials</h1>
          <p className="text-gray-500 mt-2">
            Manage client reviews and testimonials
          </p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Testimonial
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Total Reviews</p>
          <p className="text-2xl font-bold mt-1">24</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Active</p>
          <p className="text-2xl font-bold mt-1">20</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Featured</p>
          <p className="text-2xl font-bold mt-1">5</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Average Rating</p>
          <p className="text-2xl font-bold mt-1">4.9 ⭐</p>
        </div>
      </div>

      {/* Testimonials Table */}
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Testimonial</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTestimonials.map((testimonial) => (
              <TableRow key={testimonial.id}>
                <TableCell className="font-medium">
                  <div>
                    {testimonial.client_name}
                    {testimonial.is_featured && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.client_position}
                  </div>
                </TableCell>
                <TableCell>{testimonial.client_company}</TableCell>
                <TableCell className="max-w-md">
                  <p className="truncate text-gray-600">
                    {testimonial.testimonial_text}
                  </p>
                </TableCell>
                <TableCell>{renderStars(testimonial.rating)}</TableCell>
                <TableCell>
                  <Badge
                    variant={testimonial.is_active ? 'default' : 'outline'}
                    className={
                      testimonial.is_active
                        ? 'bg-green-100 text-green-800 hover:bg-green-100'
                        : ''
                    }
                  >
                    {testimonial.is_active ? 'Active' : 'Inactive'}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
