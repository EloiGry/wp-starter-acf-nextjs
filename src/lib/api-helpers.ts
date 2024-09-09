import { fetchAPI } from "./fetch-api";

export async function getFeaturedMediaById(id: number) {
    const path = 'wp/v2/media';
    const additionalFields = ['source_url', 'alt_text']
    return await fetchAPI(path, id, additionalFields, {}, true)
  }

  export function getSlugFromUrl(url: string) {
    const urlObj = new URL(url);
    
    // Divise le chemin (pathname) en segments
    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    
    // Retourne toujours le dernier segment ou une chaîne vide si aucun slug n'est présent
    return pathParts[pathParts.length - 1] || '';
  }