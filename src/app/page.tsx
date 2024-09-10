import { sectionRenderer } from "@/lib/sections-renderer";
import { getPageBySlug } from "@/lib/get-page-by-slug";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('accueil');
  return {
    title: page[0].title.rendered,
    description: page[0].excerpt.rendered,
  };
}


export default async function Home() {
const page = await getPageBySlug('accueil')
if (page.length === 0) return null;
const contentSections = page[0].acf

  return (
      <div className="fade-in">{sectionRenderer(contentSections)}</div>
  );
}
