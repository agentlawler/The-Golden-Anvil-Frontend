import { NavLink } from "react-router-dom"

const Nav = () => {

    return (
        <nav>
            <ul className="navbar-links">
                <li><NavLink to="/"></NavLink></li>
                <li><NavLink to="/blank1"></NavLink></li>
                <li><NavLink to="/blank2"></NavLink></li>
                <li><NavLink to="/blank3"></NavLink></li>
                <li><NavLink to="/blank4"></NavLink></li>
                <li><NavLink to="/blank5"></NavLink></li>
            </ul>
        </nav>
    )

}

export default Nav