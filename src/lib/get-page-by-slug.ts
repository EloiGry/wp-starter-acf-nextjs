import { fetchAPI } from "../lib/fetch-api";

const fieldsConfig: { [key: string]: string[] } = {
  "accueil": ['acf'],
  "a-propos": ['acf']
};


export async function getPageBySlug(slug: string) {
  const path = 'wp/v2/pages';
  const additionalFields = fieldsConfig[slug]
  return await fetchAPI(path, slug, additionalFields);
} 