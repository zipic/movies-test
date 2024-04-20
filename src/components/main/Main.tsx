import './style.scss';
import Finder from "../finder/Finder";
import Card from '../card/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Form } from '../form/Form';

export const Main = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const isAdd = useSelector((state: RootState) => state.addOrEdit.isAdd);
  const isEdit = useSelector((state: RootState) => state.addOrEdit.isEdit);

  return (
    <div className="main">
      <Finder/>
      {isAdd || isEdit ? <Form /> : null }
      <Card movies={movies}/>
    </div>
  );
}

export default Main;