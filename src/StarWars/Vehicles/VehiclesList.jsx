import React from 'react'
import { Link } from 'react-router-dom'

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import VehicleService from '../../Service/VehicleService';



const VehiclesList = ({ vehicles }) => {
  const getIdFromUrl = (vehicle) => {

    const vehicleService = new VehicleService();

    const { url } = vehicle;
    return url.split(vehicleService.url)[1].match(/\d+/).join("");
  }

  return (
    <Row>
        <h1 className='py-5 text-center'>Vehicles</h1>
        {vehicles.map((vehicle, index) => (
            <Card  key={index} className='gy-5'>
              <Card.Header >
                <Link to={`/vehicles/${getIdFromUrl(vehicle)}`}>{vehicle.name}</Link>
                <ListGroup>Model: {vehicle.model}</ListGroup>
              </Card.Header>
              
                <ListGroup variant="flush">
                    <ListGroup.Item>Made by: {vehicle.manufacturer}</ListGroup.Item>
                </ListGroup>
          </Card>
          ))
        }
    </Row>
  );
};

export default VehiclesList;