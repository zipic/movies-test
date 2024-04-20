import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { RootState } from '../../redux/store';
import { Link, useLocation } from 'react-router-dom';
import { setAdd } from '../../redux/addOrEditSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state: RootState) => state.favorite.favoriteMovies);
  const currentUrl = useLocation();
  const favoirite = currentUrl.pathname === '/favorites';
  
  return (
    <div className="header">
    <Link className='header__logo' to="/">
      <img className='header__icon' src="./icons/movies.svg" alt="movie" />
    </Link>
    <div className='header__favorites'>
    <Link className='header__favorites-link' to="/favorites">
      favorite
    </Link>
    {favoriteMovies.length ? 
    <div className='header__favorites-count'>{favoriteMovies.length}</div>
    : null
  }
    </div>
    <button 
      className='header__add'
      onClick={() => dispatch(setAdd(true))}
      disabled={favoirite}
    > 
      Add new movie
    </button>
    </div>
  );
}

export default Header;