import MainLayout from '../../components/MainLayout';
import Films from '../../components/Films';
import { useFilms } from '../../hooks/useFilms';


export default function FilmsPage() {
  const { films, loading, handleFavourite } = useFilms()

  return (
    <MainLayout page={'All Films'}>
      {loading ? 'Loading...' : <Films films={films} onTopFavourite={handleFavourite}/>}
    </MainLayout>
  );
}
