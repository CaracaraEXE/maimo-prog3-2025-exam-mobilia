import MovieDetail from "@/app/components/MovieDetail";

export default function page({params}) {
  const { id } = params;
  return (
    <MovieDetail id={id} />
  )
}
