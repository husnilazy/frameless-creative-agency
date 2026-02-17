"use server"

import { createServerClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { requireAdmin } from '@/lib/auth/session'

export interface ServiceFormData {
  title: string
  description?: string
  icon?: string
  image_url?: string
  price_text?: string
  display_order: number
  is_active: boolean
}

export async function getServices() {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('display_order', { ascending: true })

  if (error) throw error
  return data
}

export async function getService(id: string) {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createService(formData: ServiceFormData) {
  await requireAdmin()
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('services')
    .insert([formData])
    .select()
    .single()

  if (error) throw error

  revalidatePath('/admin/services')
  return data
}

export async function updateService(id: string, formData: ServiceFormData) {
  await requireAdmin()
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('services')
    .update(formData)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error

  revalidatePath('/admin/services')
  return data
}

export async function deleteService(id: string) {
  await requireAdmin()
  const supabase = createServerClient()

  const { error } = await supabase
    .from('services')
    .delete()
    .eq('id', id)

  if (error) throw error

  revalidatePath('/admin/services')
}
