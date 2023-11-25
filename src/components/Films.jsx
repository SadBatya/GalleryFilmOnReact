import FilmCard from './FilmCard';
import styles from './Films.module.css'
export default function Films({ films, onTopFavourite }) {
  return (
    <div className={styles.film__list}>
      {films.map((film) => (
        <FilmCard
          onTopFavourite={onTopFavourite}
          key={film.imdbID}
          name={film.Title}
          poster={film.Poster}
          year={film.Year}
          favourite={film.favourite}
          imdbID={film.imdbID}
        />
      ))}
    </div>
  );
}
