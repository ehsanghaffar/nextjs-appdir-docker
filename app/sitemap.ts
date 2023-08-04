import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://denizpaz.ir',
      lastModified: new Date(),
    },
    {
      url: 'https://denizpaz.ir/about',
      lastModified: new Date(),
    },
    {
      url: 'https://denizpaz.ir/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://denizpaz.ir/recipes',
      lastModified: new Date(),
    },
  ]
}