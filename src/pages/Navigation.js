import { NavLink } from 'react-router-dom'
import s from '../css/Navigation.module.css'

export default function Navigation() {
    return (
        <nav>
            <NavLink to='/' className={s.link}>
                Home
            </NavLink>

            <NavLink to='/movies' className={s.link}>
                Movies
            </NavLink>
        </nav>
        )
}