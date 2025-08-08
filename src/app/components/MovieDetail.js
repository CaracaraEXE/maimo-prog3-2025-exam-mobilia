'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

export default function MovieDetail({ id }) {
  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(false);

  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=eb7e3fd7272143562cec959061b5eb32`;

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try{
        const res = await axios.get(API_URL);
        setMovieDetail(res.data);
        setLoading(false);
      }catch(error){
        setError(true);
        alert("No se pudo conseguir tu peli :(");
      };
      
    };

    fetchMovieDetail();
   
  }, [id]);
  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className='grid'>
          <div className='col_6  flex justify-center lg:p-10'>
            <div>
              <Image
                src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
                height={200}
                width={200}
                alt={`${movieDetail.title} poster`}
                className='lg:w-[100%] mx-auto mt-10 lg:mt-0'
              />
            </div>
          </div>
          <div className='col_6 flex flex-col justify-center lg:p-10 px-10'>
            <h1 className='text-4xl font-bold mb-6 lg:text-left text-center text-orange-600'>{movieDetail.title}</h1>
            <p className='mb-10'>{movieDetail.overview}</p>
            {/* 3 Listado de generos */}
            <p className='text-2xl text-orange-500 font-bold'>Genres:</p>
            <ul className='generos mb-10'>
             {movieDetail.genres.map(genre =>
              <li>{genre.name}</li>
             )}
            </ul>

            <div className='flex gap-5'>
              <Link
                className='bg-white rounded-xl p-2 w-[150px] text-black text-center hover:bg-opacity-50'
                href='/'
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
