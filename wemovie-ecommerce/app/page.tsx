import { ListFilm } from "@/components/list-film";

export default async function Home() {
  return (
    <main className="w-full px-6">
      <div className="max-w-7xl mx-auto flex items-center my-4 justify-between">
        <ListFilm />
      </div>
    </main>
  );
}
