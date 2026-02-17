"use server"

import { createServerClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { requireAdmin } from '@/lib/auth/session'

export interface ProjectFormData {
  title: string
  slug: string
  description?: string
  client_name?: string
  project_date?: string
  category?: string
  status: 'draft' | 'published' | 'archived'
  featured: boolean
  thumbnail_url?: string
  video_url?: string
}

export async function getProjects(filters?: {
  status?: string
  category?: string
  search?: string
}) {
  const supabase = createServerClient()

  let query = supabase
    .from('projects')
    .select('*')
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: false })

  if (filters?.status && filters.status !== 'all') {
    query = query.eq('status', filters.status)
  }

  if (filters?.category) {
    query = query.eq('category', filters.category)
  }

  if (filters?.search) {
    query = query.or(`title.ilike.%${filters.search}%,client_name.ilike.%${filters.search}%`)
  }

  const { data, error } = await query

  if (error) throw error
  return data
}

export async function getProject(id: string) {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('projects')
    .select(`
      *,
      project_media (*)
    `)
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createProject(formData: ProjectFormData) {
  await requireAdmin()
  const supabase = createServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from('projects')
    .insert([{
      ...formData,
      created_by: user?.id
    }])
    .select()
    .single()

  if (error) throw error

  revalidatePath('/admin/portfolio')
  return data
}

export async function updateProject(id: string, formData: ProjectFormData) {
  await requireAdmin()
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('projects')
    .update(formData)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error

  revalidatePath('/admin/portfolio')
  revalidatePath(`/admin/portfolio/${id}`)
  return data
}

export async function deleteProject(id: string) {
  await requireAdmin()
  const supabase = createServerClient()

  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id)

  if (error) throw error

  revalidatePath('/admin/portfolio')
}

export async function addProjectMedia(projectId: string, media: {
  media_type: 'image' | 'video'
  url: string
  thumbnail_url?: string
  alt_text?: string
  display_order: number
}) {
  await requireAdmin()
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('project_media')
    .insert([{
      project_id: projectId,
      ...media
    }])
    .select()
    .single()

  if (error) throw error

  revalidatePath(`/admin/portfolio/${projectId}`)
  return data
}

export async function deleteProjectMedia(mediaId: string) {
  await requireAdmin()
  const supabase = createServerClient()

  const { error } = await supabase
    .from('project_media')
    .delete()
    .eq('id', mediaId)

  if (error) throw error
}
