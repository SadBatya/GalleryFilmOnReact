import FilmCard from "../FilmCard/FilmCard"


export default function Films({ films }) {
  return (
    <div>
      
      {films?.map((film) => {
         <FilmCard 
         key={film.filmId}
         film={film}
         />
      })}
    </div>
  )
}
