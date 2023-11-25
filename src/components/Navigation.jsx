import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'
export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavLink to={'/'}>All Films</NavLink>
      <NavLink to={'/favourite-films'}>Favourite Films</NavLink>
    </nav>
  );
}
