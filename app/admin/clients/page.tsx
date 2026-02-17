"use client"

import { Plus, Edit, Trash2, GripVertical } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Mock data
const mockClients = [
  {
    id: '1',
    name: 'Unsiq',
    logo_url: '/logos/unsiq-white.png',
    website_url: 'https://unsiq.ac.id',
    is_active: true,
    display_order: 1
  },
  {
    id: '2',
    name: 'Doss',
    logo_url: '/logos/doss-white.png',
    website_url: 'https://doss.co.id',
    is_active: true,
    display_order: 2
  },
  {
    id: '3',
    name: 'Bank Indonesia',
    logo_url: '/logos/bi-white.png',
    website_url: 'https://bi.go.id',
    is_active: true,
    display_order: 3
  },
  {
    id: '4',
    name: 'JNE',
    logo_url: '/logos/jne-white.png',
    website_url: 'https://jne.co.id',
    is_active: true,
    display_order: 4
  },
  {
    id: '5',
    name: 'WWF',
    logo_url: '/logos/wwf-white.png',
    website_url: 'https://wwf.org',
    is_active: true,
    display_order: 5
  }
]

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clients & Brands</h1>
          <p className="text-gray-500 mt-2">
            Manage client logos displayed on your website
          </p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Total Clients</p>
          <p className="text-2xl font-bold mt-1">8</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Active</p>
          <p className="text-2xl font-bold mt-1">8</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Recent Additions</p>
          <p className="text-2xl font-bold mt-1">2 this month</p>
        </div>
      </div>

      {/* Clients Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {mockClients.map((client) => (
          <div
            key={client.id}
            className="group relative rounded-lg border bg-white p-6 hover:shadow-lg transition-shadow"
          >
            <div className="absolute top-3 left-3">
              <button className="cursor-grab hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <GripVertical className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            <div className="absolute top-3 right-3">
              <Badge
                variant={client.is_active ? 'default' : 'outline'}
                className={
                  client.is_active
                    ? 'bg-green-100 text-green-800 hover:bg-green-100'
                    : ''
                }
              >
                {client.is_active ? 'Active' : 'Inactive'}
              </Badge>
            </div>

            <div className="aspect-video bg-gray-900 rounded-lg mb-4 flex items-center justify-center p-6">
              <Image
                src={client.logo_url}
                alt={client.name}
                width={200}
                height={100}
                className="max-w-full max-h-full object-contain brightness-0 invert"
              />
            </div>

            <h3 className="text-lg font-semibold mb-2">{client.name}</h3>
            {client.website_url && (
              <a
                href={client.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline truncate block"
              >
                {client.website_url}
              </a>
            )}

            <div className="flex gap-2 mt-4 pt-4 border-t">
              <Button variant="outline" size="sm" className="flex-1">
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>
              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
