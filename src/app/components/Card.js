import Image from 'next/image';
import Link from 'next/link';
export default function Card({movie}) {
  return (
       <div
        key={movie.id}
        className='col_3 flex flex-col justify-center items-center gap-3 bg-white p-4 rounded-lg text-black'
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/`}
          width={500}
          height={200}
          alt={''}
          className='rounded-lg'
        />
        <h2>titulo</h2>
        <Link href={``}>Ver detalle</Link>
      </div>
  )
}
