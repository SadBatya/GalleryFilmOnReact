import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FilmsPage from './pages/FilmPage/FilmsPage';
import FavouriteFilms from './pages/FavourotesFilmsPage/FavouriteFilms';

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route
            path='/'
            element={<FilmsPage />}
          />
          <Route
            path='/favourite-films'
            element={<FavouriteFilms />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
