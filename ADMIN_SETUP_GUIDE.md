# Frameless Creative CMS - Complete Setup Guide

This guide will help you set up the complete admin CMS system for your Frameless Creative website.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Supabase Setup](#supabase-setup)
3. [Environment Configuration](#environment-configuration)
4. [Database Setup](#database-setup)
5. [Storage Setup](#storage-setup)
6. [Authentication Setup](#authentication-setup)
7. [Creating First Admin User](#creating-first-admin-user)
8. [Running the Application](#running-the-application)
9. [Admin Dashboard Features](#admin-dashboard-features)
10. [Connecting Frontend to Database](#connecting-frontend-to-database)

---

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Supabase account (free tier works)
- Git (optional)

---

## Supabase Setup

### Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in:
   - **Project Name**: `frameless-cms`
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Select closest to your users
   - **Pricing Plan**: Free tier is sufficient to start
5. Click "Create new project"
6. Wait 2-3 minutes for project setup

### Step 2: Get API Keys

1. In your Supabase project dashboard
2. Click "Settings" (gear icon) in the left sidebar
3. Click "API" under Project Settings
4. You'll see:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **Project API keys**:
     - `anon` / `public` key
     - `service_role` / `secret` key

**IMPORTANT**: Keep these keys secure! Never commit them to public repositories.

---

## Environment Configuration

### Step 3: Configure Environment Variables

1. Open `.env.local` in your project root
2. Replace the placeholder values with your Supabase keys:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

**Example:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## Database Setup

### Step 4: Run Database Migrations

The database schema has already been created via the migration system. To verify:

1. Go to your Supabase project dashboard
2. Click "Table Editor" in left sidebar
3. You should see all tables:
   - `profiles`
   - `projects`
   - `project_media`
   - `services`
   - `team_members`
   - `testimonials`
   - `clients`
   - `blog_posts`
   - `blog_categories`
   - `blog_tags`
   - `blog_post_tags`
   - `media_library`
   - `homepage_sections`
   - `contact_messages`
   - `seo_settings`

If tables don't exist, the migration was already applied via Supabase MCP.

---

## Storage Setup

### Step 5: Create Storage Bucket

1. In Supabase dashboard, click "Storage" in left sidebar
2. Click "Create a new bucket"
3. Configure:
   - **Name**: `media`
   - **Public bucket**: ✅ Yes (checked)
   - **File size limit**: 50 MB (adjust as needed)
   - **Allowed MIME types**: Leave empty for all types
4. Click "Create bucket"

### Step 6: Configure Storage Policies

1. Click on your `media` bucket
2. Click "Policies" tab
3. Add these policies:

**Policy 1: Public Read Access**
- Click "New Policy"
- Template: "Allow public read access"
- Policy name: `Public media access`
- Click "Review" then "Save policy"

**Policy 2: Admin Upload**
- Click "New Policy"
- Template: "Allow authenticated uploads"
- Policy name: `Admin upload media`
- Click "Review" then "Save policy"

**Policy 3: Admin Delete**
- Click "New Policy"
- Template: "Allow authenticated deletes"
- Policy name: `Admin delete media`
- Click "Review" then "Save policy"

---

## Authentication Setup

### Step 7: Configure Auth Settings

1. In Supabase dashboard, click "Authentication" → "Providers"
2. Ensure "Email" provider is enabled
3. Configure email settings:
   - Click "Email" provider
   - **Enable Email provider**: ✅ Yes
   - **Confirm email**: ❌ No (for admin-only system)
   - Click "Save"

### Step 8: Configure Auth Policies

Go to "Authentication" → "Policies":
- **Minimum password length**: 8 characters
- **Password requirements**: Enable at least one uppercase, lowercase, and number
- **JWT expiry**: 3600 seconds (1 hour)
- Click "Save"

---

## Creating First Admin User

### Step 9: Create Admin Account

**Option A: Using Supabase Dashboard**

1. Go to "Authentication" → "Users"
2. Click "Add user" → "Create new user"
3. Fill in:
   - **Email**: your-email@example.com
   - **Password**: Choose a strong password
   - **Auto Confirm User**: ✅ Yes
4. Click "Create user"
5. Copy the User ID (UUID)

**Option B: Using SQL Editor**

1. Go to "SQL Editor" in Supabase dashboard
2. Click "New query"
3. Paste this SQL (replace email/password):

```sql
-- Create admin user
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'admin@frameless.com',
  crypt('YourSecurePassword123!', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  FALSE,
  '',
  '',
  '',
  ''
) RETURNING id;
```

4. Run the query
5. Copy the returned user ID

### Step 10: Create Admin Profile

1. In "SQL Editor", create a new query
2. Paste this SQL (replace USER_ID with the ID from previous step):

```sql
-- Create admin profile
INSERT INTO profiles (
  id,
  email,
  full_name,
  role
) VALUES (
  'USER_ID_HERE',  -- Replace with actual user ID
  'admin@frameless.com',
  'Admin User',
  'super_admin'
);
```

3. Run the query

---

## Running the Application

### Step 11: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 12: Run Development Server

```bash
npm run dev
# or
yarn dev
```

The application will start at `http://localhost:3000`

### Step 13: Access Admin Dashboard

1. Open browser to `http://localhost:3000/auth/login`
2. Enter your admin credentials
3. You'll be redirected to `http://localhost:3000/admin`

---

## Admin Dashboard Features

### Available Admin Pages

1. **Dashboard** (`/admin`) - Overview statistics
2. **Portfolio** (`/admin/portfolio`) - Manage projects
3. **Services** (`/admin/services`) - Manage services
4. **Team Members** (`/admin/team`) - Manage team/directors
5. **Testimonials** (`/admin/testimonials`) - Manage testimonials
6. **Clients** (`/admin/clients`) - Manage brand logos
7. **Blog** (`/admin/blog`) - Manage blog posts
8. **Media Library** (`/admin/media`) - Upload and manage media
9. **Contact Messages** (`/admin/contact`) - View form submissions
10. **Homepage** (`/admin/homepage`) - Edit homepage sections
11. **SEO Settings** (`/admin/seo`) - Manage SEO metadata
12. **Settings** (`/admin/settings`) - System settings

### Key Features

#### Portfolio Management
- Add new projects with details
- Upload multiple images per project
- Add video URLs
- Set project status (draft/published)
- Mark projects as featured
- Reorder projects with drag & drop
- Track project views

#### Media Library
- Upload images and videos
- Organize in folders (projects, team, blog, etc.)
- Search and filter media
- View file details (size, dimensions)
- Replace media without breaking links
- Bulk operations

#### Blog Management
- Rich text editor for content
- Categories and tags
- SEO metadata per post
- Draft/publish workflow
- Featured posts
- View counts

#### Contact Management
- View all submissions
- Mark as read/unread
- Mark as responded
- Add internal notes
- Delete messages
- Filter by status

---

## Connecting Frontend to Database

### Step 14: Update Frontend Components

The existing frontend needs to be connected to fetch dynamic data. Here's how:

#### Homepage - Portfolio Section

Replace static data with database query:

```typescript
// app/page.tsx
import { createServerClient } from '@/lib/supabase/server'

async function getPortfolio() {
  const supabase = createServerClient()

  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .eq('status', 'published')
    .order('display_order', { ascending: true })
    .limit(6)

  return projects || []
}

export default async function HomePage() {
  const projects = await getPortfolio()

  // Use projects data in your portfolio section
  // ...
}
```

#### Services Section

```typescript
async function getServices() {
  const supabase = createServerClient()

  const { data: services } = await supabase
    .from('services')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  return services || []
}
```

#### Team/Directors Section

```typescript
async function getTeamMembers() {
  const supabase = createServerClient()

  const { data: team } = await supabase
    .from('team_members')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  return team || []
}
```

#### Clients/Brands Marquee

```typescript
async function getClients() {
  const supabase = createServerClient()

  const { data: clients } = await supabase
    .from('clients')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  return clients || []
}
```

#### Contact Form Submission

```typescript
// app/actions/contact.ts
'use server'

export async function submitContactForm(formData: FormData) {
  const supabase = createServerClient()

  const data = {
    first_name: formData.get('firstName') as string,
    last_name: formData.get('lastName') as string,
    email: formData.get('email') as string,
    company: formData.get('company') as string,
    project_type: formData.get('projectType') as string,
    message: formData.get('message') as string,
  }

  const { error } = await supabase
    .from('contact_messages')
    .insert([data])

  if (error) throw error

  return { success: true }
}
```

---

## Seeding Initial Data

### Step 15: Add Sample Data (Optional)

To populate your database with sample data:

1. Go to Supabase "SQL Editor"
2. Run these queries:

```sql
-- Add sample services
INSERT INTO services (title, description, display_order, is_active) VALUES
('Company Profile Videos', 'Showcase your company with storytelling visuals.', 1, true),
('Short Films', 'Bring ideas to life with cinematic narratives.', 2, true),
('Digital & Commercial Ads', 'Impactful ads for brands and products.', 3, true),
('Music Videos', 'Visuals that amplify your music.', 4, true);

-- Add sample team members
INSERT INTO team_members (name, handle, position, display_order, is_active) VALUES
('Husni Lazy', '@husnilazy', 'Director & Creative Lead', 1, true),
('Wildan Allaam', '@wildanallaam', 'Director & Cinematographer', 2, true);

-- Add sample clients
INSERT INTO clients (name, logo_url, display_order, is_active) VALUES
('Unsiq', '/logos/unsiq-white.png', 1, true),
('Doss', '/logos/doss-white.png', 2, true),
('BI', '/logos/bi-white.png', 3, true),
('JNE', '/logos/jne-white.png', 4, true),
('WWF', '/logos/wwf-white.png', 5, true);

-- Add sample homepage sections
INSERT INTO homepage_sections (section_key, title, subtitle, is_active, display_order) VALUES
('hero', 'Frameless Creative Media Agency', 'Crafting stories through Film, Ads, Music Videos & More', true, 1),
('about', 'About Us', 'We are a collective of creative minds', true, 2);

-- Add SEO settings for homepage
INSERT INTO seo_settings (page_key, meta_title, meta_description) VALUES
('home', 'Frameless Creative Media Agency', 'We craft visual stories that transcend boundaries and inspire action');
```

---

## Security Best Practices

1. **Never commit .env.local** - Keep it in .gitignore
2. **Use Row Level Security (RLS)** - Already configured
3. **Rotate keys regularly** - Change service role key periodically
4. **Limit admin users** - Only create accounts for trusted personnel
5. **Monitor access** - Check Supabase logs regularly
6. **Backup database** - Use Supabase's backup features

---

## Troubleshooting

### Common Issues

**Issue: "Invalid API key"**
- Solution: Double-check your .env.local file has correct keys
- Restart dev server after changing .env.local

**Issue: "User not authorized"**
- Solution: Ensure user has admin role in profiles table
- Check RLS policies are active

**Issue: "Cannot connect to Supabase"**
- Solution: Verify project URL is correct
- Check internet connection
- Ensure Supabase project is active

**Issue: "Upload failed"**
- Solution: Check storage bucket exists
- Verify bucket is public
- Check file size limits

---

## Next Steps

1. ✅ Complete setup following this guide
2. ✅ Create your first admin user
3. ✅ Log in to admin dashboard
4. ✅ Add your portfolio projects
5. ✅ Upload media files
6. ✅ Update services and team info
7. ✅ Connect frontend components to database
8. ✅ Test all functionality
9. ✅ Deploy to production (Vercel/Netlify)
10. ✅ Set up automated backups

---

## Support & Resources

- **Supabase Documentation**: https://supabase.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **Supabase Discord**: https://discord.supabase.com

---

## Production Deployment

### Deploying to Vercel

1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Deploying to Netlify

1. Push code to GitHub
2. Connect to Netlify
3. Add environment variables
4. Set build command: `npm run build`
5. Set publish directory: `.next`
6. Deploy

---

**Congratulations!** Your Frameless Creative CMS is now fully set up and ready to use.
