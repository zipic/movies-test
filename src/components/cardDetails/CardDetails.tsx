import { useSelector } from 'react-redux';
import './style.scss';
import { RootState } from '../../redux/store';
import { useParams } from 'react-router';

export const CardDetails = () => {
  const { id } = useParams<{ id: string }>();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const currentMovie = movies.filter(movie => movie.id.toString() === id);


  return (
    <div>
      {currentMovie.map(movie => 
      <div className='movie' key={movie.id}>
        <img className='movie__image' src={movie.image} alt="" />
        <section className='detail'>
          <h1 className='detail__title'>{movie.title}</h1>
          <h2 className='detail__description'>Description:</h2>
          <p className='detail__description-info'>
            {movie.description}
          </p>
          <h2 className='detail__actors'>Actors:</h2>
          <p className='detail__actors-info'>
            {movie.actors.join(', ')}
          </p>
          <h2 className='detail__director'>Director:</h2>
          <p className='detail__director-info'>
            {movie.director}
          </p>
          <h2 className='detail__genre'>Genre:</h2>
          <p className='detail__genre-info'>
            {movie.genre.join(', ')}
          </p>
          <h2 className='detail__rating'>Rating:</h2>
          <p className='detail__rating-info'>
            {movie.rating}
          </p>
        </section>
      </div>
    )}
    </div>
  );
}

export default CardDetails;