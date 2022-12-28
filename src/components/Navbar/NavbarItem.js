import { NavLink } from 'react-router-dom'

const NavbarItem = (props) => {
    const page = props.pagename

    return (
        <li className="nav__item">
            <NavLink to={page} className="nav__link"  activeClassName="active-link">{props.pagename}</NavLink>
        </li>
    )
}

export default NavbarItem