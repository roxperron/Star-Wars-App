import React from 'react'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';


import MovieService from '../../Service/MovieService';
import CharacterService from '../../Service/CharacterService';
import VehicleService from '../../Service/VehicleService';


import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import useGetData from '../../Hook/useGetData';
import MoviesList from '../Movies/MoviesList';
import CharactersList from '../Characters/CharactersList';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';




const VehiculeInfo = ( ) => {
    const [vehicle, setVehicle] = useState(null);
    const params = useParams();
    
    const movieService = new MovieService(); 
    const characterService = new CharacterService();
    const vehicleService = new VehicleService();


    const movies = useGetData(
        movieService.getMovieById.bind(movieService),
        vehicle?.films
    );

    const characters = useGetData(
        characterService.getCharacterById.bind(characterService),
        vehicle?.pilots
    );

  


    useEffect(() => {
        const getVehicleById = async (id) => {
            try {
                const response = await vehicleService.getVehicleById(id);
                setVehicle(response);
            } catch (error) {
                console.log(error);
                
            }
        }
        
        if (params?.id) {
            getVehicleById(params.id);
        }
    }, [params]);






  return (
   vehicle && (
    <Container>
         <h1 className='py-5 text-center'>Vehicle's info</h1>
        <Row>
                <Card.Body>
                <Card.Header>Name: {vehicle.name}</Card.Header>
                    <ListGroup> 
                        <ListGroupItem>Cargo capacity: {vehicle.cago_capacity} </ListGroupItem> 
                        <ListGroup.Item>Consumanbles: {vehicle.consumalbes}</ListGroup.Item>
                        <ListGroup.Item>Crew: {vehicle.crew}</ListGroup.Item>
                        <ListGroup.Item>Max Atmosphering speed: {vehicle.max_atmosphering_speed}</ListGroup.Item>
                        <ListGroup.Item>Passengers: {vehicle.passengers}</ListGroup.Item>
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

export default VehiculeInfo;