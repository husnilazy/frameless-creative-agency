"use client"

import { useState } from 'react'
import { Plus, Edit, Trash2, GripVertical } from 'lucide-react'
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
const mockServices = [
  {
    id: '1',
    title: 'Company Profile Videos',
    description: 'Showcase your company with storytelling visuals.',
    is_active: true,
    display_order: 1
  },
  {
    id: '2',
    title: 'Short Films',
    description: 'Bring ideas to life with cinematic narratives.',
    is_active: true,
    display_order: 2
  },
  {
    id: '3',
    title: 'Digital & Commercial Ads',
    description: 'Impactful ads for brands and products.',
    is_active: true,
    display_order: 3
  },
  {
    id: '4',
    title: 'Music Videos',
    description: 'Visuals that amplify your music.',
    is_active: true,
    display_order: 4
  }
]

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Services</h1>
          <p className="text-gray-500 mt-2">
            Manage the services you offer to clients
          </p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>

      {/* Services Table */}
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockServices.map((service) => (
              <TableRow key={service.id}>
                <TableCell>
                  <button className="cursor-grab hover:text-gray-600">
                    <GripVertical className="h-5 w-5 text-gray-400" />
                  </button>
                </TableCell>
                <TableCell className="font-medium">{service.title}</TableCell>
                <TableCell className="max-w-md">
                  <p className="truncate text-gray-600">{service.description}</p>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={service.is_active ? 'default' : 'outline'}
                    className={
                      service.is_active
                        ? 'bg-green-100 text-green-800 hover:bg-green-100'
                        : ''
                    }
                  >
                    {service.is_active ? 'Active' : 'Inactive'}
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
