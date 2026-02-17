"use client"

import { useState } from 'react'
import { Mail, MailOpen, Check, Trash2, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// Mock data
const mockMessages = [
  {
    id: '1',
    first_name: 'John',
    last_name: 'Smith',
    email: 'john@example.com',
    company: 'Tech Corp',
    project_type: 'Commercial Video',
    message: 'Interested in creating a brand video for our product launch...',
    is_read: false,
    is_responded: false,
    created_at: '2024-02-15T10:30:00Z'
  },
  {
    id: '2',
    first_name: 'Sarah',
    last_name: 'Johnson',
    email: 'sarah@startup.com',
    company: 'Startup Inc',
    project_type: 'Company Profile',
    message: 'We need a company profile video for our website...',
    is_read: true,
    is_responded: true,
    created_at: '2024-02-14T15:20:00Z'
  },
  {
    id: '3',
    first_name: 'Mike',
    last_name: 'Wilson',
    email: 'mike@agency.com',
    company: 'Creative Agency',
    project_type: 'Music Video',
    message: 'Looking for a director for an upcoming music video project...',
    is_read: true,
    is_responded: false,
    created_at: '2024-02-13T09:15:00Z'
  }
]

export default function ContactPage() {
  const [statusFilter, setStatusFilter] = useState('all')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contact Messages</h1>
          <p className="text-gray-500 mt-2">
            View and manage client inquiries and contact form submissions
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-blue-500 mr-2" />
            3 Unread
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search messages..."
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Messages</SelectItem>
            <SelectItem value="unread">Unread</SelectItem>
            <SelectItem value="read">Read</SelectItem>
            <SelectItem value="responded">Responded</SelectItem>
            <SelectItem value="pending">Pending Response</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Messages Table */}
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Project Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockMessages.map((message) => (
              <TableRow
                key={message.id}
                className={!message.is_read ? 'bg-blue-50/50' : ''}
              >
                <TableCell>
                  {!message.is_read ? (
                    <Mail className="h-5 w-5 text-blue-500" />
                  ) : (
                    <MailOpen className="h-5 w-5 text-gray-400" />
                  )}
                </TableCell>
                <TableCell className="font-medium">
                  {message.first_name} {message.last_name}
                </TableCell>
                <TableCell>{message.email}</TableCell>
                <TableCell>{message.company}</TableCell>
                <TableCell>{message.project_type}</TableCell>
                <TableCell>
                  {new Date(message.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {message.is_responded ? (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Responded
                    </Badge>
                  ) : message.is_read ? (
                    <Badge variant="outline">
                      Pending
                    </Badge>
                  ) : (
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                      New
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm" title="View message">
                      <MailOpen className="h-4 w-4" />
                    </Button>
                    {!message.is_responded && (
                      <Button variant="ghost" size="sm" title="Mark as responded">
                        <Check className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                      title="Delete message"
                    >
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
