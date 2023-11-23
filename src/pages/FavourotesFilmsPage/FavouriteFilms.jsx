import Films from "../../components/Films/Films";
import MainLayout from "../../components/layouts/MainLayout/MainLayout";
export default function FavouriteFilms() {
  return (
    <MainLayout page={'Favourite Films'}>
      <Films films={[]}/>
    </MainLayout>
  );
}
