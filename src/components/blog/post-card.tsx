import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/types";
import { cn } from "@/lib/utils";

import { getCategoryById } from "@/lib/fetch-posts";

export default async function PostCard({ post }: { post: Post }) {
    const date = new Date(post.date).toLocaleDateString("fr-FR", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const category = await getCategoryById(post.categories[0]);

    return (
        <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "border p-4 bg-accent/30 rounded-lg group flex justify-between flex-col not-prose gap-8",
        "hover:bg-accent/75 transition-all"
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="h-48 w-full overflow-hidden relative rounded-md border flex items-center justify-center">
        <img
                      src="https://placehold.co/400x200"
                      alt="Feature 1"
                      width="300"
                      height="200"
                      className="h-48 w-full object-cover object-center"
                      style={{ aspectRatio: "400/200", objectFit: "cover" }}
                    />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          className="text-xl text-primary font-medium group-hover:underline decoration-muted-foreground underline-offset-4 decoration-dotted transition-all"
        ></div>
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{
            __html:
              post.excerpt.rendered.split(" ").slice(0, 12).join(" ").trim() +
              "...",
          }}
        ></div>
      </div>

      <div className="flex flex-col gap-4">
        <hr />
        <div className="flex justify-between items-center text-xs">
          <p>{category.name}</p>
          <p>{date}</p>
        </div>
      </div>
    </Link>
    )
}