'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

export default function MovieDetail({ id }) {
  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const API_URL = ``;

  useEffect(() => {
    const fetchMovieDetail = async () => {
      // 1B. Completar esta función
      
    };
   
  }, [id]);
  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className='grid'>
          <div className='col_6  flex justify-center p-10'>
            <div className='relative w-[500px] h-[500px]'>
              <Image
                src={`https://image.tmdb.org/t/p/original/`}
                fill={true}
                alt={''}
              />
            </div>
          </div>
          <div className='col_6 flex flex-col justify-center p-10'>
            <h1 className='text-2xl font-bold mb-8'>Title</h1>
            <p className='mb-10'>Overview</p>
            {/* 3 Listado de generos */}
            <ul className='generos mb-10'>
             
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
