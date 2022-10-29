import React from 'react'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';


import MovieService from '../../Service/MovieService';
import CharacterService from '../../Service/CharacterService';
import StarshipService from '../../Service/StarshipService';


import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import useGetData from '../../Hook/useGetData';
import MoviesList from '../Movies/MoviesList';
import CharactersList from '../Characters/CharactersList';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';





const StarshipInfo = ( ) => {
    const [starship, setStarship] = useState(null);
    const params = useParams();
    
    const movieService = new MovieService(); 
    const characterService = new CharacterService();
    const starshipService = new StarshipService();


    const movies = useGetData(
        movieService.getMovieById.bind(movieService),
        starship?.films
    );

    const characters = useGetData(
        characterService.getCharacterById.bind(characterService),
        starship?.pilots
    );

  


    useEffect(() => {
        const getStarshipById = async (id) => {
            try {
                const response = await starshipService.getStarshipById(id);
                setStarship(response);
            } catch (error) {
                console.log(error);
                
            }
        }
        
        if (params?.id) {
            getStarshipById(params.id);
        }
    }, [params]);






  return (
   starship && (
    <Container>
         <h1 className='py-5 text-center'>Starship's info</h1>
        <Row>
                <Card.Body>
                <Card.Header>Name: {starship.name}</Card.Header>
                    <ListGroup> 
                        <ListGroupItem>Cargo capacity: {starship.cago_capacity} </ListGroupItem> 
                        <ListGroup.Item>Consumables: {starship.consumalbes}</ListGroup.Item>
                        <ListGroup.Item>Crew: {starship.crew}</ListGroup.Item>
                        <ListGroup.Item>Max Atmosphering speed: {starship.max_atmosphering_speed}</ListGroup.Item>
                        <ListGroup.Item>Passengers: {starship.passengers}</ListGroup.Item>
                    </ListGroup>
                <Card.Text> 
                    <ListGroup variant="flush">
                       
                    </ListGroup>
                </Card.Text>
                </Card.Body>
        </Row>
        
      
        <MoviesList movies={movies}  />
        <CharactersList characters={characters} />
        
      

     </Container>
       
        

    )
  );
};

export default StarshipInfo;