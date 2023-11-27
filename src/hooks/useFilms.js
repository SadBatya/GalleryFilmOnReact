import { useEffect, useState } from 'react';
import axios from 'axios';
import localeStorageService from '../utils/localeStorageService';

export const useFilms = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://www.omdbapi.com/?s=marvel&apikey=9b67fc54')
      .then((response) => {
        const filmFromLocalStorage = localeStorageService.getFilmsByIds();
        const newData = response.data.Search;
        const updatedFilms = newData.map((item) => ({
          ...item,
          favourite: !!filmFromLocalStorage.find((filmId) => filmId === item.imdbID)
        }));
        setFilms(updatedFilms);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  const handleFavourite = (id) => {
    localeStorageService.toggleFilmId(id);
    const updatedFilms = films.map((film) => ({
      ...film,
      favourite: film.favourite && id === film.imdbID ? !film.favourite : film.favourite
    }));
    setFilms(updatedFilms);
  }

  return {
    films,
    loading,
    handleFavourite
  }
}