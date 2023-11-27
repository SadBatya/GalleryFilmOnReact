import { useFilms } from "./useFilms"

export const useFavouriteFilms = () => {
  const { films, loading, handleFavourite } = useFilms()

  return {
    films: films.filter(film => film.favourite),
    loading,
    handleFavourite
  }
}