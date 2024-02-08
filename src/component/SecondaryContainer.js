import React from 'react'
import { useSelector } from 'react-redux';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import MovieCard from './MovieCard';

const SecondaryContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  const movies = useSelector(store=> store.movie?.nowPlayingMovie);
  const popularMovies = useSelector(store=> store.movie?.popularMovies);
  const topRatedMovies = useSelector(store=> store.movie?.topRatedMovies);
  console.log("now",movies);
  console.log("pop",popularMovies);
  console.log("top",topRatedMovies);
  if(!movies) return;

  return (
    <div className='m-4'>
      <h1 className='text-white text-3xl'>Now Playing Movies</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
          {
            movies &&
            movies.map(res=><MovieCard key={res.id} movie={res}/>)            
          }
        </div>
      </div>
      <h1 className='text-white text-3xl'>Top Rated Movies</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
          {
            topRatedMovies &&
            topRatedMovies.map(res=><MovieCard key={res.id} movie={res}/>)            
          }
        </div>
      </div>
      <h1 className='text-white text-3xl'>Popular Movies</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
          {
            popularMovies &&
            popularMovies.map(res=><MovieCard key={res.id} movie={res}/>)            
          }
        </div>
      </div>
    </div>
    
    
  )
}

export default SecondaryContainer;