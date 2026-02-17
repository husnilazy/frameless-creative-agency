"use server"

import { createServerClient } from '@/lib/supabase/server'

export type UserRole = 'super_admin' | 'admin' | 'editor'

export interface UserProfile {
  id: string
  email: string
  full_name: string | null
  role: UserRole
  avatar_url: string | null
}

export async function getSession() {
  const supabase = createServerClient()
  const { data: { session } } = await supabase.auth.getSession()
  return session
}

export async function getUserProfile(): Promise<UserProfile | null> {
  const supabase = createServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return null

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return profile
}

export async function requireAdmin() {
  const profile = await getUserProfile()

  if (!profile) {
    throw new Error('Unauthorized')
  }

  if (!['super_admin', 'admin', 'editor'].includes(profile.role)) {
    throw new Error('Insufficient permissions')
  }

  return profile
}

export async function checkRole(allowedRoles: UserRole[]) {
  const profile = await getUserProfile()

  if (!profile || !allowedRoles.includes(profile.role)) {
    return false
  }

  return true
}
