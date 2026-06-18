import { blogPosts } from '@/lib/blog-data';
import { getAllCitySlugs } from '@/lib/city-data';

export default function sitemap() {
  const baseUrl = 'https://saurabhbrothers.in';

  // Core pages
  const routes = [
    '',
    '/about-us',
    '/blog',
    '/best-solar-company-uttar-pradesh',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Services
  const services = [
    '/residential',
    '/commercial',
    '/on-grid-solar',
    '/maintenance',
    '/pm-surya-ghar-yojana-up',
  ].map((service) => ({
    url: `${baseUrl}${service}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Blog posts
  const blogs = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // All target cities (dynamically from city-data)
  const cities = getAllCitySlugs().map((slug) => ({
    url: `${baseUrl}/city/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes, ...services, ...blogs, ...cities];
}
