
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import MovieService from '../../Service/MovieService';

const MoviesList = ({ movies }) => {


  const getIdFromUrl = (movie) => {
  

    const { url } = movie;
    return url.match(/\d+/).join("");
  }

  return (
    <Row>
        {movies.map((movie, index) => (
            <Card  key={index} className='gy-5'>
              <Card.Header >
                <Link to={`/movies/${getIdFromUrl(movie)}`}>{movie.title}</Link>
              </Card.Header>
              
                <ListGroup variant="flush">
                    <ListGroup.Item>{movie.episode_id}th Film</ListGroup.Item>
                    <ListGroup.Item>Releasedate: {movie.release_date}</ListGroup.Item>
                </ListGroup>
          </Card>
          ))
        }
    </Row>
 
  );
};

export default MoviesList;