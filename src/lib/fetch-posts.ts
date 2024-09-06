import { fetchAPI } from "./fetch-api";

export async function getPosts () {
    const path = 'wp/v2/posts';
    const additionalFields = ['id' ,'title', 'date', 'content', 'slug', 'featured_image_details', 'excerpt', 'author', 'categories', 'tags']
    return await fetchAPI(path, '', additionalFields)
}

export async function getPostBySlug (slug: string) {
    const path = 'wp/v2/posts';
    const additionalFields = ['id' ,'title', 'date', 'content', 'slug', 'featured_image_details', 'excerpt', 'author', 'categories', 'tags']
    return await fetchAPI(path, slug, additionalFields)
}

export async function getCategoryById(id: number) {
    const path = 'wp/v2/categories';
    const additionalFields = ['name', 'id']
    return await fetchAPI(path, id, additionalFields, {}, true)
}

export async function getTagsByIds(ids: number[]) {
    const path = 'wp/v2/tags';
    const additionalFields = ['name', 'slug', 'id'];
    
    const tags = await Promise.all(
        ids.map(async (id) => {
            const tag = await fetchAPI(path, id, additionalFields, {}, true);
            return tag.name; 
        })
    );
    
    return tags; 
}

export async function getAuthorById(id: number) {
const path = 'wp/v2/users';
const additionalFields = ['name', 'slug', 'id']
return await fetchAPI(path, id, additionalFields, {}, true)
}

