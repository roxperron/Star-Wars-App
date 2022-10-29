import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

import Movies from '../StarWars/Movies/Movies';
import MoviesInfo from '../StarWars/Movies/MovieInfo';
import Characters from '../StarWars/Characters/Character';
import CharactersInfo from '../StarWars/Characters/CharacterInfo';
import Vehicles from '../StarWars/Vehicles/Vehicles';
import VehicleInfo from '../StarWars/Vehicles/VehicleInfo';
import Starships from '../StarWars/Starships/Starships';
import StarshipInfo from '../StarWars/Starships/StarshipInfo';
import LoginForm from '../auth/components/LoginForm';
import AppContainer from '../auth/components/AppContainer';
import User from '../auth/components/Users';


const  App = () => {
  return (

    
     <BrowserRouter>
     <AppContainer>
            <Container>
              <User />
                <Routes>
                    <Route path="login" element={<LoginForm />} />
                    <Route path='/' element={<Movies />}/> 
                    <Route path='/movies' element={<Movies />}/>
                    <Route path='/movies/:id' element={<MoviesInfo />} />
                    <Route path='/characters' element={<Characters />} />
                    <Route path='/characters/:id' element={<CharactersInfo />} />
                    <Route path="/vehicles" element={ <Vehicles />} />
                    <Route path="/vehicles/:id" element={ <VehicleInfo />} />
                    <Route path="/starships " element={ <Starships />} />
                    <Route path="/starships/:id" element={ <StarshipInfo />} />
                </Routes>
            </Container>
          </AppContainer>
      </BrowserRouter>

  );
}

export default App;
