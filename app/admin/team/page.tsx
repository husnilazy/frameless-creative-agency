"use client"

import { Plus, Edit, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

// Mock data
const mockTeamMembers = [
  {
    id: '1',
    name: 'Husni Lazy',
    handle: '@husnilazy',
    position: 'Director & Creative Lead',
    photo_url: '/placeholder.svg',
    is_active: true
  },
  {
    id: '2',
    name: 'Wildan Allaam',
    handle: '@wildanallaam',
    position: 'Director & Cinematographer',
    photo_url: '/placeholder.svg',
    is_active: true
  }
]

export default function TeamPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Members</h1>
          <p className="text-gray-500 mt-2">
            Manage your team and director profiles
          </p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Team Member
        </Button>
      </div>

      {/* Team Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockTeamMembers.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <div className="aspect-[3/4] relative bg-gray-100">
              <Image
                src={member.photo_url}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-orange-600 font-mono">{member.handle}</p>
                  <p className="text-sm text-gray-600 mt-2">{member.position}</p>
                </div>
                <Badge
                  variant={member.is_active ? 'default' : 'outline'}
                  className={
                    member.is_active
                      ? 'bg-green-100 text-green-800 hover:bg-green-100'
                      : ''
                  }
                >
                  {member.is_active ? 'Active' : 'Inactive'}
                </Badge>
              </div>

              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
