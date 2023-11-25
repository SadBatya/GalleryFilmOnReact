import MainLayout from '../../components/MainLayout';
import Films from '../../components/Films';
import { useEffect, useState } from 'react';
import axios from 'axios';
import localeStorageService from '../../utils/localeStorageService';

export default function FilmsPage() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://www.omdbapi.com/?s=marvel&apikey=9b67fc54')
      .then((response) => {
        setFilms(response.data.Search);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  const handleFavourite = (id) => {
    localeStorageService.toggleFilmId(id)
  }

  return (
    <MainLayout page={'All Films'}>
      {loading ? 'Loading...' : <Films films={films} onTopFavourite={handleFavourite}/>}
    </MainLayout>
  );
}
