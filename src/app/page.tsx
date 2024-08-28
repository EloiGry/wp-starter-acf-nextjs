import { sectionRenderer } from "@/utils/sections-renderer";
import { getPageBySlug } from "@/utils/get-page-by-slug";


export default async function Home() {
const page = await getPageBySlug('accueil')
if (page.length === 0) return null;
const contentSections = page[0].acf

  return (
      <>{sectionRenderer(contentSections)}</>
  );
}
