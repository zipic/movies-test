import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { SyntheticEvent, useEffect } from 'react';
import { Movie } from '../../interfaces/movies';
import {  fetchMovies, removeMovie } from '../../redux/movieSlice';
import { RootState } from '../../redux/store';
import { toggleFavorite } from '../../redux/favoriteSlice';
import { Link, useLocation } from 'react-router-dom';
import { setEdit, setMovieId } from '../../redux/addOrEditSlice';

type Props = {
movies: Movie[]
}

export const Card: React.FC<Props> = ({ movies }) => {
const dispatch = useDispatch();
const moviesList = useSelector((state: RootState) => state.movies.movies);
const input = useSelector((state: RootState) => state.input.text);
const favoriteMovies = useSelector((state: RootState) => state.favorite.favoriteMovies);
const altImage = 'https://images.freeimages.com/images/large-previews/5eb/movie-clapboard-1184339.jpg?fmt=webp&w=500';
const currentUrl = useLocation();
const favoirite = currentUrl.pathname === '/favorites';

useEffect(() => {
dispatch(fetchMovies() as any);
}, [dispatch]);

function addDefaultSrc(e: SyntheticEvent<HTMLImageElement, Event>) {
e.currentTarget.src = altImage;
}

const filteredMovies = input
? moviesList.filter((movie: Movie) => movie.title.toLowerCase().includes(input.toLowerCase()))
: movies;

const addFavorite = (movie: Movie) => {
dispatch(toggleFavorite(movie));
}

const isExict = (id: number) => {
return favoriteMovies.some(movie => movie.id === id);
}

const handleRemove = (movie: Movie) => {
dispatch(removeMovie(movie));
}

const handlerEdit = (movie: Movie) => {
dispatch(setEdit(true));
dispatch(setMovieId(movie.id))
window.scrollTo({
  top: 0,
  behavior: 'smooth'
})
}

return (
<div className='movies'>
  {filteredMovies.map((movie: Movie) => (
    <div className='card' key={movie.id}>
      <Link className='card__link' to={`/${movie.id}`}>
      <img 
        className='card__image' 
        src={movie.image} 
        alt={movie.title}
        onError={addDefaultSrc}
      />
      <p 
        className='card__title'
      >
        {movie.title}
      </p>
        <p 
          className='card__rating'
        >
          {movie.rating}
        </p>
        <p 
        className='card__date'
      >
        {movie.release_date}
      </p>
      </Link>
        <div className='buttons'>
          <button 
            className={isExict(movie.id)? 'buttons__added': 'buttons__add'}
            onClick={() => addFavorite(movie)}
          >
            {isExict(movie.id) ? 'remove from ' : 'add to '} favorits
          </button>
          <button 
            className='buttons__edit'
            onClick={() => handlerEdit(movie)}
            disabled={favoirite}
          >
            edit
          </button>
          <button 
            className='buttons__remove'
            onClick={() => handleRemove(movie)}
            disabled={favoirite}
          >
            remove movie
          </button>
        </div>
    </div>
  ))}
</div>
);
}

export default Card;
