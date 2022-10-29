import React from 'react'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';


import MovieService from '../../Service/MovieService';
import CharacterService from '../../Service/CharacterService';
import VehicleService from '../../Service/VehicleService';
import StarshipService from '../../Service/StarshipService';

import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import useGetData from '../../Hook/useGetData';
import MoviesList from '../Movies/MoviesList';
import VehiclesList from '../Vehicles/VehiclesList';
import StarshipsList from '../Starships/StarshipsList';



const CharacterInfo = ( ) => {
    const [character, setCharacter] = useState(null);
    const params = useParams();
    
    const movieService = new MovieService(); 
    const characterService = new CharacterService();
    const vehicleService = new VehicleService();
    const starshipService = new StarshipService();

    const movies = useGetData(
        movieService.getMovieById.bind(movieService),
        character?.films
    );

    const vehicles = useGetData(
        vehicleService.getVehicleById.bind(vehicleService),
        character?.vehicles
    );

    const starships = useGetData(
        starshipService.getStarshipById.bind(starshipService),
        character?.starships
    );





    useEffect(() => {
        const getCharacterById = async (id) => {
            try {
                const response = await characterService.getCharacterById(id);
                setCharacter(response);
            } catch (error) {
                console.log(error);
                
            }
        }
        
        if (params?.id) {
            getCharacterById(params.id);
        }
    }, [params]);






  return (
    character && (
    <Container>
         <h1 className='py-5 text-center'>Character's info</h1>
        <Row>
                <Card.Body>
                <Card.Header>Name: {character.name}</Card.Header>
                <Card.Text> 
                    <ListGroup variant="flush">
                        <ListGroup.Item>Birth date: {character.birth_year}</ListGroup.Item>
                        <ListGroup.Item>Eye color: {character.eye_color}</ListGroup.Item>
                        <ListGroup.Item>Hair color: {character.hair_color}</ListGroup.Item>
                        <ListGroup.Item>Mass: {character.mass}</ListGroup.Item>
                        <ListGroup.Item>Skin color: {character.skin_color}</ListGroup.Item>
                    </ListGroup>
                </Card.Text>
                </Card.Body>
        </Row>
        
      
        <MoviesList movies={movies}  />
        <VehiclesList vehicles={vehicles} />
        <StarshipsList starships={starships} />
        
      

     </Container>
       
        

    )
  );
};

export default CharacterInfo;