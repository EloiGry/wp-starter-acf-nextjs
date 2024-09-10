import { getPosts, getPostBySlug, getCategoryById, getAuthorById, getTagsByIds } from "@/lib/fetch-posts";
import { Post } from "@/lib/types";
import { Article } from "@/components/blog/article";

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: post[0].title.rendered,
    description: post[0].excerpt.rendered,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);
    const category = await getCategoryById(post[0].categories[0]);
    const author = await getAuthorById(post[0].author);
    const tags = await getTagsByIds(post[0].tags)

    
    const date = new Date(post[0].date).toLocaleDateString("fr-FR", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    return (
        <div className="fade-in">
        <h1 className="text-center font-semibold text-4xl py-4">
            <span
              dangerouslySetInnerHTML={{ __html: post[0].title.rendered }}
            ></span>
        </h1>
        <hr />
        <div className="flex justify-between items-center text-xs mt-4">
          <p>{category.name}</p>
          <div className="flex gap-2 divide-x divide-dashed"> {tags.map(item => <span className="pl-2" key={item}>{item}</span>)}</div>
          <p>{date}</p>
        </div>
        <Article dangerouslySetInnerHTML={{ __html: post[0].content.rendered }} className="rich-text"/>
        <p className="italic"> {author.name} </p>
        </div>
    )
}

export async function generateStaticParams() {
    const posts = await getPosts();
    
    return posts.map((post: Post) => ({
        slug: post.slug,
      }))
}