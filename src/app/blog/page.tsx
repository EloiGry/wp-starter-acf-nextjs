import { getPosts } from "@/lib/fetch-posts";

export default async function Blog () {
    const data = await getPosts()
    console.log(data)
    return (
        <> Test </>
    )
}