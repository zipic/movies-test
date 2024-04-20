import { useDispatch } from 'react-redux';
import './style.scss';
import { setText } from '../../redux/inputSlice';
import { ChangeEvent } from 'react';

export const Finder = () => {
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setText(event.target.value))
  }

  return (
    <div className="finder">
      <img className="finder__img" src="./icons/search.svg" alt="" />
      <input 
        className="finder__search" 
        type="text"
        placeholder="Let's type..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Finder;