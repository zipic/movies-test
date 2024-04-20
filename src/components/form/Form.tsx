import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Movie } from "../../interfaces/movies";
import { addMovie, updateMovie } from "../../redux/movieSlice";
import './style.scss';
import { setAdd, setEdit } from "../../redux/addOrEditSlice";
import { RootState } from "../../redux/store";

export const Form = () => {
  const dispath = useDispatch();
  const moviesList = useSelector((state: RootState) => state.movies.movies);
  const isAdd = useSelector((state: RootState) => state.addOrEdit.isAdd);
  const isEdit = useSelector((state: RootState) => state.addOrEdit.isEdit);
  const editMovieId = useSelector((state: RootState) => state.addOrEdit.id);

  const [newMovie, setNewMovie] = useState<Movie>({
    id: 0,
    title: '',
    description: '',
    rating: 0,
    release_date: '',
    genre: [],
    actors: [],
    director: '',
    image: ''
  });

  useEffect(() => {
    if (isEdit && editMovieId !== null) {
      const editedMovie = moviesList.find(movie => movie.id === editMovieId);
      if (editedMovie) {
        setNewMovie(editedMovie);
      }
      console.log(editMovieId);
    }
  }, [isEdit, editMovieId, moviesList]);

  const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newValueArray = value.split(',');
    if (isAdd) {
      setNewMovie({ ...newMovie, [name]: newValueArray });
    } else if (isEdit) {
      const editedMovieCopy = { ...newMovie, [name]: newValueArray };
      setNewMovie(editedMovieCopy);
    }
  }

  const handlerSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isAdd) {
      dispath(addMovie(newMovie));
      dispath(setAdd(false));
    } else if (isEdit) {
      dispath(updateMovie(newMovie))
      dispath(setEdit(false))
    }
    
    setNewMovie({
      id: 0,
      title: '',
      description: '',
      rating: 0,
      release_date: '',
      genre: [],
      actors: [],
      director: '',
      image: ''
    });
  };

  const handlerClose = () => {
    dispath(setAdd(false));
    dispath(setEdit(false));
  }

  return (
    <div>
      <form className="form" onSubmit={handlerSubmit}>
        <label className="form__label">
          Title:
          <input 
            type="text"
            name="title" 
            value={newMovie.title}
            onChange={handlerInput}
          />
        </label>
        <label className="form__label">
          Description:
          <input 
            type="text"
            name="description"
            value={newMovie.description}
            onChange={handlerInput}
          />
        </label>
        <label className="form__label">
          Rating:
          <input 
            type="text"
            name="rating"
            value={newMovie.rating}
            onChange={handlerInput}
          />
        </label>
        <label className="form__label">
          Release_date:
          <input 
            type="text"
            name="release_date"
            value={newMovie.release_date}
            onChange={handlerInput}
          />
        </label>
        <label className="form__label">
          Genre:
          <input 
            type="text"
            name="genre"
            value={newMovie.genre}
            onChange={handlerInput}
          />
        </label>
        <label className="form__label">
          Actors:
          <input 
            type="text"
            name="actors"
            value={newMovie.actors}
            onChange={handlerInput}
          />
        </label>
        <label className="form__label">
          Director:
          <input 
            type="text"
            name="director"
            value={newMovie.director}
            onChange={handlerInput}
          />
        </label>
        <label className="form__label">
          Image_url:
          <input 
            type="text"
            name="image"
            value={newMovie.image}
            onChange={handlerInput}
          />
        </label>
        <div className="box">
          <button
            type="submit"
            className="form__button"
          >
            { isAdd ? 'Add new ' : 'Edit ' } Movie
          </button>
          <button
            className="form__button"
            onClick={() => handlerClose()}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;