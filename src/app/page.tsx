import { sectionRenderer } from "@/lib/sections-renderer";
import { getPageBySlug } from "@/lib/get-page-by-slug";


export default async function Home() {
const page = await getPageBySlug('accueil')
if (page.length === 0) return null;
const contentSections = page[0].acf

  return (
      <div className="fade-in">{sectionRenderer(contentSections)}</div>
  );
}
