import FilmCard from '../../components/FilmCard';
import MainLayout from '../../components/MainLayout';
export default function FavouriteFilms() {
  return (
    <MainLayout page={'Favourite Films'}>
      <FilmCard films={[]} />
    </MainLayout>
  );
}
