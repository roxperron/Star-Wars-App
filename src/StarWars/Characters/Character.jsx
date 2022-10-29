import React from 'react';
import { Fragment } from 'react';



import CharacterList from './CharactersList';
import useFetchCharacters from '../../Hook/useFetchCharacters';



const Characters = ( ) => {
const characters = useFetchCharacters();


  return (
    <Fragment>
        <CharacterList characters={characters} title={'Personnages'} />
    </Fragment>
  )
}

export default Characters;
