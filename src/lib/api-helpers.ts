import { fetchAPI } from "./fetch-api";

export async function getFeaturedMediaById(id: number) {
    const path = 'wp/v2/media';
    const additionalFields = ['source_url', 'alt_text']
    return await fetchAPI(path, id, additionalFields, {}, true)
  }

  export function replaceCategoryWithBlog(url: string): string {
    // Utilisation d'une expression régulière pour remplacer 'category' par 'blog'
    return url.replace('/category/', '/blog/');
  }