import React from 'react';
import { Fragment } from 'react';

import StarshipsList from './StarshipsList';
import useFetchStarship from '../../Hook/useFetchStarships'



const Starships = ( ) => {
const starships = useFetchStarship();
  return (
    <Fragment>
        <StarshipsList starships={starships} />
    </Fragment>
  )
}

export default Starships;
