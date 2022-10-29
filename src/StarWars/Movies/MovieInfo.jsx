import React from 'react'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import MovieService from '../../Service/MovieService';
import CharacterService from '../../Service/CharacterService';
import VehicleService from '../../Service/VehicleService';
import StarshipService from '../../Service/StarshipService';

import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import useGetData from '../../Hook/useGetData';
import CharactersList from '../Characters/CharactersList';
import VehiclesList from '../Vehicles/VehiclesList';
import StarshipsList from '../Starships/StarshipsList';



const MovieInfo = ( ) => {
    const [movie, setMovie] = useState(null);
    const params = useParams();
    
    const movieService = new MovieService(); 
    const characterService = new CharacterService();
    const vehicleService = new VehicleService();
    const starshipService = new StarshipService();

    const characters = useGetData(
        characterService.getCharacterById.bind(characterService),
        movie?.characters
    );

    const vehicles = useGetData(
        vehicleService.getVehicleById.bind(vehicleService),
        movie?.vehicles
    );

    const starships = useGetData(
        starshipService.getStarshipById.bind(starshipService),
        movie?.starships
    );





    useEffect(() => {
        const getMovieById = async (id) => {
            try {
                const response = await movieService.getMovieById(id);
                setMovie(response);
            } catch (error) {
                console.log(error);
                
            }
        }
        
        if (params?.id) {
            getMovieById(params.id);
        }
    }, [params]);






  return (
    movie && (
    <Container>
         <h1 className='py-5 text-center'>Movie's info</h1>
        <Row>
                <Card.Body>
                <Card.Header>{movie.title}</Card.Header>
                <Card.Text>
                    {movie.opening_crawl}
                </Card.Text>
                </Card.Body>
        </Row>
        
      
        <CharactersList characters={characters}  />
        <VehiclesList vehicles={vehicles} />
        <StarshipsList starships={starships} />
        
      

     </Container>
       
        

    )
  );
};

export default MovieInfo;