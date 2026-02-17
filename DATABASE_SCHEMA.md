# Database Schema Documentation

Complete database schema for Frameless Creative CMS

## Tables Overview

| Table Name | Description | Records |
|------------|-------------|---------|
| profiles | User profiles with role-based access | Admin users |
| projects | Portfolio projects/works | Portfolio items |
| project_media | Media files attached to projects | Images/Videos |
| services | Services offered | 4-10 services |
| team_members | Team and director profiles | 2-20 members |
| testimonials | Client testimonials and reviews | Unlimited |
| clients | Brand logos and client information | Unlimited |
| blog_posts | Blog articles and content | Unlimited |
| blog_categories | Blog post categories | 5-15 categories |
| blog_tags | Blog post tags | Unlimited |
| blog_post_tags | Many-to-many relationship | Bridge table |
| media_library | Centralized media management | All uploaded files |
| homepage_sections | Dynamic homepage content sections | 5-10 sections |
| contact_messages | Contact form submissions | All inquiries |
| seo_settings | SEO metadata for pages | Per page |

---

## Detailed Schema

### 1. profiles

User profiles with role-based access control.

```sql
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text,
  role user_role DEFAULT 'editor',
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

**Columns:**
- `id` - UUID, links to Supabase auth.users
- `email` - User's email address
- `full_name` - Display name
- `role` - User role (super_admin, admin, editor)
- `avatar_url` - Profile picture URL
- `created_at` - Account creation timestamp
- `updated_at` - Last update timestamp

**Enums:**
```sql
CREATE TYPE user_role AS ENUM ('super_admin', 'admin', 'editor');
```

**Indexes:** Primary key on id

**RLS Policies:**
- Public can view all profiles
- Users can update their own profile

---

### 2. projects

Portfolio projects and showcase items.

```sql
CREATE TABLE projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  client_name text,
  project_date date,
  category text,
  status project_status DEFAULT 'draft',
  featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  thumbnail_url text,
  video_url text,
  views_count integer DEFAULT 0,
  created_by uuid REFERENCES profiles(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

**Columns:**
- `id` - Unique project identifier
- `title` - Project name
- `slug` - URL-friendly version of title
- `description` - Project details
- `client_name` - Client company name
- `project_date` - When project was completed
- `category` - Project type (Commercial, Brand Film, etc.)
- `status` - draft, published, archived
- `featured` - Show on homepage
- `display_order` - Sort order
- `thumbnail_url` - Main project image
- `video_url` - Project video link
- `views_count` - Number of views
- `created_by` - User who created project
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp

**Enums:**
```sql
CREATE TYPE project_status AS ENUM ('draft', 'published', 'archived');
```

**Indexes:**
- idx_projects_status ON status
- idx_projects_featured ON featured
- idx_projects_category ON category

**RLS Policies:**
- Public can view published projects
- Admins can manage all projects

---

### 3. project_media

Media files (images/videos) attached to projects.

```sql
CREATE TABLE project_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  media_type media_type NOT NULL,
  url text NOT NULL,
  thumbnail_url text,
  alt_text text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);
```

**Columns:**
- `id` - Unique media identifier
- `project_id` - Links to projects table
- `media_type` - image or video
- `url` - File URL
- `thumbnail_url` - Video thumbnail
- `alt_text` - Accessibility text
- `display_order` - Sort order
- `created_at` - Upload timestamp

**Enums:**
```sql
CREATE TYPE media_type AS ENUM ('image', 'video');
```

**RLS Policies:**
- Public can view all media
- Admins can manage media

---

### 4. services

Services offered by the agency.

```sql
CREATE TABLE services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  icon text,
  image_url text,
  price_text text,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

**Columns:**
- `id` - Unique service identifier
- `title` - Service name
- `description` - Service details
- `icon` - Icon name or URL
- `image_url` - Service image
- `price_text` - Pricing information (optional)
- `display_order` - Sort order
- `is_active` - Show/hide service
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp

**RLS Policies:**
- Public can view active services
- Admins can manage services

---

### 5. team_members

Team members and directors.

```sql
CREATE TABLE team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  handle text,
  position text,
  bio text,
  photo_url text,
  signature text,
  instagram_url text,
  twitter_url text,
  linkedin_url text,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

**Columns:**
- `id` - Unique member identifier
- `name` - Full name
- `handle` - Social media handle (@username)
- `position` - Job title
- `bio` - Biography
- `photo_url` - Profile picture
- `signature` - Digital signature/initials
- `instagram_url` - Instagram profile link
- `twitter_url` - Twitter profile link
- `linkedin_url` - LinkedIn profile link
- `display_order` - Sort order
- `is_active` - Show/hide member
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp

**RLS Policies:**
- Public can view active members
- Admins can manage members

---

### 6. testimonials

Client testimonials and reviews.

```sql
CREATE TABLE testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_company text,
  client_position text,
  client_photo_url text,
  testimonial_text text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_featured boolean DEFAULT false,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

**Columns:**
- `id` - Unique testimonial identifier
- `client_name` - Client's name
- `client_company` - Company name
- `client_position` - Job title
- `client_photo_url` - Profile picture
- `testimonial_text` - Review content
- `rating` - 1-5 star rating
- `is_featured` - Show on homepage
- `is_active` - Show/hide testimonial
- `display_order` - Sort order
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp

**RLS Policies:**
- Public can view active testimonials
- Admins can manage testimonials

---

### 7. clients

Brand logos and client information.

```sql
CREATE TABLE clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text NOT NULL,
  website_url text,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

**Columns:**
- `id` - Unique client identifier
- `name` - Company name
- `logo_url` - Logo image URL
- `website_url` - Company website
- `display_order` - Sort order
- `is_active` - Show/hide client
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp

**RLS Policies:**
- Public can view active clients
- Admins can manage clients

---

### 8-10. Blog Tables

#### blog_categories

```sql
CREATE TABLE blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);
```

#### blog_tags

```sql
CREATE TABLE blog_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);
```

#### blog_posts

```sql
CREATE TABLE blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text NOT NULL,
  featured_image_url text,
  category_id uuid REFERENCES blog_categories(id),
  author_id uuid REFERENCES profiles(id),
  status post_status DEFAULT 'draft',
  is_featured boolean DEFAULT false,
  views_count integer DEFAULT 0,
  published_at timestamptz,
  seo_title text,
  seo_description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

---

### 11. media_library

Centralized media management.

```sql
CREATE TABLE media_library (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  filename text NOT NULL,
  original_filename text NOT NULL,
  file_path text NOT NULL,
  file_size bigint,
  mime_type text,
  media_type media_type NOT NULL,
  width integer,
  height integer,
  duration integer,
  folder text DEFAULT 'general',
  alt_text text,
  uploaded_by uuid REFERENCES profiles(id),
  created_at timestamptz DEFAULT now()
);
```

**Folders:**
- general
- projects
- team
- blog
- services
- homepage

---

### 12. homepage_sections

Dynamic homepage content.

```sql
CREATE TABLE homepage_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_key text UNIQUE NOT NULL,
  title text,
  subtitle text,
  content text,
  button_text text,
  button_url text,
  image_url text,
  video_url text,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  settings jsonb DEFAULT '{}',
  updated_at timestamptz DEFAULT now()
);
```

**Section Keys:**
- hero
- about
- services
- portfolio
- team
- testimonials
- clients
- cta (call-to-action)

---

### 13. contact_messages

Contact form submissions.

```sql
CREATE TABLE contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  company text,
  project_type text,
  message text NOT NULL,
  is_read boolean DEFAULT false,
  is_responded boolean DEFAULT false,
  notes text,
  created_at timestamptz DEFAULT now()
);
```

---

### 14. seo_settings

SEO metadata for pages.

```sql
CREATE TABLE seo_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_key text UNIQUE NOT NULL,
  meta_title text,
  meta_description text,
  meta_keywords text[],
  og_title text,
  og_description text,
  og_image_url text,
  twitter_card text DEFAULT 'summary_large_image',
  canonical_url text,
  updated_at timestamptz DEFAULT now()
);
```

**Page Keys:**
- home
- about
- portfolio
- contact
- blog
- services

---

## Relationships

```
profiles
  ├── projects (created_by)
  ├── blog_posts (author_id)
  └── media_library (uploaded_by)

projects
  └── project_media (project_id)

blog_categories
  └── blog_posts (category_id)

blog_posts
  └── blog_post_tags
      └── blog_tags

media_library
  (standalone, referenced by URLs in other tables)
```

---

## Indexes

```sql
-- Performance indexes
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_featured ON projects(featured);
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX idx_contact_messages_read ON contact_messages(is_read);
CREATE INDEX idx_media_library_folder ON media_library(folder);
CREATE INDEX idx_media_library_type ON media_library(media_type);
```

---

## Row Level Security (RLS)

All tables have RLS enabled with policies:

1. **Public Read**: Published/active content visible to all
2. **Admin Write**: Only authenticated admins can create/update/delete
3. **User-specific**: Users can only edit their own profiles

---

## Triggers

Automatic `updated_at` timestamp updates on:
- profiles
- projects
- services
- team_members
- testimonials
- clients
- blog_posts
- homepage_sections
- seo_settings

```sql
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

---

This schema provides a complete, scalable foundation for the Frameless Creative CMS.
