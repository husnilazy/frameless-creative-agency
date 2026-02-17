"use server"

import { createServerClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { requireAdmin } from '@/lib/auth/session'

export interface MediaUploadData {
  filename: string
  original_filename: string
  file_path: string
  file_size: number
  mime_type: string
  media_type: 'image' | 'video'
  width?: number
  height?: number
  duration?: number
  folder?: string
  alt_text?: string
}

export async function getMediaFiles(filters?: {
  folder?: string
  media_type?: 'image' | 'video'
  search?: string
}) {
  await requireAdmin()
  const supabase = createServerClient()

  let query = supabase
    .from('media_library')
    .select('*')
    .order('created_at', { ascending: false })

  if (filters?.folder && filters.folder !== 'all') {
    query = query.eq('folder', filters.folder)
  }

  if (filters?.media_type) {
    query = query.eq('media_type', filters.media_type)
  }

  if (filters?.search) {
    query = query.or(`filename.ilike.%${filters.search}%,original_filename.ilike.%${filters.search}%,alt_text.ilike.%${filters.search}%`)
  }

  const { data, error } = await query

  if (error) throw error
  return data
}

export async function addMediaFile(mediaData: MediaUploadData) {
  await requireAdmin()
  const supabase = createServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from('media_library')
    .insert([{
      ...mediaData,
      uploaded_by: user?.id
    }])
    .select()
    .single()

  if (error) throw error

  revalidatePath('/admin/media')
  return data
}

export async function updateMediaFile(id: string, updates: {
  alt_text?: string
  folder?: string
}) {
  await requireAdmin()
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('media_library')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error

  revalidatePath('/admin/media')
  return data
}

export async function deleteMediaFile(id: string) {
  await requireAdmin()
  const supabase = createServerClient()

  // Get file path to delete from storage
  const { data: media } = await supabase
    .from('media_library')
    .select('file_path')
    .eq('id', id)
    .single()

  if (media) {
    // Delete from storage
    await supabase.storage
      .from('media')
      .remove([media.file_path])
  }

  // Delete from database
  const { error } = await supabase
    .from('media_library')
    .delete()
    .eq('id', id)

  if (error) throw error

  revalidatePath('/admin/media')
}

export async function uploadToStorage(file: File, folder: string = 'general') {
  await requireAdmin()
  const supabase = createServerClient()

  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
  const filePath = `${folder}/${fileName}`

  const { data, error } = await supabase.storage
    .from('media')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    })

  if (error) throw error

  const { data: { publicUrl } } = supabase.storage
    .from('media')
    .getPublicUrl(filePath)

  return {
    path: filePath,
    url: publicUrl
  }
}
