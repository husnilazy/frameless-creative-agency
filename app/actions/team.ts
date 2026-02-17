"use server"

import { createServerClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { requireAdmin } from '@/lib/auth/session'

export interface TeamMemberFormData {
  name: string
  handle?: string
  position?: string
  bio?: string
  photo_url?: string
  signature?: string
  instagram_url?: string
  twitter_url?: string
  linkedin_url?: string
  display_order: number
  is_active: boolean
}

export async function getTeamMembers() {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('display_order', { ascending: true })

  if (error) throw error
  return data
}

export async function getTeamMember(id: string) {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createTeamMember(formData: TeamMemberFormData) {
  await requireAdmin()
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('team_members')
    .insert([formData])
    .select()
    .single()

  if (error) throw error

  revalidatePath('/admin/team')
  return data
}

export async function updateTeamMember(id: string, formData: TeamMemberFormData) {
  await requireAdmin()
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('team_members')
    .update(formData)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error

  revalidatePath('/admin/team')
  return data
}

export async function deleteTeamMember(id: string) {
  await requireAdmin()
  const supabase = createServerClient()

  const { error } = await supabase
    .from('team_members')
    .delete()
    .eq('id', id)

  if (error) throw error

  revalidatePath('/admin/team')
}
