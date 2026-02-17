import { Suspense } from 'react'
import {
  FolderKanban,
  Briefcase,
  Users,
  MessageSquare,
  Image,
  FileText,
  Mail,
  Tag,
  TrendingUp
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

async function getStats() {
  // TODO: Fetch real stats from database
  return {
    projects: 24,
    services: 4,
    teamMembers: 2,
    testimonials: 15,
    blogPosts: 12,
    mediaFiles: 156,
    clients: 8,
    messages: 7,
    unreadMessages: 3
  }
}

function StatCard({
  title,
  value,
  icon: Icon,
  trend
}: {
  title: string
  value: number
  icon: any
  trend?: string
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
        <Icon className="h-5 w-5 text-gray-400" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className="text-xs text-green-600 flex items-center mt-1">
            <TrendingUp className="h-3 w-3 mr-1" />
            {trend}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

async function DashboardStats() {
  const stats = await getStats()

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Portfolio Projects"
        value={stats.projects}
        icon={FolderKanban}
        trend="+3 this month"
      />
      <StatCard
        title="Services"
        value={stats.services}
        icon={Briefcase}
      />
      <StatCard
        title="Team Members"
        value={stats.teamMembers}
        icon={Users}
      />
      <StatCard
        title="Blog Posts"
        value={stats.blogPosts}
        icon={FileText}
        trend="+2 this week"
      />
      <StatCard
        title="Media Files"
        value={stats.mediaFiles}
        icon={Image}
      />
      <StatCard
        title="Clients"
        value={stats.clients}
        icon={Tag}
      />
      <StatCard
        title="Testimonials"
        value={stats.testimonials}
        icon={MessageSquare}
      />
      <StatCard
        title="Messages"
        value={stats.messages}
        icon={Mail}
        trend={`${stats.unreadMessages} unread`}
      />
    </div>
  )
}

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-500 mt-2">
          Welcome to your content management system
        </p>
      </div>

      <Suspense fallback={<div>Loading stats...</div>}>
        <DashboardStats />
      </Suspense>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New project added</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Blog post published</p>
                  <p className="text-xs text-gray-500">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-orange-500 mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New contact message</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <a
                href="/admin/portfolio/new"
                className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50 transition-colors"
              >
                <FolderKanban className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium">Add New Project</span>
              </a>
              <a
                href="/admin/blog/new"
                className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50 transition-colors"
              >
                <FileText className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium">Write Blog Post</span>
              </a>
              <a
                href="/admin/media"
                className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50 transition-colors"
              >
                <Image className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium">Upload Media</span>
              </a>
              <a
                href="/admin/contact"
                className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50 transition-colors"
              >
                <Mail className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium">View Messages</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
