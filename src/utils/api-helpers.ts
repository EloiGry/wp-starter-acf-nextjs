export function getWordpressURL(path = '') {
    return `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'http://localhost:8881/wp-json/wp/v2'}${path}`;
}
