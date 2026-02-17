"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Search, Filter, Edit, Trash2, Eye } from 'lucide-react'
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
const mockPosts = [
  {
    id: '1',
    title: '10 Tips for Creating Compelling Brand Videos',
    category: 'Tips & Guides',
    author: 'Admin User',
    status: 'published',
    views: 1450,
    published_at: '2024-02-10',
    is_featured: true
  },
  {
    id: '2',
    title: 'Behind the Scenes: Our Latest Commercial Shoot',
    category: 'Behind the Scenes',
    author: 'Admin User',
    status: 'published',
    views: 890,
    published_at: '2024-02-05',
    is_featured: false
  },
  {
    id: '3',
    title: 'The Future of Video Marketing in 2024',
    category: 'Industry News',
    author: 'Admin User',
    status: 'draft',
    views: 0,
    published_at: null,
    is_featured: false
  }
]

export default function BlogPage() {
  const [statusFilter, setStatusFilter] = useState('all')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
          <p className="text-gray-500 mt-2">
            Create and manage your blog articles
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/admin/blog/categories">
            <Button variant="outline">
              Manage Categories
            </Button>
          </Link>
          <Link href="/admin/blog/new">
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Total Posts</p>
          <p className="text-2xl font-bold mt-1">45</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Published</p>
          <p className="text-2xl font-bold mt-1">38</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Drafts</p>
          <p className="text-2xl font-bold mt-1">7</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Total Views</p>
          <p className="text-2xl font-bold mt-1">12.5K</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search posts..."
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Posts Table */}
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Views</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {post.title}
                    {post.is_featured && (
                      <Badge variant="secondary" className="text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>{post.category}</TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell>
                  <Badge
                    variant={post.status === 'published' ? 'default' : 'outline'}
                    className={
                      post.status === 'published'
                        ? 'bg-green-100 text-green-800 hover:bg-green-100'
                        : ''
                    }
                  >
                    {post.status}
                  </Badge>
                </TableCell>
                <TableCell>{post.views}</TableCell>
                <TableCell>
                  {post.published_at
                    ? new Date(post.published_at).toLocaleDateString()
                    : '-'}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    {post.status === 'published' && (
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    )}
                    <Link href={`/admin/blog/${post.id}`}>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
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
