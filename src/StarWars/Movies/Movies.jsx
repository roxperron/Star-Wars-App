import React from 'react';
import { Fragment } from 'react';

import useFetchMovies from '../../Hook/useFetchMovies';

import MoviesList from './MoviesList';




const Movies = ( ) => {
const movies = useFetchMovies();


  return (
    <Fragment>
        <MoviesList movies={movies} />
    </Fragment>
  )
}

export default Movies;

