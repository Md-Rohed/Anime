import Hero from "@/components/Hero";
import PaginationLoader from "@/components/PaginationLoader";

export default async function Home() {
  const data = await fetchAnime();

  return (
    <main className="px-[7.25rem]">
      <Hero />
      
      <PaginationLoader />
    </main>
  );
}