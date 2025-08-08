import Image from 'next/image';
import Link from 'next/link';
export default function Card({movie}) {
  return (
       <div
        key={movie.id}
        className='lg:col-span-3 col-span-6 flex flex-col justify-center items-center gap-3 bg-white p-4 rounded-lg text-black'
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          width={500}
          height={200}
          alt={`${movie.title} poster`}
          className='rounded-lg'
        />
        <h2 className='text-2xl text-center font-bold'>{movie.title}</h2>
        <Link href={`/movie/${movie.id}`} className='hover:text-orange-600'>Ver detalle</Link>
      </div>
  )
}
