import React from 'react'
import { Link } from 'react-router-dom'

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import StarshipService from '../../Service/StarshipService';



const StarshipsList = ({ starships }) => {
  const getIdFromUrl = (starship) => {

    const starshipService = new StarshipService();

    const { url } = starship;
    return url.split(starshipService.url)[1].match(/\d+/).join("");
  }

  return (
    <Row>
        <h1 className='py-5 text-center'>Starships</h1>
        {starships.map((starship, index) => (
            <Card  key={index} className='gy-5'>
              <Card.Header>
                <Link to={`/starships/${getIdFromUrl(starship)}`}>{starship.name}</Link>
                <ListGroup>Model: {starship.model}</ListGroup>
              </Card.Header>
              
                <ListGroup variant="flush">
                    <ListGroup.Item>Made by: {starship.manufacturer}</ListGroup.Item>
                </ListGroup>
          </Card>
          ))
        }
    </Row>
  );
};

export default StarshipsList;