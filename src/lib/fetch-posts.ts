import { fetchAPI } from "./fetch-api";

export async function getPosts () {
    const path = 'wp/v2/posts';
    const additionalFields = ['title', 'content', 'slug', 'featured_image_details', 'excerpt']
    return await fetchAPI(path, '', additionalFields)
}