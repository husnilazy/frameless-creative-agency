# Frameless Creative - Complete CMS System

A full-featured Content Management System (CMS) built for Frameless Creative Media Agency. Manage all website content dynamically without touching code.

## 🎯 Project Overview

This project transforms the existing Frameless Creative website into a fully dynamic, database-driven platform with a comprehensive admin dashboard.

**Key Achievement**: Zero changes to existing UI/frontend design while adding complete backend CMS functionality.

## ✨ Features

### Admin Dashboard
- Modern, responsive admin interface
- Role-based access control (Super Admin / Admin / Editor)
- Real-time statistics and analytics
- Activity tracking and recent updates

### Content Management

#### Portfolio Management
- ✅ Create, edit, delete projects
- ✅ Multiple images per project
- ✅ Video integration
- ✅ Project categories
- ✅ Draft/published workflow
- ✅ Featured projects
- ✅ View tracking
- ✅ Drag & drop reordering

#### Services Management
- ✅ CRUD operations for services
- ✅ Service descriptions and pricing
- ✅ Active/inactive toggle
- ✅ Custom ordering

#### Team Management
- ✅ Team member profiles
- ✅ Director information
- ✅ Social media links
- ✅ Bio and position
- ✅ Profile photos
- ✅ Digital signatures

#### Media Library
- ✅ Centralized media management
- ✅ Upload images and videos
- ✅ Folder organization
- ✅ Search and filter
- ✅ File details (size, dimensions)
- ✅ Alt text for accessibility
- ✅ Bulk operations

#### Blog System
- ✅ Rich text editor
- ✅ Categories and tags
- ✅ SEO metadata per post
- ✅ Featured images
- ✅ Draft/publish workflow
- ✅ View counting
- ✅ Author attribution

#### Client/Brand Management
- ✅ Brand logo uploads
- ✅ Client information
- ✅ Active/inactive status
- ✅ Display ordering

#### Contact Management
- ✅ Form submission storage
- ✅ Read/unread status
- ✅ Response tracking
- ✅ Internal notes
- ✅ Email notifications (can be added)

#### Homepage Control
- ✅ Edit hero section
- ✅ Manage all homepage sections
- ✅ Dynamic content blocks
- ✅ Image/video uploads

#### SEO Management
- ✅ Page-level SEO metadata
- ✅ Meta titles and descriptions
- ✅ OpenGraph settings
- ✅ Twitter card configuration
- ✅ Canonical URLs

## 🏗️ Tech Stack

### Frontend
- **Next.js 14** - App Router
- **React 18** - UI components
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **shadcn/ui** - UI components
- **Lucide React** - Icons

### Backend
- **Supabase** - Database + Auth + Storage
- **PostgreSQL** - Relational database
- **Row Level Security** - Data security
- **Server Actions** - Data mutations
- **Edge Functions** - Serverless functions

### Authentication
- **Supabase Auth** - User authentication
- **JWT** - Session management
- **Role-based Access** - Permission system

## 📁 Project Structure

```
frameless-creative/
├── app/
│   ├── actions/              # Server actions for data operations
│   │   ├── projects.ts
│   │   ├── services.ts
│   │   ├── team.ts
│   │   ├── contact.ts
│   │   └── media.ts
│   ├── admin/                # Admin dashboard pages
│   │   ├── layout.tsx       # Admin layout with sidebar
│   │   ├── page.tsx         # Dashboard home
│   │   ├── portfolio/       # Portfolio management
│   │   ├── services/        # Services management
│   │   ├── team/            # Team management
│   │   ├── blog/            # Blog management
│   │   ├── media/           # Media library
│   │   ├── contact/         # Contact messages
│   │   ├── homepage/        # Homepage editor
│   │   └── seo/             # SEO settings
│   ├── auth/                # Authentication pages
│   │   └── login/
│   ├── page.tsx             # Public homepage
│   └── layout.tsx           # Root layout
├── components/
│   └── ui/                  # Reusable UI components
├── lib/
│   ├── supabase/
│   │   ├── client.ts        # Client-side Supabase client
│   │   └── server.ts        # Server-side Supabase client
│   ├── auth/
│   │   └── session.ts       # Authentication helpers
│   └── utils.ts
├── public/                  # Static assets
├── .env.local              # Environment variables
├── middleware.ts           # Route protection
├── package.json
├── ADMIN_SETUP_GUIDE.md   # Setup instructions
├── DATABASE_SCHEMA.md     # Database documentation
└── README_CMS.md          # This file
```

## 🗄️ Database Schema

### Core Tables
- **profiles** - Admin user profiles with roles
- **projects** - Portfolio projects
- **project_media** - Project images/videos
- **services** - Service offerings
- **team_members** - Team/director profiles
- **testimonials** - Client reviews
- **clients** - Brand logos
- **blog_posts** - Blog articles
- **blog_categories** - Blog categories
- **blog_tags** - Blog tags
- **media_library** - Centralized media
- **homepage_sections** - Dynamic homepage
- **contact_messages** - Form submissions
- **seo_settings** - SEO metadata

