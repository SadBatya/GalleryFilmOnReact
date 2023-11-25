import styles from './FilmCard.module.css';
import HeartWhite from './../svg/heart-white.svg';
import HeartBlack from './../svg/heart-black.svg';


export default function FilmCard({ name, poster, year, favourite, onTopFavourite, imdbID }) {
  return (
    <div className={styles.film__card}>
      <img
        className={styles.film__poster}
        src={poster}
        alt=''
      />
      <p className={styles.film__name}>{name}</p>
      <p>{year}</p>
      <div className={styles.favourite}
        onClick={() => onTopFavourite(imdbID)}
      >
        {favourite ?  <img className={styles.film__like} src={HeartWhite} /> : <img className={styles.film__like} src={HeartBlack} />}
      </div>
    </div>
  );
}
