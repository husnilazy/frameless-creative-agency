"use server"

import { createServerClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { requireAdmin } from '@/lib/auth/session'

export interface ContactMessageFormData {
  first_name: string
  last_name: string
  email: string
  company?: string
  project_type?: string
  message: string
}

export async function getContactMessages(filters?: {
  read?: boolean
  responded?: boolean
}) {
  await requireAdmin()
  const supabase = createServerClient()

  let query = supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false })

  if (filters?.read !== undefined) {
    query = query.eq('is_read', filters.read)
  }

  if (filters?.responded !== undefined) {
    query = query.eq('is_responded', filters.responded)
  }

  const { data, error } = await query

  if (error) throw error
  return data
}

export async function getContactMessage(id: string) {
  await requireAdmin()
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createContactMessage(formData: ContactMessageFormData) {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('contact_messages')
    .insert([formData])
    .select()
    .single()

  if (error) throw error

  return data
}

export async function markAsRead(id: string) {
  await requireAdmin()
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('contact_messages')
    .update({ is_read: true })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error

  revalidatePath('/admin/contact')
  return data
}

export async function markAsResponded(id: string, notes?: string) {
  await requireAdmin()
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('contact_messages')
    .update({
      is_responded: true,
      notes: notes || null
    })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error

  revalidatePath('/admin/contact')
  return data
}

export async function deleteContactMessage(id: string) {
  await requireAdmin()
  const supabase = createServerClient()

  const { error } = await supabase
    .from('contact_messages')
    .delete()
    .eq('id', id)

  if (error) throw error

  revalidatePath('/admin/contact')
}
