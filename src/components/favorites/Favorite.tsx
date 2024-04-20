import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Card from "../card/Card";
import './style.scss';
import { Form } from "../form/Form";


export const Favorite = () => {
  const favoriteMovies = useSelector((state: RootState) => state.favorite.favoriteMovies);
  const isAdd = useSelector((state: RootState) => state.addOrEdit.isAdd);
  const isEdit = useSelector((state: RootState) => state.addOrEdit.isEdit);
  

  return (
    <div className="section">
      {isAdd || isEdit ? <Form /> : null }
      <div className="favorite">
        {favoriteMovies.length ? 
        <Card movies={favoriteMovies} />
        : <h1 className="section__clear">Oops your favorite list is empty</h1>
      }
      </div>
    </div>
  );
}


export default Favorite;