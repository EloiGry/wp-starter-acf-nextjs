import PostCard from "@/components/blog/post-card";
import { getPosts } from "@/lib/fetch-posts";

export default async function Blog () {
    const posts = await getPosts();
    return (
        <div className="fade-in">
                {posts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-4 z-0">
                {posts.map((post: any) => (
                <PostCard key={post.id} post={post} />
                ))}
            </div>
            ) : (
            <div className="h-24 w-full border rounded-lg bg-accent/25 flex items-center justify-center">
                <p>No Results Found</p>
            </div>
            )}
        </div>
    )
}