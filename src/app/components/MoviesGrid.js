import Card from '@/app/components/Card';

export default function MoviesGrid({ movies, loading }) {
  return (
    <div className='grid grid-cols-12'>
      {!loading &&
        movies.map(movie => 
          <Card movie={movie}/>
        )
        
      }
      {loading && <span>Tu peli no se cargó aún...</span>}
    </div>
  );
}
