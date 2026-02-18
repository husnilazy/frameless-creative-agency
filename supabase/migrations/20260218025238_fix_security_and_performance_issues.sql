/*
  # Fix Security and Performance Issues
  
  1. Add Missing Foreign Key Indexes
  2. Optimize RLS Policies  
  3. Fix contact messages security
  4. Create helper function for admin checks
*/

-- Add missing foreign key indexes
CREATE INDEX IF NOT EXISTS idx_blog_post_tags_tag_id ON blog_post_tags(tag_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author_id ON blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category_id ON blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_media_library_uploaded_by ON media_library(uploaded_by);
CREATE INDEX IF NOT EXISTS idx_project_media_project_id ON project_media(project_id);
CREATE INDEX IF NOT EXISTS idx_projects_created_by ON projects(created_by);

-- Create optimized admin check function
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SET search_path = pg_catalog, public
AS $$
  SELECT COALESCE(
    (SELECT profiles.role IN ('super_admin', 'admin', 'editor')
     FROM profiles
     WHERE profiles.id = (SELECT auth.uid())),
    false
  )
$$;

-- Drop and recreate contact_messages policies to fix security
DROP POLICY IF EXISTS "Users can create contact messages" ON contact_messages;

CREATE POLICY "Public can submit contact messages with validation"
  ON contact_messages FOR INSERT
  TO public
  WITH CHECK (
    email IS NOT NULL
    AND email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$'
    AND first_name IS NOT NULL
    AND first_name != ''
    AND last_name IS NOT NULL
    AND last_name != ''
    AND message IS NOT NULL
    AND message != ''
  );

-- Drop old admin policies and recreate with optimized auth checks
DROP POLICY IF EXISTS "Admins can manage projects" ON projects;
CREATE POLICY "Admins can manage projects"
  ON projects FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admins can manage project media" ON project_media;
CREATE POLICY "Admins can manage project media"
  ON project_media FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admins can manage services" ON services;
CREATE POLICY "Admins can manage services"
  ON services FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admins can manage team members" ON team_members;
CREATE POLICY "Admins can manage team members"
  ON team_members FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admins can manage testimonials" ON testimonials;
CREATE POLICY "Admins can manage testimonials"
  ON testimonials FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admins can manage clients" ON clients;
CREATE POLICY "Admins can manage clients"
  ON clients FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admins can manage blog categories" ON blog_categories;
CREATE POLICY "Admins can manage blog categories"
  ON blog_categories FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admins can manage blog tags" ON blog_tags;
CREATE POLICY "Admins can manage blog tags"
  ON blog_tags FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admins can manage blog posts" ON blog_posts;
CREATE POLICY "Admins can manage blog posts"
  ON blog_posts FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admins can manage blog post tags" ON blog_post_tags;
CREATE POLICY "Admins can manage blog post tags"
  ON blog_post_tags FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admins can manage media library" ON media_library;
CREATE POLICY "Admins can manage media library"
  ON media_library FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admins can manage homepage sections" ON homepage_sections;
CREATE POLICY "Admins can manage homepage sections"
  ON homepage_sections FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admins can view and manage contact messages" ON contact_messages;
CREATE POLICY "Admins can view and manage contact messages"
  ON contact_messages FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admins can manage SEO settings" ON seo_settings;
CREATE POLICY "Admins can manage SEO settings"
  ON seo_settings FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- Fix update_updated_at_column function search path
ALTER FUNCTION update_updated_at_column() SET search_path = pg_catalog, public;