import { fetchAPI } from "./fetch-api";

const fieldsConfig: { [key: string]: string[] } = {
    "header": ['url', 'title', 'childitems'],
    "footer": ['url', 'title', 'childitems'],
  };
  

export async function getMenuBySlug(slug: string) {
    const path = 'custom/v1/menu';
    const additionalFields = fieldsConfig[slug]
    return await fetchAPI(path, slug, additionalFields, {}, true);
} 