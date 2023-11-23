import MainLayout from "../../components/layouts/MainLayout/MainLayout"
import Films from "../../components/Films/Films"
import { useEffect } from "react"
import { fetchFilms } from "../../api/filmsApi"
export default function FilmsPage() {

  // useEffect(() => {
  //   fetchFilms()
  //     .then(data => {
  //       console.log(data.json())
  //     })
  // }, [])


  return (
    <MainLayout 
    page={'All Films'}
    >
      <Films films={[]}/>
    </MainLayout>
  )
}
