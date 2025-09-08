import { NavLink } from "react-router"
import styles from './HomePage.module.css'

export const HomePage = () => {
  const { container } = styles;
  return (
    <section>
      <div className={container}>
        <NavLink to='/posts'>Go to all Posts</NavLink>
        <NavLink to = '/users'>Go to all Users</NavLink>
      </div>
    </section>
  )
}