See `DATABASE_SCHEMA.md` for complete details.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3. Set Up Supabase

Follow the complete guide in `ADMIN_SETUP_GUIDE.md`

### 4. Run Development Server

```bash
npm run dev
```

Visit:
- **Website**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin
- **Login**: http://localhost:3000/auth/login

## 🔐 Security Features

### Row Level Security (RLS)
All database tables have RLS enabled:
- Public can view published content
- Only authenticated admins can modify data
- Users can only edit their own profiles

### Authentication
- Supabase Auth with email/password
- JWT session management
- Role-based permissions
- Protected admin routes via middleware

### Data Validation
- Form validation on client and server
- Type-safe TypeScript throughout
- SQL injection prevention
- XSS protection

## 📝 Usage Guide

### Creating Your First Admin User

1. Go to Supabase Dashboard → Authentication → Users
2. Click "Add user" → "Create new user"
3. Enter email and password
4. Go to SQL Editor and run:

```sql
INSERT INTO profiles (id, email, full_name, role)
VALUES (
  'USER_ID_FROM_AUTH_USERS',
  'admin@frameless.com',
  'Admin User',
  'super_admin'
);
```

### Adding Portfolio Projects

1. Log in to `/admin`
2. Navigate to Portfolio
3. Click "Add Project"
4. Fill in project details:
   - Title, description
   - Client name
   - Category
   - Upload images/videos
5. Set status to "Published"
6. Save

### Managing Media

1. Go to Media Library
2. Click "Upload Files"
3. Select images/videos
4. Choose folder (projects, team, blog, etc.)
5. Add alt text for accessibility
6. Use media URLs in other content

### Connecting Frontend to Database

The frontend automatically fetches from Supabase:

```typescript
// Example: Fetch portfolio for homepage
const { data: projects } = await supabase
  .from('projects')
  .select('*')
  .eq('status', 'published')
  .eq('featured', true)
  .order('display_order')
```

## 🎨 Customization

### Adding New Content Types

1. Create migration in Supabase
2. Add RLS policies
3. Create server actions in `app/actions/`
4. Build admin page in `app/admin/`
5. Add to navigation in admin layout

### Styling

All styling uses Tailwind CSS. Modify:
- `app/globals.css` - Global styles
- `tailwind.config.ts` - Theme configuration
- Individual components - Component-specific styles

## 📊 Admin Roles

### Super Admin
- Full system access
- User management
- All CRUD operations
- System settings

### Admin
- Content management
- Media uploads
- Blog publishing
- View analytics

### Editor
- Create/edit content
- Cannot publish
- Cannot delete
- Limited access

## 🛠️ Development

### Adding New Features

1. Plan database changes
2. Create migration
3. Write server actions
4. Build admin interface
5. Update frontend if needed
6. Test thoroughly

### Best Practices

- Always use server actions for mutations
- Validate data on both client and server
- Use TypeScript types
- Follow Next.js App Router patterns
- Maintain RLS policies
- Write descriptive commit messages

## 🐛 Troubleshooting

### Common Issues

**Can't log in**
- Check Supabase credentials in `.env.local`
- Verify user has admin role in profiles table
- Clear browser cache

**Upload fails**
- Check storage bucket exists and is public
- Verify file size limits
- Check file type restrictions

**Data not showing**
- Confirm RLS policies allow read access
- Check item status is "published"
- Verify database connection

See `ADMIN_SETUP_GUIDE.md` for more troubleshooting.

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production

```env
NEXT_PUBLIC_SUPABASE_URL=your_production_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_service_role_key
```

## 🔄 Updates & Maintenance

### Database Backups
- Supabase automatically backs up daily
- Export manually via Dashboard → Database → Backups
- Store backups securely off-site

### Monitoring
- Check Supabase Dashboard regularly
- Monitor API usage
- Review error logs
- Track storage usage

### Updates
- Keep dependencies updated
- Review Supabase changelog
- Test updates in development first

## 📚 Documentation

- **Setup Guide**: `ADMIN_SETUP_GUIDE.md`
- **Database Schema**: `DATABASE_SCHEMA.md`
- **Supabase Docs**: https://supabase.com/docs
- **Next.js Docs**: https://nextjs.org/docs

## 🤝 Support

For issues or questions:
1. Check documentation first
2. Review Supabase logs
3. Consult Next.js documentation
4. Search GitHub issues

## 📄 License

Private project for Frameless Creative Media Agency.

## 🎉 Success!

You now have a fully functional CMS system that:
- ✅ Manages all website content
- ✅ Provides secure admin access
- ✅ Handles media uploads
- ✅ Supports multiple users with roles
- ✅ Maintains the existing frontend design
- ✅ Scales with your business

**Your website is now dynamic and easy to manage!**
