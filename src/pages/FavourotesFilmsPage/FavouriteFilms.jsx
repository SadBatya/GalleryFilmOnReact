import MainLayout from '../../components/MainLayout';
import { useFilms } from '../../hooks/useFilms';
import Films from '../../components/Films';
import { useFavouriteFilms } from '../../hooks/useFavouriteFilms';
export default function FavouriteFilms() {
  const { films, loading, handleFavourite } = useFavouriteFilms() 
  
  return (
    <MainLayout page={'Favourite Films'}>
      {loading ? 'Loading...' : <Films films={films} onTopFavourite={handleFavourite}/>}
    </MainLayout>
  );
}
