import MoviesGridContainer from "@/app/components/MoviesGridContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="mb-8 text-3xl lg:text-3xl">Robert Movies night show</h1>
      <MoviesGridContainer />
    </main>
  );
}
