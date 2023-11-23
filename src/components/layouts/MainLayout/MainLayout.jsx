import Navigation from "../../Navigation/Navigation"
import styles from './MainLayout.module.css'
export default function MainLayout( { children, page }) {
  return (
    <div className={styles.main__layout}>
      <h1>{page}</h1>
      <Navigation />
      <div>Список фильмов</div>
      {children}
    </div>
  )
}
