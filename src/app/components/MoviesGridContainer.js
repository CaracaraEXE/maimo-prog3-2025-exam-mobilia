'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MoviesGrid from '@/app/components/MoviesGrid';

const API_URL = ``;

export default function MoviesGridContainer() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      // 1A. Completar esta función

    };
    
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && <MoviesGrid movies={movies} loading={loading} />}
    </div>
  );
}
