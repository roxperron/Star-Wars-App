import React from 'react'
import { Link } from 'react-router-dom'

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import CharacterService from '../../Service/CharacterService';



const CharactersList = ({ characters }) => {
  const characterService = new CharacterService();

  const getIdFromUrl = (character) => {
    const { url } = character;
    return url.split(characterService.url)[1].match(/\d+/).join("");
  }


  return (
    <Row>
        <h1 className='py-5 text-center'>Characters</h1>
        {characters.map((character, index) => (
            <Card  key={index} className='gy-5'>
              <Card.Header >
                <Link to={`/characters/${getIdFromUrl(character)}`}>{character.name}</Link>
              </Card.Header>
              
                <ListGroup variant="flush">
                    <ListGroup.Item>Birth date: {character.birth_year}</ListGroup.Item>
                </ListGroup>
          </Card>
          ))
        }
    </Row>
  );
};

export default CharactersList;