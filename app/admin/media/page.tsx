"use client"

import { useState } from 'react'
import { Upload, Image as ImageIcon, Video, Folder, Search, Filter, Trash2, Edit } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// Mock data
const mockMedia = [
  {
    id: '1',
    filename: 'project-hero-1.jpg',
    media_type: 'image',
    file_path: '/uploads/projects/project-hero-1.jpg',
    folder: 'projects',
    file_size: 2458000,
    created_at: '2024-02-15T10:30:00Z',
    width: 1920,
    height: 1080
  },
  {
    id: '2',
    filename: 'team-photo-1.jpg',
    media_type: 'image',
    file_path: '/uploads/team/team-photo-1.jpg',
    folder: 'team',
    file_size: 1850000,
    created_at: '2024-02-14T15:20:00Z',
    width: 800,
    height: 1200
  },
  {
    id: '3',
    filename: 'demo-reel.mp4',
    media_type: 'video',
    file_path: '/uploads/projects/demo-reel.mp4',
    folder: 'projects',
    file_size: 45800000,
    created_at: '2024-02-13T09:15:00Z'
  }
]

export default function MediaLibraryPage() {
  const [folderFilter, setFolderFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Media Library</h1>
          <p className="text-gray-500 mt-2">
            Upload and manage all your media files
          </p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Upload className="mr-2 h-4 w-4" />
          Upload Files
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100">
              <ImageIcon className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Images</p>
              <p className="text-2xl font-bold">124</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100">
              <Video className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Videos</p>
              <p className="text-2xl font-bold">32</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100">
              <Folder className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Folders</p>
              <p className="text-2xl font-bold">8</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100">
              <Upload className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Size</p>
              <p className="text-2xl font-bold">2.4 GB</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search files..."
            className="pl-10"
          />
        </div>
        <Select value={folderFilter} onValueChange={setFolderFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <Folder className="mr-2 h-4 w-4" />
            <SelectValue placeholder="All folders" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Folders</SelectItem>
            <SelectItem value="projects">Projects</SelectItem>
            <SelectItem value="team">Team</SelectItem>
            <SelectItem value="blog">Blog</SelectItem>
            <SelectItem value="services">Services</SelectItem>
            <SelectItem value="homepage">Homepage</SelectItem>
            <SelectItem value="general">General</SelectItem>
          </SelectContent>
        </Select>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="All types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="image">Images</SelectItem>
            <SelectItem value="video">Videos</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Media Grid */}
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {mockMedia.map((media) => (
          <div key={media.id} className="group relative rounded-lg border bg-white overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gray-100 relative">
              {media.media_type === 'image' ? (
                <Image
                  src={media.file_path}
                  alt={media.filename}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <Video className="h-12 w-12 text-gray-400" />
                </div>
              )}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button size="sm" variant="secondary">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="secondary" className="text-red-600">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-3">
              <p className="text-sm font-medium truncate">{media.filename}</p>
              <div className="flex items-center justify-between mt-2">
                <Badge variant="outline" className="text-xs">
                  {media.folder}
                </Badge>
                <span className="text-xs text-gray-500">
                  {formatFileSize(media.file_size)}
                </span>
              </div>
              {media.width && media.height && (
                <p className="text-xs text-gray-500 mt-1">
                  {media.width} × {media.height}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
